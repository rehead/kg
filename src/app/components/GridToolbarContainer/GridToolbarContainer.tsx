import React from 'react';

// Interfaces
import { IGridToolbarProps } from '../../interfaces';
import GridForm from '../GridForm/GridForm';

export default class GridToolbarContainer extends React.Component<IGridToolbarProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined  {
    return (
        <div className='k-grid-toolbar'>
          <GridForm handleSubmit={this.props.handleFilterSubmit} />
        </div>
    )
  }
}
