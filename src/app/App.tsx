import React from 'react';

import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

import { IAppState, AppProps, IGridConfig, IOrder } from './interfaces';

import GridToolbarContainer from './components/GridToolbarContainer/GridToolbarContainer';
import GridContainer from './components/GridContainer/GridContainer';
import { gridConfig } from './App.config';
import { Util } from './helpers/Util';
import { ApiService } from './services/Api/api.service';
import { AxiosResponse } from 'axios';


class App extends React.Component<AppProps> {
  state: IAppState;
  apiService: ApiService;
  gridConfig: IGridConfig = {...gridConfig};

  constructor(props: AppProps) {
    super(props);

    this.apiService = this.props.services.apiService;

    this.state = {
      orders: [],
      gridConfig: this.gridConfig,
      gridDataState: this.gridConfig.gridDataState
    }
  }

  componentDidMount(): void {
    this.apiService.getOrders().then((res: AxiosResponse<Array<IOrder>>) => {
      this.setState({
        orders: Util.prepareOrders(res.data)
      })
    })
  }

  handleFilterSubmit = (filter: {date?: Date; amount?: number;}) => {
    this.setState({
      gridDataState: Util.prepareDataState(filter, this.state.gridConfig.gridDataState)
    });
  };

  handleGridDataStateChange = (e: any) => {
    this.setState({gridDataState: e.data});
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined  {
    return (
        <div className="App">
          <h1>Grid Filter</h1>
          <GridToolbarContainer handleFilterSubmit={this.handleFilterSubmit}/>
          <GridContainer config={this.gridConfig}
                         data={this.state.orders}
                         gridDataState={this.state.gridDataState}
                         handleGridDataStateChange={this.handleGridDataStateChange}
          />
        </div>
    );
  }
}

export default App;
