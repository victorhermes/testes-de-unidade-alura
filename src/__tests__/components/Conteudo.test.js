import { shallow, mount } from "enzyme";
import React from "react";

import Conteudo from "../../componentes/Conteudo";
import Menu from "../../componentes/Menu";
import ListarProdutos from "../../componentes/ListarProdutos";

describe("Teste da renderização do componente Conteudo", () => {
    it("Deve haver o componente Conteudo", () => {
        const wrapper = shallow(<Conteudo />);

        expect(wrapper.exists()).toBe(true);
    });

    it("Deve renderizar o componente Menu", () => {
        const wrapper = shallow(<Conteudo />);

        expect(wrapper.find(Menu)).toHaveLength(1);
    });

    it("Deve renderizar o componente ListarProdutos", () => {
        const wrapper = shallow(<Conteudo />);

        expect(wrapper.find(ListarProdutos)).toHaveLength(1);
    });
});
