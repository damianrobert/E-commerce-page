import { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  console.log(firstName);

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

  const processData = (data) => {
    window.location.href = "App.jsx";
  };

  const raisedError = (error) => {
    alert(error.message);
  };

  return (
    <div
      className=" w-[400px] mx-auto mt-[100px] py-[20px]
    px-[30px] bg-[#0c36514b] rounded-[10px] "
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
          bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none "
        />
      </div>

      <div>
        <input
          id="lastName"
          placeholder="LastName"
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          className=" w-full  p-[5px] rounded-[5px] mb-[20px]
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none "
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
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none "
        />
      </div>

      <div>
        <input
          id="password"
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className=" w-full  p-[5px] rounded-[5px] mb-[20px]
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none "
        />
      </div>

      <div>
        <input
          id="secondPassword"
          placeholder="Re-enter Password"
          type="password"
          onChange={(event) => {
            setSecondPassword(event.target.value);
          }}
          className=" w-full  p-[5px] rounded-[5px] mb-[20px]
           bg-gray-200 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6)] outline-none "
        />
      </div>

      <div>
        <button
          onClick={createAccount}
          className=" w-full  p-[5px] rounded-[5px] mb-[20px] bg-[#FF7E1B] text-white
          tracking-[5px]"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}
