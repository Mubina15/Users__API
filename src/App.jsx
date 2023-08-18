import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Comments, Header, User,  } from "./components";
import { UserSingle } from "./components/Pages/UserSingle/UserSingle";

function App() {

  return (
    <div className="container">
      
      <Header />

      <Routes>
          <Route path="/users" element={<User />} />
          <Route path="/users/:userId" element={<UserSingle />} />
          <Route path="/users/:userId" element={<Comments />} />
      </Routes>

    </div>
  );
}

export default App;

