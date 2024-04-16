"use client";

import PasswordInput from "@/app/components/PasswordButton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Step1() {
  const [password, setPassword] = useState("");
  return (
    <div className="w-1/4 h-1/2">
      <h1 className="text-2xl text-stone-400 absolute left-1/3 mt-1 ml-4">
        <FontAwesomeIcon icon={faChevronLeft} />
      </h1>
      <div className="flex items-center">
        <div>
          <p className="text-sm text-stone-400">Step 1 of 3</p>
          <p className="text-md font-medium">Create a password</p>
        </div>
      </div>
      <div className="mt-8">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Password
        </label>
        <PasswordInput
          value={password}
          onChange={(value) => setPassword(value)}
        />
      </div>
    </div>
  );
}

export default Step1;
