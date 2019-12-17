import { shallow } from "enzyme";
import React from "react";

import ListarUmProduto, {
    subtrairLances
} from "../../componentes/ListarUmProduto";

describe("Deve renderizar um único produto", () => {
    const dados = [
        {
            titulo: "Único Produto",
            imagem:
                "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191001100636_1200_675_-_atari_vcs.jpg",
            lances: [50, 65, 85, 95, 188, 30],
            id: 1
        }
    ];

    it("Deve renderizar os produtos", () => {
        const componente = shallow(<ListarUmProduto dados={dados} />);

        expect(componente.find("section")).toHaveLength(dados.length);
    });

    it("Deve fazer a subtração dos lances", () => {
        expect(subtrairLances(10, 5)).toBe(5);
    });
});
