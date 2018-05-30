import './main.scss'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'


import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'

import reducers from 'reducers/index.js'
import Layout from 'containers/layout'
import Movies from 'containers/movies'
import Film from 'containers/film'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Movies}/>
            </Route>
            <Route path='films/:id' component={Film}/>
        </Router>
    </Provider>,
    document.getElementById('app')
)
