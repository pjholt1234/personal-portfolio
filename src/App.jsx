import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index.jsx";
import Project from "./Pages/Project.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="projects/:projectId" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
