import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Layout, Login } from "./pages";
// import { Login } from "./components";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='/' index element={ <Login />}/>
      </Route>
    </Routes>
  );
}

export default App;
