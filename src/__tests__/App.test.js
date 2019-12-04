import { shallow } from "enzyme";
import React from "react";

import App from "../App";

describe("Testes do App.js", () => {
    it("Deve renderizar o componente App", () => {
        const componente = shallow(<App />);

        expect(componente.exists()).toBe(true);
        expect(componente).toMatchSnapshot();
    });
});
