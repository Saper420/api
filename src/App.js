import { Container } from "react-bootstrap";
import { Header } from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tablesRedux";
import { useEffect} from "react";
import Edit from "./components/Edit/Edit";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/api/table/:id" element={<Edit/>} />
      </Routes>
    </Container>
  )
}

export default App;