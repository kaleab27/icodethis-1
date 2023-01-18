import image1 from "./src/assets/image1.jpg";
import image2 from "./src/assets/image2.jpg";
import image3 from "./src/assets/image3.jpg";

export default [
  {
    id: 1,
    imageUrl: image1,
    name: "Bill Alvardo",
    position: "Digital product manager",
    previouslyAt: "google",
  },
  {
    id: 2,
    imageUrl: image2,
    name: "Alexander Hipp",
    position: "Human resources director",
    previouslyAt: "google",
  },
  {
    id: 3,
    imageUrl: image3,
    name: "Julian Wan",
    position: "Software engineer",
    previouslyAt: "google",
  },
];

let idCount = 3;
export const generateId = () => idCount + 1;
