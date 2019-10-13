import { State } from '@progress/kendo-data-query';
import { GridColumnProps, GridDataStateChangeEvent } from '@progress/kendo-react-grid';

export interface IGridContainerProps {
  data: Array<any>;
  config: IGridConfig;
  gridDataState: State;
  handleGridDataStateChange: (e: GridDataStateChangeEvent) => void;
}

export interface IGridConfig {
  columns: Array<GridColumnProps>;
  gridDataState: State;
}
