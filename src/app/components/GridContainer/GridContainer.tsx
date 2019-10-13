import React from 'react';

// Interfaces
import { IGridContainerProps } from '../../interfaces';

// Components
import { Grid, GridColumn } from '@progress/kendo-react-grid';

// Helpers
import { process } from '@progress/kendo-data-query';

export default class GridContainer extends React.Component<IGridContainerProps> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined  {
    return (
        this.props.data ?
        <Grid
            data={process(this.props.data, this.props.gridDataState)}
            pageable={true}
            sortable={true}
            filterable={true}
            {...this.props.gridDataState}
            onDataStateChange={this.props.handleGridDataStateChange}
            style={{ height: "500px" }}>


          {this.props.config.columns.map((column, index) => <GridColumn {...column} key={index}/>)}
        </Grid> :
        <div>Loading...</div>
    )
  }

}
