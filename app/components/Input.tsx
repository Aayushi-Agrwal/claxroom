interface InputProps {
  width: string;
  type: string;
  maxLength?: number;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  width,
  maxLength,
  placeholder,
  value,
  onChange,
  name,
}) => {
  const handleNameChange = (newValue: string) => {
    onChange(newValue);
  };
  return (
    <input
      className={`shadow appearance-none border rounded ${width} py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
      maxLength={maxLength}
      value={value}
      name={name}
      onChange={(e) => handleNameChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
