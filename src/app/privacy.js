import 'babel-polyfill';
import React                from 'react';
import ReactDOM             from 'react-dom';
import { PrivacyPolicy }    from './views';

import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.style.scss';
require('./style/opensans/opensans.scss');

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

ReactDOM.render(<PrivacyPolicy />, BootstrapedElement);
