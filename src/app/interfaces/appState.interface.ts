import { State } from '@progress/kendo-data-query';
import { IOrder } from './order.interface';
import { IGridConfig } from './gridContainer.interface';
import { IFilter } from './filter.interface';

export interface IAppState {
  orders: Array<IOrder>;
  filter: IFilter
  gridConfig: IGridConfig;
  gridDataState: State;
}
