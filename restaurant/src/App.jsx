import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Menu from "./pages/MenuPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="menu" element={<Menu/>}/>
        </Route>

        <Route path="*" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
