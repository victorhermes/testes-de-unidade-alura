import React, { Fragment, Component } from "react";
import history from "../routes/history";
import "../css/AdicionarProduto.css";
import Menu from "./Menu";

export default class AdicionarProduto extends Component {
    state = {
        titulo: "",
        imagem: "",
        lances: [0]
    };

    submeterProduto = e => {
        e.preventDefault();
        const { titulo, imagem, lances } = this.state;

        fetch("http://localhost:3000/leilao", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ titulo, imagem, lances })
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
                            name="imagem"
                            value={this.state.imagem}
                            onChange={e =>
                                this.setState({ imagem: e.target.value })
                            }
                            placeholder="Link da imagem"
                            className="entrada-produto"
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
