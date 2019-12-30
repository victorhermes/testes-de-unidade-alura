import React, { Fragment, Component } from "react";
import { toast } from "react-toastify";
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

    validarDados = e => {
        e.preventDefault();
        const { titulo, imagem, lances } = this.state;

        if (titulo === "") {
            this.adicionaProdutoErro("Digite um titulo");
            return false;
        }

        if (lances < 1 || lances === null) {
            this.adicionaProdutoErro("Digite o lance inicial");
            return false;
        }

        if (imagem === "") {
            this.adicionaProdutoErro("Digite o link da imagem");
            return false;
        }

        return this.submeterProduto(e);
    };

    adicionaProduto = () => {
        toast.success("Produto adicionado", {
            position: toast.POSITION.TOP_RIGHT
        });
        history.push("/");
    };

    adicionaProdutoErro = error => {
        toast.error(error, {
            position: toast.POSITION.TOP_RIGHT
        });
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
            .then(() => this.adicionaProduto())
            .catch(() => this.adicionaProdutoErro("Ops, algo deu errado"));
    };

    render() {
        return (
            <Fragment>
                <Menu />

                <div>
                    <form
                        onSubmit={this.validarDados}
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
                        />
                        <input
                            type="number"
                            name="lances"
                            value={this.state.lances}
                            onChange={e =>
                                this.setState({
                                    lances: parseInt(e.target.value)
                                })
                            }
                            placeholder="Lance inicial"
                            className="entrada-produto"
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
