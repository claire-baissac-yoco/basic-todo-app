import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Todos from "./pages/Todos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
