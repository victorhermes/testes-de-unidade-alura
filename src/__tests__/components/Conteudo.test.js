import { shallow } from "enzyme";
import React from "react";

import Conteudo from "../../componentes/Conteudo";
import Menu from "../../componentes/Menu";
import ListarProdutos from "../../componentes/ListarProdutos";

describe("Teste da renderização do componente Conteudo", () => {
    it("Deve haver o componente Conteudo", () => {
        const componente = shallow(<Conteudo />);

        expect(componente.exists()).toBe(true);
    });

    it("Deve renderizar o componente Menu", () => {
        const componente = shallow(<Conteudo />);

        expect(componente.find(Menu)).toHaveLength(1);
    });

    it("Deve renderizar o componente ListarProdutos", () => {
        const componente = shallow(<Conteudo />);

        expect(componente.find(ListarProdutos)).toHaveLength(1);
    });

    it("Deve executar o componentDidMount", () => {
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
