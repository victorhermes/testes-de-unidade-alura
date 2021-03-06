import React, { Fragment, Component } from "react";
import { toast } from "react-toastify";
import { URLBase } from "../services/api";
import history from "../routes/history";
import Menu from "./Menu";

export default class AdicionarProduto extends Component {
    state = {
        dados: [],
        novoLance: "",
        id: null
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(URLBase + "/" + id)
            .then(response => response.json())
            .then(data => {
                this.setState({ dados: data, id });
            })
            .catch(error => {
                toast.error("Ops, algo deu errado", {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    }

    submeterProduto = e => {
        e.preventDefault();
        const { titulo, imagem, lances } = this.state.dados;
        const { id, novoLance } = this.state;

        fetch(URLBase + "/" + id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo,
                imagem,
                lances: [...lances, parseInt(novoLance)]
            })
        })
            .then(function() {
                toast.success("Lance adicionado", {
                    position: toast.POSITION.TOP_RIGHT
                });
                history.push(`/produto/${id}`);
            })
            .catch(error => {
                toast.error("Ops, algo deu errado", {
                    position: toast.POSITION.TOP_RIGHT
                });
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
                            name="novoLance"
                            value={this.state.novoLance}
                            onChange={e =>
                                this.setState({ novoLance: e.target.value })
                            }
                            placeholder="Seu lance"
                            className="entrada-produto"
                        />
                        <input
                            type="submit"
                            value="Submeter lance"
                            className="botao-adicionar-produto"
                        />
                    </form>
                </div>
            </Fragment>
        );
    }
}
