import React from 'react';
import ReactDOM from 'react-dom';
import Product from "./products/Product";
import New from "./newProduct/New";
import * as serviceWorker from './serviceWorker';
import reducer from './reducer/MyReducer'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import {createStore} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductsDesc from "./products/ProductsDesc";
import App from "./stroges/App";
import './newProduct/main.css'
import SideBarss from "./newProduct/SideBarss";


ReactDOM.render(
    <Provider store={createStore(reducer,
        {
            customerList:[{}],
            isMOpen:false,
            productList:[{}],
            currentSlug:'',
            currentProductsImg:[]
        }
    )}>
        <Router>
            <Switch>
                {/*<Route path={'/productDesc/:slug'} component={ProductsDesc}/>*/}
                {/*<Route path={'/product'} component={Product}/>*/}
                <Route path={'/'} component={New}/>
                {/*<Route path={'/bar'} component={SideBarss}/>*/}
                {/*<Route path={'/app'} component={App}/>*/}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
