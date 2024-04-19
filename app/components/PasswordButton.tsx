import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  setDisabled: (disabled: boolean) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  setDisabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState({
    letter: false,
    number: false,
    length: false,
  });

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validatePasswordLetter = (password: string): boolean => {
    return /[a-zA-Z]/.test(password);
  };

  const validatePasswordNumber = (password: string): boolean => {
    return /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  };

  const validatePasswordLength = (password: string): boolean => {
    return password.length >= 10;
  };

  useEffect(() => {
    if (
      isValidPassword.length &&
      isValidPassword.letter &&
      isValidPassword.number
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);
  const handlePasswordChange = (newValue: string) => {
    onChange(newValue);
    setIsValidPassword({
      letter: validatePasswordLetter(newValue),
      number: validatePasswordNumber(newValue),
      length: validatePasswordLength(newValue),
    });
  };

  return (
    <div className="relative">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => handlePasswordChange(e.target.value)}
        placeholder="Password"
      />
      <button
        className="absolute top-0 right-0 mt-2 mr-4"
        onClick={toggleShowPassword}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <FontAwesomeIcon icon={faEye} color="black" />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} color="black" />
        )}
      </button>

      <span className="ml-2">Password must contain at least</span>
      <div className="mt-2">
        <span
          className={`ml-2 ${
            isValidPassword.letter ? "text-[#A5DD9B]" : "text-red-500"
          }`}
        >
          {isValidPassword.letter ? "✔ " : "✖ "}
        </span>
        <span className={`ml-2 ${!isValidPassword.letter && "text-red-500"}`}>
          1 letter
        </span>
      </div>
      <div className="mt-1">
        <span
          className={`ml-2 ${
            isValidPassword.number ? "text-[#A5DD9B]" : "text-red-500"
          }`}
        >
          {isValidPassword.number ? "✔ " : "✖ "}
        </span>
        <span className={`ml-2 ${!isValidPassword.letter && "text-red-500"}`}>
          1 number or special character (# ? ! &)
        </span>
      </div>
      <div className="mt-1">
        <span
          className={`ml-2 ${
            isValidPassword.length ? "text-[#A5DD9B]" : "text-red-500"
          }`}
        >
          {isValidPassword.length ? "✔ " : "✖ "}
        </span>
        <span className={`ml-2 ${!isValidPassword.letter && "text-red-500"}`}>
          10 characters
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
