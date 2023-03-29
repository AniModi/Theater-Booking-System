import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./containers/MovieList/Movies";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import Food from "./containers/Food/Food";
import Payment from "./containers/Payment/Payment";
import SelectSeat from "./containers/SelectSeat/SelectSeat";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Movies />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="signup" element={<SignUp />} />
      <Route exact path="food" element={<Food />} />
      <Route exact path="payment" element={<Payment />} />
      <Route exact path="seat" element={<SelectSeat />} />
      <Route exact path="about" element={<SelectSeat />} />
      <Route exact path="contactUs" element={<SelectSeat />} />
    </Routes>
  );
}

export default App;
