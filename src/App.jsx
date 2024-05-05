import NoProjectSelected from "./componenets/NoProjectSelected";
import NewProject from "./componenets/NewProject";
import ProjectSideBar from "./componenets/ProjectSideBar";
import { useState, useRef } from "react";
import Warning from "./componenets/Warning";
import ProjectDetail from "./componenets/ProjectDetail";
export const fields = [];

function App() {
  const [projectState, setProjectState] = useState(0);
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const dialog = useRef();

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
        title: titleRef.current.value,
        desc: descRef.current.value,
        duedate: dateRef.current.value,
      });
      console.log(fields);
      setProjectState(0);
    }
  }

  function handleState(toggle) {
    setProjectState(toggle);
  }

  return (
    <>
      <Warning refd={dialog} />
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar
          onProj={() => handleState(2)}
          onPress={() => handleState(1)}
        />
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
        {projectState === 2 && <ProjectDetail />}
      </main>
    </>
  );
}

export default App;
