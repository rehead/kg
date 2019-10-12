import { State } from '@progress/kendo-data-query';
import { IOrder } from './order.interface';
import { IGridConfig } from './gridContainer.interface';

export interface IAppState {
  orders: Array<IOrder>;
  gridConfig: IGridConfig;
  gridDataState: State;
}
