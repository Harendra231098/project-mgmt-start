import Button from "./Buttons";
import img from "/src/assets/no-projects.png";
export default function NoProjectSelected({ onPress }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={img} />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <Button onHandle={onPress}>Create New Project</Button>
    </div>
  );
}
