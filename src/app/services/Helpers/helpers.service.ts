import { IGridConfig, IOrder } from '../../interfaces';
import { CompositeFilterDescriptor, FilterDescriptor, State } from '@progress/kendo-data-query';

export class HelpersService {
  static prepareOrders(data: Array<IOrder>) {
    return data.map((order: IOrder) => {
      let date = new Date(order.modified_date);
      date.setHours(0, 0, 0, 0);

      return {
        ...order,
        modified_date: date
      }
    })
  }

  static prepareDataState(filter: any, gridDataState: State) {
    let newDataState: IGridConfig['gridDataState'] = { ...gridDataState };
    let filters: Array<FilterDescriptor | CompositeFilterDescriptor> = [];

    if (filter.amount) {
      filters.push({ field: 'amount', operator: 'startswith', value: filter.amount });
      newDataState.filter = {
        logic: 'and',
        filters: filters
      };

      newDataState.skip = 0
    }

    if (filter.date) {
      filters.push({ field: 'modified_date', operator: 'eq', value: filter.date });
      newDataState.filter = {
        logic: 'and',
        filters: filters
      };

      newDataState.skip = 0
    }

    if (!filter.date && !filter.amount) {
      delete newDataState.filter;
      newDataState.skip = 0
    }

    return newDataState;
  }
}
