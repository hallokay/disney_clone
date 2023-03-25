import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Layout, Login, Home, AddMovie, Detail } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add" element={<AddMovie />} />
      </Route>
    </Routes>
  );
}

export default App;
