import { State } from '@progress/kendo-data-query';

export interface IGridContainerProps {
  data: Array<any>;
  config: IGridConfig;
  gridDataState: State;
  handleGridDataStateChange: any;
}

export interface IGridConfig {
  columns: Array<any>;
  gridDataState: State;
}
