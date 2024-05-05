import { forwardRef } from "react";
 const ProjectDetail=forwardRef(function ProjectDetail({ data ,onDelete,addTask},ref) {
  return (
    <div className="w-[35rem] mt-16">
      <div className="w-[35rem] mt-16">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {data.title}
          </h1>
          <button onClick={()=>{onDelete(data);}} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <p className="mb-4 text-stone-400">{data.duedate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">{data.desc}</p>
        </header>
      </div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <input ref={ref} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={()=>{addTask(data);ref.current.value='';}} className="text-stone-600 hover:text-stone-950 ml-4">
        Add Task
      </button>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {data.tasks.map((value)=>{
          return(
            <li className="flex justify-between my-4">
          <span>{value}</span>
          <button className="text-stone-700 hover:text-red-500" >Clear</button>
        </li>
          );
        })}
        
      </ul>
    </div>
  );
});
export default ProjectDetail;