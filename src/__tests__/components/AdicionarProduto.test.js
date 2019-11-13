import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import AdicionarProduto from "../../componentes/AdicionarProduto";

describe("Teste da renderização do componente Produto", () => {
    it("Deve iniciar com estado vazio", () => {
        const wrapper = shallow(<AdicionarProduto />);

        expect(wrapper).toEqual({});
        expect(wrapper.state()).toEqual({
            titulo: "",
            imagem: "",
            lances: []
        });

        wrapper.unmount();
    });

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

    it("Deve simular formulário e alterar o estado do componente", preventDefault => {
        const wrapper = shallow(<AdicionarProduto />);
        wrapper
            .find("input")
            .first()
            .simulate("change", {
                titulo: "fullname"
            });
        wrapper.find("form").simulate("submit", { preventDefault });
        expect(wrapper).toEqual({});
        expect(wrapper.state()).toEqual({
            titulo: "fullname",
            imagem: "",
            lances: []
        });
        wrapper.unmount();
    });
});
