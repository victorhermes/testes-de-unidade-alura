import { shallow } from "enzyme";
import React from "react";

import Conteudo from "../../componentes/Conteudo";
import ListaProdutos from "../../componentes/ListaProdutos";

describe("Teste da renderização do componente Conteudo", () => {
    it("Deve haver o componente Conteudo", () => {
        const componente = shallow(<Conteudo />);

        expect(componente.exists()).toBe(true);
    });

    it("Deve renderizar o componente Conteudo", () => {
        const componente = shallow(<Conteudo />);

        expect(componente).toMatchSnapshot();
    });

    it("Deve renderizar o componente ListaProdutos", () => {
        const componente = shallow(<Conteudo />);

        expect(componente.find(ListaProdutos)).toHaveLength(1);
    });

    it("Componente Conteudo deve chamar API via componentDidMount", () => {
        const mockData = {};
        const mockJsonPromise = Promise.resolve(mockData);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        });
        jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

        const componente = shallow(<Conteudo />);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            "http://localhost:3000/leilao"
        );

        expect(componente.state()).toEqual({
            moeda: "R$",
            dados: []
        });

        global.fetch.mockClear();
    });
});
