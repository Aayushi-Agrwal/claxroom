"use client";

import Button, { ButtonDisabled } from "@/app/components/Button";
import Input from "@/app/components/Input";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

interface IDOB {
  year: number;
  month: number;
  date: number;
}
function Step2() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState<IDOB>({
    year: 0,
    month: 0,
    date: 0,
  });
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="w-1/4 h-1/2">
      <Link href="step1">
        <h1 className="text-2xl text-stone-400 absolute left-1/3 mt-1 ml-4">
          <FontAwesomeIcon icon={faChevronLeft} />
        </h1>
      </Link>
      <div className="flex items-center">
        <div>
          <p className="text-sm text-stone-400">Step 2 of 3</p>
          <p className="text-md font-medium">Tell us about yourself</p>
        </div>
      </div>
      <div className="mt-8">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Name
        </label>
        <Input
          width="w-full"
          type="text"
          onChange={(value) => setName(value)}
        />
      </div>

      <div className="mt-2">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Date of birth
        </label>
        <div className="flex justify-between">
          <Input
            width="w-1/4"
            type="number"
            name="year"
            maxLength={4}
            placeholder="yyyy"
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }} // onChange={(e) => setDob({...dob, [e.target.name] : e.target.value})}
          />

          <select
            name="month"
            id="month"
            className="w-1/2 py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline shadow border rounded"
          >
            <option disabled selected>
              Month
            </option>
            <option value="1">Janaury</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <Input
            width="w-1/6"
            type="number"
            maxLength={2}
            placeholder="dd"
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
      {disabled ? (
        <ButtonDisabled name="Next" />
      ) : (
        <Link href="step3">
          <Button name="Next" />
        </Link>
      )}
    </div>
  );
}

export default Step2;
