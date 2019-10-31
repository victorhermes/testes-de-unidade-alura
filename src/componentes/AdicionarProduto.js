import React, { Fragment, Component } from "react";
import { URLBase } from "../services/api";
import history from "../routes/history";
import "../css/AdicionarProduto.css";
import Menu from "./Menu";

export default class AdicionarProduto extends Component {
    state = {
        titulo: "",
        imagem: "",
        lances: []
    };

    submeterProduto = e => {
        e.preventDefault();
        const { titulo, imagem, lances } = this.state;

        fetch(URLBase, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ titulo, imagem, lances: [lances] })
        })
            .then(function() {
                history.push("/");
            })
            .catch(function(error) {
                console.error(error);
            });
    };

    render() {
        return (
            <Fragment>
                <Menu />
                <div>
                    <form
                        onSubmit={this.submeterProduto}
                        className="formulario-produto"
                    >
                        <input
                            type="text"
                            name="titulo"
                            value={this.state.titulo}
                            onChange={e =>
                                this.setState({ titulo: e.target.value })
                            }
                            placeholder="Título do produto"
                            className="entrada-produto"
                            required
                        />
                        <input
                            type="text"
                            name="lances"
                            value={this.state.lances}
                            onChange={e =>
                                this.setState({ lances: e.target.value })
                            }
                            placeholder="Lance inicial"
                            className="entrada-produto"
                            required
                        />
                        <input
                            type="text"
                            name="imagem"
                            value={this.state.imagem}
                            onChange={e =>
                                this.setState({ imagem: e.target.value })
                            }
                            placeholder="Link da imagem"
                            className="entrada-produto"
                            required
                        />
                        <input
                            type="submit"
                            value="Adicionar produto"
                            className="botao-adicionar-produto"
                        />
                    </form>
                </div>
            </Fragment>
        );
    }
}
