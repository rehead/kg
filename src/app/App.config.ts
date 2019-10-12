import { IGridConfig } from './interfaces';

export const gridConfig: IGridConfig  = {
  columns: [
    {
      field: "order_id",
      title: "Order ID"
    },
    {
      field: "modified_date",
      title: "Date Modified",
      filter: "date",
      format: "{0:d}"
    },
    {
      field: "shipment_country",
      title: "Shipment Country"
    },
    {
      field: "amount",
      title: "Amount"
    },
    {
      field: "description",
      title: "Description"
    }
  ],
  gridDataState: {
    sort: [
      { field: 'order_id', dir: 'asc' }
    ],
    skip: 0,
    take: 10
  }
};
