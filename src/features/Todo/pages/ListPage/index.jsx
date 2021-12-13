import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import TodoList from "../../components/TodoList";
import queryString from "query-string";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    { id: 1, title: "Eat", status: "new" },
    { id: 2, title: "Sleep", status: "completed" },
    { id: 3, title: "Code", status: "new" },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  // const [filteredStatus, setFilteredStatus] = useState("all");
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    // console.log(todo, idx);
    const newTodoList = [...initTodoList];
    // console.log(...initTodoList);
    // console.log(newTodoList);
    // console.log(...newTodoList[idx]);

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const status = "all";
    setFilteredStatus(status);
    const queryParams = { status: status };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    const status = "completed";
    setFilteredStatus(status);
    const queryParams = { status: status };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    const status = "new";
    setFilteredStatus(status);
    const queryParams = { status: status };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  //khi nào todoList, filteredStatus thì render, ko thì thôi
  const renderTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  // const renderTodoList = todoList.filter(
  //   (todo) => filteredStatus === "all" || filteredStatus === todo.status
  // );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
