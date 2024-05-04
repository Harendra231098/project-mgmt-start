import NoProjectSelected from "./componenets/NoProjectSelected";
import NewProject from "./componenets/NewProject";
import ProjectSideBar from "./componenets/ProjectSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NoProjectSelected />
      {/*<NewProject />*/}
    </main>
  );
}

export default App;
