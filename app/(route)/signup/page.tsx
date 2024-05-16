"use client";

// import PasswordInput from "@/app/components/PasswordButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Signup() {
  const [signupEmail, setSignupEmail] = useState<string>(() => {
    const storedEmail = localStorage.getItem("signupEmail");
    return storedEmail ? JSON.parse(storedEmail) : "";
  });

  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const router = useRouter();

  function isValidEmail(email: string) {
    // Define a regular expression pattern for email validation.
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(false);
    setSignupEmail(e.target.value);
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signupEmail && isValidEmail(signupEmail)) {
      setErrorMessage(false);
      console.log(signupEmail);
      localStorage.setItem("signupEmail", JSON.stringify(signupEmail));
      console.log("Signup Data:", signupEmail);
      router.push("signup/step1");
    } else {
      console.log("error");
      setErrorMessage(true);
    }
  };

  return (
    <div className="flex items-center">
      <div className="w-1/2 mr-8">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-8">
          <h2 className="text-3xl font-bold mb-8">SignUp</h2>

          <form onSubmit={handleSignupSubmit}>
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
                // type="email"
                placeholder="Email"
                name="email"
                value={signupEmail}
                onChange={handleSignupChange}
                // required
              />

              {errorMessage && (
                <div className="mt-6 text-sm text-red-500 flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  This email is invalid. Make sure it's written like
                  example@email.com
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-[#FF9292] hover:bg-[#FFB4B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Next
              </button>
            </div>
          </form>

          <div className="mt-6">
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
        </div>
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
