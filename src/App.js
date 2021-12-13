import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
      {/* */}
      Header
      <p>{/* <Link to="/todos">Todos</Link> */}</p>
      <p>{/* <Link to="/albums">Album</Link> */}</p>
      {/* Link ko co class active */}
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active-menu">
          Album
        </NavLink>
      </p>
      {/* Route cú match là render */}
      {/* Switch chỉ render thằng match đầu tiên */}
      {/* In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from */}
      {/* <Switch>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Switch> */}
      {/* For react-router-dom v6, simply replace Redirect with Navigate */}
      {/* <Navigate from="/home" to="/todos" exact /> */}
      {/* <Navigate from="/post/:postId" to="/albums/:postId" exact /> */}
      <Switch>
        {/* exact = true route = path mới render */}
        {/* <Route path="/" element={<TodoFeature />} exact /> */}
        <Route
          path="/todos"
          component={(props) => <TodoFeature {...props} />}
        />
        <Route
          path="/albums"
          component={(props) => <AlbumFeature {...props} />}
        />

        <Route component={(props) => <NotFound {...props} />} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
