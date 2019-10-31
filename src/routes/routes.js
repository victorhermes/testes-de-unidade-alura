import React from "react";
import { Switch, Route } from "react-router-dom";

import Conteudo from "../componentes/Conteudo";
import Produto from "../componentes/Produto";
import AdicionarProduto from "../componentes/AdicionarProduto";
import NovoLance from "../componentes/NovoLance";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Conteudo} />
            <Route
                path="/produto/:id"
                render={props => <Produto {...props} />}
            />
            <Route path="/adicionar-produto" component={AdicionarProduto} />
            <Route path="/novo-lance/:id" component={NovoLance} />
            <Route path="*" exact={true} component={Conteudo} />
        </Switch>
    );
}
