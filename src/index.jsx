import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import fitScreen from 'shared/utils/fitScreen';
import stores from 'store';
import App from './js/App.jsx';
import './scss/main.scss';

const render = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider {...stores}>{Component}</Provider>
    </BrowserRouter>,
    document.getElementById('app')
  );
};

render(<App />);

fitScreen();
