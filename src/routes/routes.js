import React from "react";
import { Switch, Route } from "react-router-dom";

import Conteudo from "../componentes/Conteudo";
import ProdutoUm from "../componentes/ProdutoUm";
import ProdutoDois from "../componentes/ProdutoDois";
import ProdutoTres from "../componentes/ProdutoTres";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Conteudo} />
      <Route path="/produto/1" component={ProdutoUm} />
      <Route path="/produto/2" component={ProdutoDois} />
      <Route path="/produto/3" component={ProdutoTres} />
    </Switch>
  );
}
