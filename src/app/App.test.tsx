import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiService } from './services/Api/api.service';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App services={{apiService: new ApiService()}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
