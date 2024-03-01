"use client";
import { useState } from "react";
import Link from "next/link";
import { signUp } from "../../../utility/actions";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const result = await signUp(name, email, password);
    if (result == null) {
      toggleVisible();
    }
    if (result == true) {
      toggleDisplay();
    }
    console.log(result);
  };

  const toggleVisible = () => {
    setVisible((visible) => !visible);
  };
  const toggleDisplay = () => {
    setSuccess((success) => !success);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {visible && (
        <div className="bg-red-600 text-white w-1/2 fixed z-20 top-14 left-[50%] translate-x-[-50%] my-5">
          <button className="absolute right-0 mx-3" onClick={toggleVisible}>
            X
          </button>
          <p className="text-center">A User with this email already exists</p>
        </div>
      )}
      {success && (
        <div className="bg-green-800 text-white w-1/2 fixed z-20 top-14 left-[50%] translate-x-[-50%] my-5">
          <button className="absolute right-0 mx-3" onClick={toggleDisplay}>
            X
          </button>
          <p className="text-center">
            Sign up successful. <Link href="/Login" className="text-blue-400">Login </Link>to your
            account.
          </p>
        </div>
      )}
      <p className="m-5 text-lg font-semibold">SIGN UP</p>
      <div className="md:w-1/3 w-full mx-10 bg-gray-700 p-5 flex flex-col space-y-4">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-2 bg-white"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="p-2 bg-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pasword" className="text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="p-2 bg-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2 bg-orange-600 text-white border-2 font-bold border-orange-600 hover:text-orange-600 hover:bg-white"
          onClick={handleSubmit}
        >
          SIGN UP
        </button>
        <p className="text-white my-3">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-300 hover:text-orange-400">
            Click here
          </Link>{" "}
          to login.
        </p>
      </div>
    </div>
  );
}
