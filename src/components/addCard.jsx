export default function AddCard() {
  return (
    <div className="aspect-3/4 w-[200px] bg-secondary rounded overflow-hidden flex flex-col gap-2 items-center justify-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <p className="text-gray-400">Add more</p>
    </div>
  );
}
