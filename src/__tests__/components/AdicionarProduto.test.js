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

    it("Deve simular formulário e alterar o estado do componente", () => {
        const component = mount(
            <Router>
                <AdicionarProduto />
            </Router>
        );

        component
            .find("input")
            .at(0)
            .simulate("change", {
                target: {
                    value: "Aplicação 01"
                }
            });

        component
            .find("input")
            .at(1)
            .simulate("change", {
                target: {
                    value: [10, 20]
                }
            });

        component
            .find("input")
            .at(2)
            .simulate("change", {
                target: {
                    value: "http://www.alura.com/01.jpg"
                }
            });

        component.find(".formulario-produto").simulate("submit");

        expect(
            component
                .find("input")
                .at(0)
                .prop("value")
        ).toEqual("Aplicação 01");

        expect(
            component
                .find("input")
                .at(1)
                .prop("value")
        ).toEqual(parseInt([10, 20]));

        expect(
            component
                .find("input")
                .at(2)
                .prop("value")
        ).toEqual("http://www.alura.com/01.jpg");

        component.unmount();
    });
});
