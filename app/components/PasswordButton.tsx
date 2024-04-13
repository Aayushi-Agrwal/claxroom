import { useState } from "react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Password"
      />
      <label className="flex items-center mt-2">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600 rounded"
          checked={showPassword}
          onChange={toggleShowPassword}
        />
        <span className="ml-2 text-gray-400">Show Password</span>
      </label>
    </div>
  );
};

export default PasswordInput;
