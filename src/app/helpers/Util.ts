import { IGridConfig, IOrder } from '../interfaces';
import { State } from '@progress/kendo-data-query';

export class Util {
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

    if (filter.amount) {
      newDataState.filter = {
        logic: 'and',
        filters: [{ field: 'amount', operator: 'startswith', value: filter.amount }]
      };

      newDataState.skip = 0
    }
    if (filter.date) {
      newDataState.filter = {
        logic: 'and',
        filters: [{ field: 'modified_date', operator: 'eq', value: filter.date }]
      }
      newDataState.skip = 0
    }
    if (!filter.date && !filter.amount) {
      delete newDataState.filter;
      newDataState.skip = 0
    }

    return newDataState;
  }
}
