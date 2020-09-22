import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import phones from "./phones";
import phonesPage from "./phonesPage";

const createRootReducer = (history) =>
  combineReducers({
    /*
    we can use all information about DIRECT ROUTE, 
    which params do we have in current page,
    which page is active now*/
    // ROUTER reducer
    router: connectRouter(history),

    // Rest reducers
    phones,
    phonesPage,
  });

export default createRootReducer;
