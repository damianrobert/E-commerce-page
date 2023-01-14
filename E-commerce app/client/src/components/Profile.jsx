import { Link } from "react-router-dom";
import { useState } from "react";
import user from "../assets/images/user-icon.png";
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const userId = sessionStorage.getItem("userId");

  const dispatch = useDispatch();

  const handleVisibility = () => {
    setShowPass(!showPass);
  };

  const handleLogin = () => {
    setRegister(!register);
    setLogin(!login);
  };

  const handleRegisterForm = () => {
    setRegister(!register);
  };

  const getUserDetails = () => {
    const URL = "http://localhost:5555/api/authenticate";

    const body = {
      firstName: firstName,
      lastName: lastName,
    };

    const params = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(URL, params).then(received).then(receivedData).catch(raisedError);

    const received = (response) => {
      if (!response.ok) {
        alert("Something went wrong!");
      }
    };

    const receivedData = (data) => {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userEmail", data.email);

      sessionStorage.setItem("userId", data.id);
      sessionStorage.setItem("userEmail", data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
    };

    const raisedError = (e) => {
      alert(e.message);
    };
  };

  const createAccount = () => {
    if (!firstName || !lastName || !email || !password || !secondPassword) {
      alert("You must fill all the required fields!");
    }

    const URL = "http://localhost:5555/api/register";
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      secondPassword: secondPassword,
    };

    const params = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(URL, params).then(requestFinished).catch(raisedError);
  };

  const requestFinished = (response) => {
    if (!response.ok) {
      ("Something went wrong!");
      return response.json();
    } else {
      alert("Your account has been successfully created!");
    }
  };

  const raisedError = (error) => {
    alert(error.message);
  };
  return (
    <div
      className=" w-[350px]  md:w-[1110px] h-[600px] bg-[#fcd6b9] rounded-[10px] mx-auto py-[30px] 
    shadow-inner  "
    >
      <div className=" w-[250px] h-[300px] mx-auto bg-[#fecfab] rounded-[10px]  ">
        <img src={user} alt="" className=" w-[40px] ml-[100px] " />
        <div className=" w-fit mx-auto text-[20px] mb-[10px]  ">
          <p className=" inline-block mr-[10px]  ">{firstName}</p>
          <p className=" inline-block ">{lastName}</p>
        </div>
        <div
          className=" w-[230px] h-[35px] mx-auto bg-[#ffbc89] rounded-[5px] mb-[15px] text-white
        font-bold flex justify-between px-[10px] items-center shadow-md  "
        >
          <p className=" inline-block ">Orders placed</p>
          <p className=" inline-block ">12</p>
        </div>

        <div
          className=" w-[230px] h-[35px] mx-auto bg-[#ffbc89] rounded-[5px] mb-[15px] text-white
        font-bold flex justify-between px-[10px] items-center shadow-md "
        >
          <p className=" inline-block ">Membership</p>
          <p className=" inline-block ">Standard</p>
        </div>

        <div
          className=" w-[230px] h-[35px] mx-auto bg-[#ffbc89] rounded-[5px] mb-[15px] text-white
        font-bold flex justify-between px-[10px] items-center shadow-md "
        >
          <p className=" inline-block ">Coupon code</p>
          <p className=" inline-block ">J87v00dX</p>
        </div>

        <div
          className=" w-[230px] h-[35px] mx-auto bg-[#ffbc89] rounded-[5px] mb-[15px] text-white
        font-bold flex justify-between px-[10px] items-center shadow-md "
        >
          <p className=" inline-block ">Last month orders</p>
          <p className=" inline-block ">4</p>
        </div>
      </div>

      <Link
        className=" w-[300px] h-[30px] mx-auto bg-[#ffbc89] mt-[20px] rounded-[5px] flex 
      justify-center items-center text-white font-bold text-[19px] hover:cursor-pointer "
        to="/"
      >
        Home
      </Link>

      <Link
        className=" w-[300px] h-[30px] mx-auto bg-[#ffbc89] mt-[20px] rounded-[5px] flex 
      justify-center items-center text-white font-bold text-[19px] hover:cursor-pointer "
        onClick={handleRegisterForm}
      >
        Click to sign-up
      </Link>

      <div
        className={
          register
            ? ` w-full h-[920px] bg-[#292929cc] absolute top-[0px] left-0 opacity-90 duration-500 z-[2] `
            : null
        }
      ></div>

      <div
        className={
          register
            ? `w-[340px] md:w-[400px] mx-auto mt-[100px] py-[20px] left-[15px] z-[3]
          px-[30px] bg-[#ffb983] rounded-[10px] absolute top-[0px] duration-500 md:left-[550px] `
            : `absolute bottom-[1000%]`
        }
      >
        <div>
          <input
            id="firstName"
            placeholder="First Name"
            type="text"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            className=" w-full  p-[5px] rounded-[5px] mb-[20px] 
          bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none px-[15px] "
          />
        </div>

        <div>
          <input
            id="lastName"
            placeholder="Last Name"
            type="text"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            className=" w-full  p-[5px] rounded-[5px] mb-[20px]
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none px-[15px] "
          />
        </div>
        <div>
          <input
            id="email"
            placeholder="Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className=" w-full  p-[5px] rounded-[5px] mb-[20px]
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none px-[15px] "
          />
        </div>
        <div>
          <input
            id="password"
            placeholder="Password"
            type={showPass ? `password` : `text`}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className=" w-full  p-[5px] rounded-[5px] mb-[20px]
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none px-[15px] "
          />
        </div>
        <div>
          <input
            id="secondPassword"
            placeholder="Confirm Password"
            type={showPass ? `password` : `text`}
            onChange={(event) => {
              setSecondPassword(event.target.value);
            }}
            className=" w-full p-[5px] rounded-[5px] mb-[10px]
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none px-[15px] "
          />
        </div>

        <div className=" flex justify-end mb-[25px] ">
          <input
            className=" inline-block mr-[5px]  "
            type="checkbox"
            onClick={handleVisibility}
          />
          <p className=" inline-block ">Show password</p>
        </div>

        <div>
          <button
            onClick={createAccount}
            className=" w-full p-[5px] rounded-[5px] mb-[20px] bg-[#FF7E1B] text-white
          tracking-[5px] font-bold "
          >
            REGISTER
          </button>
          <button
            className=" w-full p-[5px] rounded-[5px] mb-[20px] bg-[#FF7E1B] text-white
          tracking-[5px] font-bold "
            onClick={handleRegisterForm}
          >
            CLOSE
          </button>
          <p className=" text-[#ffffff] font-bold inline-block ">
            To login in your account, click&nbsp;
            <Link
              to="/Signin"
              className=" text-[#FF7E1B] hover:cursor-pointer inline-block "
            >
              here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
