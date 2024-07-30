import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAddress from "./pages/AddAdress/AddAddress";
import CheckBag from "./pages/CheckBag";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import ItemView from "./pages/ItemView";
import { Provider } from "react-redux";
import AddPayment from "./pages/AddPayment";
import "./App.css";
import store from "./jsApp/redux/Store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/item-view" element={<ItemView />} />
            <Route path="/check-bag" element={<CheckBag />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/add-payment" element={<AddPayment />} />
            <Route path="/add-address" element={<AddAddress />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
