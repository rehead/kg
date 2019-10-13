import { FormProps } from '@progress/kendo-react-form';
import { IFilter } from './filter.interface';

export interface IGridFormProps {
  handleSubmit: FormProps['onSubmit'];
  formData: IFilter;
}
