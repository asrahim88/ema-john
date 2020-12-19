import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Components/Review/Review';
import Manage from './Components/Manage/Manage';
import NotMatch from './Components/NotMatch/NotMatch';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Shipment from './Components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path = "/shop">
          <Shop></Shop>
          </Route>
          <Route path = "/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path = "/review">
          <Review></Review>
          </Route>
          <Route path = "/manage">
          <Manage></Manage>
          </Route>
          <Route exact path = "/">
            <Shop></Shop>
          </Route>
          <Route path = "/product/:key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path = "*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
