import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
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

      <span
        className={`ml-2 ${
          isValidPassword ? "text-green-500" : "text-red-500"
        }`}
      >
        Password must contain at least
      </span>
      <div
        className={`ml-2 ${
          isValidPassword.letter ? "text-green-500" : "text-red-500"
        }`}
      >
        {isValidPassword.letter ? "✔ 1 letter" : "✖ 1 letter"}
      </div>
      <div
        className={`ml-2 ${
          isValidPassword.number ? "text-green-500" : "text-red-500"
        }`}
      >
        {isValidPassword.number
          ? "✔ 1 number or special character (# ? ! &)"
          : "✖ 1 number or special character (# ? ! &)"}
      </div>
      <div
        className={`ml-2 ${
          isValidPassword.length ? "text-green-500" : "text-red-500"
        }`}
      >
        {isValidPassword.length ? "✔ 10 characters" : "✖ 10 characters"}
      </div>
    </div>
  );
};

export default PasswordInput;
