import React from "react";
import { Switch, Route } from "react-router-dom";

import Content from "../componentes/Content";
import Product from "../componentes/Product";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Content} />
      <Route path="/produto" component={Product} />
    </Switch>
  );
}
