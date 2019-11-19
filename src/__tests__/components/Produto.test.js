import { shallow } from "enzyme";
import React from "react";

import Produto from "../../componentes/Produto";

describe("Teste da renderização do componente Produto", () => {
    it("Deve executar o componentDidMount", () => {
        const match = {
            params: {
                id: 1
            }
        };

        const mockData = {};
        const mockJsonPromise = Promise.resolve(mockData);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        });
        jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

        const componente = shallow(<Produto match={match} />);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            "http://localhost:3000/leilao/1"
        );

        expect(componente.state()).toEqual({
            moeda: "R$",
            dados: []
        });

        global.fetch.mockClear();
    });
});
