import React from 'react';

import styles from './GridForm.module.css'

import { Field, Form, FormRenderProps } from '@progress/kendo-react-form';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Input } from '@progress/kendo-react-inputs';
import { IGridFormProps } from '../../interfaces';

export default class GridForm extends React.Component<IGridFormProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
        <Form
            onSubmit={this.props.handleSubmit}
            render={(formRenderProps: FormRenderProps) => {
              return (
                  <form onSubmit={formRenderProps.onSubmit} className={styles.form}>

                    <div className={styles.formField}>
                      <label>Date</label>
                      <Field name={'date'} component={DatePicker} />
                    </div>

                    <div className={styles.formField}>
                      <label>Amount</label>
                      <Field name={'amount'} component={Input} />
                    </div>

                    <div className="buttons">
                      <button
                          type={'submit'}
                          className="k-button"
                          disabled={!formRenderProps.allowSubmit}
                      >
                        Apply
                      </button>
                      <button
                          className={'k-button'}
                          onClick={(e) => {
                            formRenderProps.onChange('date', null);
                            formRenderProps.onChange('amount', '');
                          }}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
              )
            }}
        />

    );
  }
}
