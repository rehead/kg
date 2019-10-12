import axios, { AxiosInstance } from 'axios';

export class ApiService {
  get instance():AxiosInstance {
    return axios.create({
      baseURL: `${process.env.PUBLIC_URL}/mock-api/`
    });
  }

  getOrders() {
    return this.instance.get('orders.json');
  }
}

export type $ApiService = {apiService: ApiService};
