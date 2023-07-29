import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index.jsx";
import Project from "./Pages/Project.jsx";
import Event from "./Pages/Event.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="projects/:projectId" element={<Project />}></Route>
        <Route path="events/:eventId" element={<Event />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
