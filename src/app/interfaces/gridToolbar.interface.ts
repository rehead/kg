import { FormProps } from '@progress/kendo-react-form';
import { IFilter } from './filter.interface';

export interface IGridToolbarProps {
  handleFilterSubmit: FormProps['onSubmit'],
  formData: IFilter
}
