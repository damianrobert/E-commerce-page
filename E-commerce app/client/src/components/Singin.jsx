import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [pass, setPass] = useState(false);
  const userId = sessionStorage.getItem("userId");

  const dispatch = useDispatch();

  const handlePass = () => {
    setPass(!pass);
  };

  const Login = () => {
    const URL = "http://localhost:5555/api/authenticate";

    const body = {
      email: email,
      password: password,
    };

    if (email === "" || password === "") {
      alert("Plase fill all the required fields!");
    }

    const params = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(URL, params)
      .then(responseReceived)
      .then(processData)
      .catch(errorMessage);
  };

  const responseReceived = (response) => {
    if (response.ok) {
      alert("Successfully loged in!");
    } else {
      alert("Failed to log in!");
    }

    return response.json();
  };

  const processData = (data) => {
    localStorage.setItem("userId", data.id);
    localStorage.setItem("userEmail", data.email);

    sessionStorage.setItem("userId", data.id);
    sessionStorage.setItem("userEmail", data.email);
  };

  const errorMessage = (error) => {
    alert(error.message);
  };

  return (
    <div className=" w-[340px] md:w-[400px] mx-auto bg-[#ffb983]  px-[20px] py-[30px] rounded-[10px] ">
      <div>
        <input
          className=" w-full  p-[5px] rounded-[5px] mb-[20px] 
          bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none px-[15px] "
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <input
          className=" w-full  p-[5px] rounded-[5px] mb-[20px] 
          bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none px-[15px] "
          type={pass ? `text` : `password`}
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className=" flex justify-end mb-[25px] ">
        <input
          className=" inline-block mr-[5px]  "
          type="checkbox"
          onClick={handlePass}
        />
        <p className=" inline-block ">Show password</p>
      </div>

      <button
        className=" w-full p-[5px] rounded-[5px] mb-[20px] bg-[#FF7E1B] text-white
          tracking-[5px] font-bold "
        onClick={Login}
      >
        LOGIN
      </button>

      <div
        className=" w-full p-[5px] rounded-[5px] mb-[20px] bg-[#FF7E1B] text-white
          tracking-[5px] font-bold flex justify-center items-center "
      >
        <Link to="/Profile">CLOSE</Link>
      </div>
    </div>
  );
}
