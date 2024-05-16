"use client";

import PasswordInput from "@/app/components/PasswordButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Signup() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    // Add your login logic here
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup Data:", signupData);
    // Add your signup logic here
  };

  return (
    <div className="flex items-center">
      <div className="w-1/2 mr-8">
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-8"
          onSubmit={handleLoginSubmit}
        >
          <h2 className="text-3xl font-bold mb-8">SignUp</h2>

          <div className="mb-8">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <Link href="signup/step1">
              <button
                className="bg-[#FF9292] hover:bg-[#FFB4B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Next
              </button>
            </Link>
          </div>
          <div className="mt-4">
            Already have an account?{" "}
            <div className="relative inline-block">
              <Link
                href="/login"
                className="text-[#FF9292] transition-colors duration-300 border-b-2 border-transparent hover:border-[#FF9292]"
              >
                Log in here.
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Image
        src="/bg-signup.png"
        alt="bg"
        width={1000}
        height={1000}
        className="w-1/2 h-screen"
      />
    </div>
  );
}

export default Signup;
