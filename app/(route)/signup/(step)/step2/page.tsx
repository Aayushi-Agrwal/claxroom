import Button from "@/app/components/Button";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Step2() {
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
        {/* <PasswordInput
          value={password}
          onChange={(value) => setPassword(value)}
        /> */}
      </div>
      <Link href="step3">
        <Button name="Next" />
      </Link>
    </div>
  );
}

export default Step2;
