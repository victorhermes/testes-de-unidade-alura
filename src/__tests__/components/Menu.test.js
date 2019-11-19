import { shallow } from "enzyme";
import React from "react";

import Menu from "../../componentes/Menu";

describe("Testes do menu", () => {
    it("Deve haver o componente menu", () => {
        const componente = shallow(<Menu />);

        expect(componente.exists()).toBe(true);
    });

    it("Deve renderizar o menu", () => {
        const componente = shallow(<Menu />);

        expect(componente.find("Link")).toHaveLength(2);
        expect(componente.find(".link-produto").text()).toEqual(
            "Adicionar Produto"
        );
    });
});
