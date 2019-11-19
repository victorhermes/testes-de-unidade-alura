import { shallow } from "enzyme";
import React from "react";

import App from "../App";

describe("Testes do App.js", () => {
    it("Deve renderizar o componente App", () => {
        const wrapper = shallow(<App />);

        expect(wrapper.exists()).toBe(true);
    });
});
