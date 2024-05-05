import Button from "./Buttons";
import { fields } from "../App";
export default function ProjectSideBar({ onPress, onProj }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onHandle={onPress}>+Add Project</Button>
      </div>
      <ul className="mt-8">
        {fields.map((value) => {
          return (
            <button
              onClick={onProj}
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
              key={value.title}
            >
              {value.title}
            </button>
          );
        })}
      </ul>
    </aside>
  );
}
