import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from '../reducers/MainReducer'

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)
export default store