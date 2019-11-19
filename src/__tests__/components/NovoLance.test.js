import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import NovoLance from "../../componentes/NovoLance";

describe("Teste da renderização do componente NovoLance", () => {
    const match = {
        params: {
            id: 1
        }
    };

    it("Deve iniciar com estado vazio", () => {
        const wrapper = shallow(<NovoLance match={match} />);

        expect(wrapper).toEqual({});
        expect(wrapper.state()).toEqual({
            dados: [],
            novoLance: "",
            id: null
        });

        wrapper.unmount();
    });

    it("Deve executar o componentDidMount", () => {
        const mockData = {};
        const mockJsonPromise = Promise.resolve(mockData);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        });
        jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

        const wrapper = shallow(<NovoLance match={match} />);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            "http://localhost:3000/leilao/1"
        );

        expect(wrapper.state()).toEqual({
            dados: [],
            novoLance: "",
            id: null
        });

        global.fetch.mockClear();
    });

    it("Deve incluir dados no estado do componente", () => {
        const wrapper = mount(
            <Router>
                <NovoLance match={match} />
            </Router>
        );

        wrapper.setState({
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

        expect(wrapper).toEqual({});
        expect(wrapper.state().dados).toEqual([
            {
                titulo: "Produto Nº1",
                imagem:
                    "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191001100636_1200_675_-_atari_vcs.jpg",
                lances: [50, 65, 85, 95, 188, 30],
                id: 1
            }
        ]);
        expect(wrapper.state().novoLance).toEqual("20");
        expect(wrapper.state().id).toEqual(1);
    });
});
