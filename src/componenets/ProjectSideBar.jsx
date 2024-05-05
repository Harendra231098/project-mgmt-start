import Button from "./Buttons";
import { fields } from "../App";
import { forwardRef } from "react";
const ProjectSideBar = forwardRef(function ProjectSideBar(
  { onPress, onProj },
  refRes,
) {
  // const refRes = useRef();
  function handle(value) {
    //console.log(value.title);
    onProj(value);
  }

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
              ref={refRes}
              onClick={() => {
                handle(value);
              }}
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
              key={value.id}
            >
              {value.title}
            </button>
          );
        })}
      </ul>
    </aside>
  );
});
export default ProjectSideBar;
