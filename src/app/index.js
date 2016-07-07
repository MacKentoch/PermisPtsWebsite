import 'babel-polyfill';
import React                from 'react';
import ReactDOM             from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { Home }             from './views';

import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.style.scss';
require('./style/opensans/opensans.scss');

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

ReactDOM.render(<Home />, BootstrapedElement);
