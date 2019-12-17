import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const subtrairLances = (num1, num2) => {
    return num1 - num2;
};

const organizarLances = lances => {
    return lances
        .sort(subtrairLances)
        .reverse()
        .slice(0, 3);
};

const ListarUmProduto = ({ dados }) => (
    <Fragment>
        {dados.map(({ id, imagem, titulo, lances }) => (
            <section key={id} className="produto">
                <div>
                    <img src={imagem} alt={titulo} className="imagem-produto" />
                </div>
                <div className="conteudo">
                    <h1 className="titulo-produto">{titulo}</h1>
                    <h3>Maior lance:</h3>
                    <p className="valor-maior">
                        {"R$"}
                        {Math.max(...lances)}
                    </p>
                    <h3>Menor lance:</h3>
                    <p className="valor-menor">
                        {"R$"}
                        {Math.min(...lances)}
                    </p>

                    <h3>Maiores lances:</h3>
                    {organizarLances(lances).map(lance => {
                        return (
                            <p key={lance} className="valor-neutro">
                                {"R$"}
                                {lance}
                            </p>
                        );
                    })}
                    <Link
                        to={{
                            pathname: `/novo-lance/${id}`
                        }}
                        className="botao-novo-lance"
                    >
                        Novo lance
                    </Link>
                </div>
            </section>
        ))}
    </Fragment>
);

export default ListarUmProduto;
