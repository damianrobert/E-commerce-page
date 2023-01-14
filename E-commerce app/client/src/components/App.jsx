import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Signup from "./Signup";
import Signin from "./Singin";
import Profile from "./Profile";
import data from "../data";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Hero />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
