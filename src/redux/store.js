import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import categories from "./reducers/categories";
import items from './reducers/items'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
	items,
	categories
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store