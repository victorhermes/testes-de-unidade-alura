import { shallow } from "enzyme";
import React from "react";

import Menu from "../../componentes/Menu";

describe("Testes do menu", () => {
    it("Deve haver o componente menu", () => {
        const wrapper = shallow(<Menu />);

        expect(wrapper.exists()).toBe(true);
    });

    it("Deve renderizar o menu", () => {
        const wrapper = shallow(<Menu />);

        expect(wrapper.find("Link")).toHaveLength(2);
        expect(wrapper.find(".link-produto").text()).toEqual(
            "Adicionar Produto"
        );
    });
});
