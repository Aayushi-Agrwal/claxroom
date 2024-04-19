function ButtonSubmit({ name }: { name: string }) {
  return (
    <button className="bg-[#FF9292] hover:bg-[#FFB4B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-8">
      {name}
    </button>
  );
}

export default ButtonSubmit;

export function ButtonDisabled({ name }: { name: string }) {
  return (
    <button className="bg-slate-500 cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-8">
      {name}
    </button>
  );
}
