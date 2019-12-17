import { shallow } from "enzyme";
import React from "react";

import Menu from "../../componentes/Menu";

describe("Testes do menu", () => {
    it("Deve renderizar o menu", () => {
        const componente = shallow(<Menu />);

        expect(componente).toMatchSnapshot();
    });
});
