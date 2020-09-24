import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import phones from "./phones";
import phonesPage from "./phonesPage";
import phonePage from "./phonePage";
import basket from "./basket";

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
    phonePage,
    basket,
  });

export default createRootReducer;
