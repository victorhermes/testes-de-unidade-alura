import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import ListarProdutos from "../../componentes/ListarProdutos";

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
        const wrapper = shallow(<ListarProdutos />);

        expect(wrapper.exists()).toBe(true);
    });

    it("Deve renderizar os produtos", () => {
        const wrapper = shallow(<ListarProdutos dados={dados} />);

        expect(wrapper.find("section")).toHaveLength(dados.length);
    });

    it("Não deve quebrar com array dados vazio", () => {
        const wrapper = shallow(<ListarProdutos dados={[]} />);

        expect(wrapper.find("section")).toHaveLength(0);
    });

    it("Deve haver o botão Conferir", () => {
        const wrapper = mount(
            <Router>
                <ListarProdutos dados={dados} />
            </Router>
        );

        expect(wrapper.find("a")).toHaveLength(2);

        expect(
            wrapper
                .find("a")
                .at(0)
                .text()
        ).toEqual("Conferir");

        expect(
            wrapper
                .find("a")
                .at(1)
                .text()
        ).toEqual("Conferir");
    });

    it("Deve retornar o maior lance", () => {
        const lances = [50, 40, 30, 5, 20, 200, 100];
        expect(Math.max(...lances)).toEqual(200);
    });
});
