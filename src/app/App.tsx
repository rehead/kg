import React from 'react';

// CSS
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

// Interfaces
import { IAppState, AppProps, IGridConfig, IOrder, IFilter } from './interfaces';
import { AxiosResponse } from 'axios';
import { GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { FormProps } from '@progress/kendo-react-form';

// Components
import GridToolbarContainer from './components/GridToolbarContainer/GridToolbarContainer';
import GridContainer from './components/GridContainer/GridContainer';

// Services
import { ApiService } from './services/Api/api.service';

// Helpers
import { HelpersService } from './services/Helpers/helpers.service';

// App config
import { gridConfig } from './App.config';

class App extends React.Component<AppProps> {
  state: IAppState;
  apiService: ApiService;
  gridConfig: IGridConfig = {...gridConfig};

  constructor(props: AppProps) {
    super(props);

    this.apiService = this.props.services.apiService;

    this.state = {
      orders: [],
      filter: {
        date: null,
        amount: ''
      },
      gridConfig: this.gridConfig,
      gridDataState: this.gridConfig.gridDataState
    }
  }

  componentDidMount(): void {
    this.apiService.getOrders().then((result: AxiosResponse<Array<IOrder>>) => {
      this.setState({
        orders: HelpersService.prepareOrders(result.data)
      })
    })
  }

  handleFilterSubmit: FormProps['onSubmit'] = (filter: IFilter) => {
    this.setState({
      filter: {...filter},
      gridDataState: HelpersService.prepareDataState(filter, this.state.gridConfig.gridDataState)
    });
  };

  handleGridDataStateChange = (event: GridDataStateChangeEvent) => {
    this.setState({gridDataState: event.data});
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined  {
    return (
        <div className="container">
          <h1>Grid Filter</h1>
          <GridToolbarContainer handleFilterSubmit={this.handleFilterSubmit} formData={this.state.filter}/>
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
