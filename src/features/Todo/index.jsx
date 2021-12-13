import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  
  return (
    <div>
      TODOOOOOOOOOOOOOOOO
       <Switch>
        <Route path={match.path} component={props => <ListPage {...props} />} exact/>
        <Route path={`${match.path}/:todoId`} component={props => <DetailPage {...props} />} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
