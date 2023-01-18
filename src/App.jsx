import Card from "./components/Card";
import profiles from "../profiles";
import AddCard from "./components/addCard";

function App() {
  return (
    <div className="min-h-screen bg-primary text-white flex items-center justify-center">
      <div className="flex gap-12 flex-wrap justify-center items-center">
        {profiles.map((profile) => {
          const { id, imageUrl, name, position, previouslyAt } = profile;
          return (
            <Card
              key={id}
              imageUrl={imageUrl}
              name={name}
              position={position}
              previouslyAt={previouslyAt}
            />
          );
        })}
        <AddCard />
      </div>
    </div>
  );
}

export default App;
