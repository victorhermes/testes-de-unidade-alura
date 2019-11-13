import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import AdicionarProduto from "../../componentes/AdicionarProduto";

describe("Teste da renderização do componente Produto", () => {
    it("Deve incluir dados no estado do componente", () => {
        const wrapper = mount(
            <Router>
                <AdicionarProduto />
            </Router>
        );

        wrapper.setState({
            titulo: "Aplicação 01",
            imagem: "http://www.alura.com/01.jpg",
            lances: [10, 20]
        });
        expect(wrapper).toEqual({});
        expect(wrapper.state().titulo).toEqual("Aplicação 01");
        expect(wrapper.state().imagem).toEqual("http://www.alura.com/01.jpg");
        expect(wrapper.state().lances).toEqual([10, 20]);
        wrapper.unmount();
    });
});
