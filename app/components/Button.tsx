function Button({ name }: { name: string }) {
  return (
    <button
      className="bg-[#FF9292] hover:bg-[#FFB4B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-8"
      type="submit"
    >
      {name}
    </button>
  );
}

export default Button;
