import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import NovoLance from "../../componentes/NovoLance";

describe("Componente NovoLance", () => {
    const match = {
        params: {
            id: 1
        }
    };

    it("Deve iniciar com estado vazio", () => {
        const componente = shallow(<NovoLance match={match} />);

        expect(componente).toEqual({});
        expect(componente.state()).toEqual({
            dados: [],
            novoLance: "",
            id: null
        });
    });

    it("Deve executar o componentDidMount", () => {
        const mockData = {};
        const mockJsonPromise = Promise.resolve(mockData);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        });

        jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

        const componente = shallow(<NovoLance match={match} />);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            "http://localhost:3000/leilao/1"
        );
        expect(componente.state()).toEqual({
            dados: [],
            novoLance: "",
            id: null
        });

        global.fetch.mockClear();
    });

    it("Deve chamar método catch", () => {
        jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject());

        expect(global.fetch).toBeTruthy();
    });

    it("Deve incluir dados no estado do componente", () => {
        const componente = mount(
            <Router>
                <NovoLance match={match} />
            </Router>
        );

        componente.setState({
            dados: [
                {
                    titulo: "Produto Nº1",
                    imagem:
                        "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191001100636_1200_675_-_atari_vcs.jpg",
                    lances: [50, 65, 85, 95, 188, 30],
                    id: 1
                }
            ],
            novoLance: "20",
            id: 1
        });

        expect(componente).toEqual({});
        expect(componente.state().dados).toEqual([
            {
                titulo: "Produto Nº1",
                imagem:
                    "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191001100636_1200_675_-_atari_vcs.jpg",
                lances: [50, 65, 85, 95, 188, 30],
                id: 1
            }
        ]);
        expect(componente.state().novoLance).toEqual("20");
        expect(componente.state().id).toEqual(1);
    });

    it("Deve simular formulário e alterar o estado do componente", () => {
        const componente = shallow(<NovoLance match={match} />);

        const spy = jest.spyOn(componente.instance(), "submeterProduto");

        componente.setState({
            dados: {
                lances: [10, 20]
            }
        });

        componente
            .find("input")
            .at(0)
            .simulate("change", {
                target: {
                    value: "10"
                }
            });

        componente
            .find(".formulario-produto")
            .simulate("submit", { preventDefault: () => {} });

        expect(
            componente
                .find("input")
                .at(0)
                .prop("value")
        ).toEqual("10");

        expect(spy).toBeTruthy();
    });
});
