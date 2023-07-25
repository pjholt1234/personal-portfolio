import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
