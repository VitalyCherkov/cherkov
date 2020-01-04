import * as React from 'react';
import { render } from 'react-dom';
import fitScreen from 'shared/utils/fitScreen';
import App from './js/App.jsx';
import './scss/main.scss';

render(<App />, document.getElementById('app'));

fitScreen();
