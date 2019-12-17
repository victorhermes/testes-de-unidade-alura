import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import AdicionarProduto from "../../componentes/AdicionarProduto";

describe("Componente Produto", () => {
    it("Deve iniciar com estado vazio", () => {
        const componente = shallow(<AdicionarProduto />);

        expect(componente).toEqual({});
        expect(componente.state()).toEqual({
            titulo: "",
            imagem: "",
            lances: []
        });
    });

    it("Deve incluir dados no estado do componente", () => {
        const componente = mount(
            <Router>
                <AdicionarProduto />
            </Router>
        );

        componente.setState({
            titulo: "Aplicação 01",
            imagem: "http://www.alura.com/01.jpg",
            lances: [10, 20]
        });

        expect(componente).toEqual({});
        expect(componente.state().titulo).toEqual("Aplicação 01");
        expect(componente.state().imagem).toEqual(
            "http://www.alura.com/01.jpg"
        );
        expect(componente.state().lances).toEqual([10, 20]);
    });

    it("Deve chamar método catch", () => {
        jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject());

        expect(global.fetch).toBeTruthy();
    });
});

describe("Submissão do formulário", () => {
    it("Deve simular formulário e alterar o estado do componente", () => {
        const componente = mount(
            <Router>
                <AdicionarProduto />
            </Router>
        );

        componente
            .find("input")
            .at(0)
            .simulate("change", {
                target: {
                    value: "Aplicação 01"
                }
            });

        componente
            .find("input")
            .at(1)
            .simulate("change", {
                target: {
                    value: [10, 20]
                }
            });

        componente
            .find("input")
            .at(2)
            .simulate("change", {
                target: {
                    value: "http://www.alura.com/01.jpg"
                }
            });

        componente.find(".formulario-produto").simulate("submit");

        expect(
            componente
                .find("input")
                .at(0)
                .prop("value")
        ).toEqual("Aplicação 01");

        expect(
            componente
                .find("input")
                .at(1)
                .prop("value")
        ).toEqual(parseInt([10, 20]));

        expect(
            componente
                .find("input")
                .at(2)
                .prop("value")
        ).toEqual("http://www.alura.com/01.jpg");
    });
});
