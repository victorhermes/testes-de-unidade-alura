import { shallow } from "enzyme";
import React from "react";

import ListarProdutos from "../../componentes/ListarProdutos";

describe("Teste da listagem dos produtos", () => {
    it("Deve renderizar os produtos", () => {
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

        const wrapper = shallow(<ListarProdutos dados={dados} />);

        expect(wrapper.find("section")).toHaveLength(dados.length);
    });
});
