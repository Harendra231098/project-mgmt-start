import NoProjectSelected from "./componenets/NoProjectSelected";
import NewProject from "./componenets/NewProject";
import ProjectSideBar from "./componenets/ProjectSideBar";
import { useState, useRef } from "react";
import Warning from "./componenets/Warning";
import ProjectDetail from "./componenets/ProjectDetail";
export const fields = [];

function App() {
  const [projectState, setProjectState] = useState(0);
  const [data, setData] = useState("");
  const [count, setCount] = useState(1);
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const dialog = useRef();
  const task = useRef();

  function handledata() {
    /*  fields.title = titleRef.current.value;
    fields.desc = descRef.current.value;
    fields.duedate = dateRef.current.value;
    console.log(fields);
    setProjectState(false);*/
    if (
      titleRef.current.value === "" ||
      descRef.current.value === "" ||
      dateRef.current.value === ""
    ) {
      dialog.current.showModal();
    } else {
      fields.push({
        id: count,
        title: titleRef.current.value,
        desc: descRef.current.value,
        duedate: dateRef.current.value,
        tasks:[],
      });
      console.log(fields);
      setProjectState(0);
      setCount((count)=>count+1);
    }
  }

  function handleState(toggle) {
    setProjectState(toggle);
  }
  function handleResult(data1) {
    setProjectState(2);
    setData(data1);
    //console.log(data1);
  }
  function handleDelete(data2) {
    setProjectState(0);
    fields.splice(data2.id-1,1);
    //console.log(data2)
    //console.log(fields);
  }

  function handleTask(data3)
  {
      //console.log(task.current.value);
      data3.tasks.push(task.current.value);
      handleResult(data3);
      console.log(fields);
  }
  return (
    <>
      <Warning refd={dialog} />
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar onProj={handleResult} onPress={() => handleState(1)} />
        {projectState === 0 && (
          <NoProjectSelected onPress={() => handleState(1)} />
        )}
        {projectState === 1 && (
          <NewProject
            ref1={titleRef}
            ref2={descRef}
            ref3={dateRef}
            onHandle={handledata}
            onPress={() => handleState(0)}
          />
        )}
        {projectState === 2 && <ProjectDetail addTask={handleTask} ref={task} onDelete={handleDelete} data={data} />}
      </main>
    </>
  );
}

export default App;
