import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ListarProdutos = ({ dados = [] }) => (
    <Fragment>
        {dados.map(({ id, imagem, titulo, lances }) => (
            <section className="container" key={id}>
                <div>
                    <img src={imagem} alt={titulo} className="imagem" />
                </div>
                <div className="conteudo">
                    <h1 className="titulo-conteudo">{titulo}</h1>
                    <p className="valor">
                        {"R$"}
                        {Math.max(...lances)}
                    </p>
                    {
                        <Link
                            to={{
                                pathname: `/produto/${id}`,
                                dados: dados
                            }}
                            className="botao-conferir"
                        >
                            Conferir
                        </Link>
                    }
                </div>
            </section>
        ))}
    </Fragment>
);

export default ListarProdutos;
