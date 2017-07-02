import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import Home from './components/Home';
import Admin from './components/Admin';
import AboutUs1 from './components/AboutUs1';
import contactUs from './components/contactUs';
import dsAlgo from './components/dsAlgo';
import Editor from './components/Editor';
import Interview from './components/Interview';
import './index.css';
import store from './store/index.js';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Router, Route, IndexRoute} from 'react-router';
import { browserHistory } from 'react-router';


ReactDOM.render(
				<Provider store={store}>
						
						<Router history={browserHistory}>

							<Route path="/" component={App1}>
								
								<IndexRoute component={Home}></IndexRoute>
								<Route path="aboutUs" component={AboutUs1}></Route>
								<Route path="editor" component={Editor} ></Route>
								<Route path="interview" component={Interview} />
								<Route path="dsAndAlgo" component={dsAlgo} >
								</Route>
								<Route path="contactUs" component={contactUs} >
								</Route>	

							</Route>
							<Route path="admin" component={Admin} />
						
						</Router>
				</Provider>,
				 document.getElementById('root'));



