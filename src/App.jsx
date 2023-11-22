import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UserDataInsert from "./components/UserDataInsert";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route
          path="/components/UserDataInsert"
          element={<UserDataInsert></UserDataInsert>}
        ></Route>
        <Route path="*" element={"Not found"}></Route>
      </Routes>
    </>
  );
}

export default App;
