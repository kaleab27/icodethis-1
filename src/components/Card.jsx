import logo from "../assets/google.svg";

export default function Card(props) {
  const { imageUrl, name, position, previouslyAt } = props;
  return (
    <div className="aspect-3/4 max-w-[200px] bg-secondary rounded overflow-hidden">
      <div className="h-1/2 overflow-hidden">
        <img src={imageUrl} className="object-cover" alt="alt text" />
      </div>
      <div className="h-1/2 p-3 flex flex-col gap-3 space-between text-sm">
        <div>
          <p>{name}</p>
          <p className="text-gray-400">{position}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Previously</p>
          <img src={logo} className="h-10 relative -left-1" alt="logo" />
        </div>
      </div>
    </div>
  );
}
