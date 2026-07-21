import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";

import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import ImportProducts from "./pages/ImportProducts";
function App() {

return (

<BrowserRouter>

<Routes>


<Route path="/" element={<Home />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/cart" element={<Cart />} />

<Route path="/profile" element={<Profile />} />

<Route path="/checkout" element={<Checkout />} />

<Route path="/order-success" element={<OrderSuccess />} />

<Route path="/my-orders" element={<MyOrders />} />

<Route path="/product/:id" element={<Product />} />

<Route path="/wishlist" element={<Wishlist />} />


<Route path="/admin" element={<Admin />} />

<Route path="/admin-dashboard" element={<AdminDashboard />} />
<Route path="/admin-products" element={<AdminProducts />} />
<Route path="/import-products" element={<ImportProducts />} />
</Routes>

</BrowserRouter>

);

}


export default App;
