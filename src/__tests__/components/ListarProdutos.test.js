import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import ListaProdutos from "../../componentes/ListaProdutos";

describe("Teste da listagem dos produtos", () => {
    const dados = [
        {
            titulo: "Produto Nº1",
            imagem:
                "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191001100636_1200_675_-_atari_vcs.jpg",
            lances: [50, 65, 85, 95, 188, 30],
            id: 1
        },
        {
            titulo: "Produto Nº2",
            imagem:
                "https://static01.nyt.com/images/2017/11/26/business/26ATARI1/26ATARI1-facebookJumbo.jpg",
            lances: [40, 50, 70, 80, 878],
            id: 2
        }
    ];

    it("Deve haver o componente ListarProdutos", () => {
        const componente = shallow(<ListaProdutos />);

        expect(componente.exists()).toBe(true);
    });

    it("Deve renderizar os produtos", () => {
        const componente = shallow(<ListaProdutos dados={dados} />);

        expect(componente.find("section")).toHaveLength(dados.length);
    });

    it("Deve ser renderizado quando receber array de dados vazio", () => {
        const componente = shallow(<ListaProdutos dados={[]} />);

        expect(componente.find("section")).toHaveLength(0);
    });

    it("Deve haver o botão Conferir", () => {
        const componente = mount(
            <Router>
                <ListaProdutos dados={dados} />
            </Router>
        );

        expect(componente).toMatchSnapshot();
    });
});
