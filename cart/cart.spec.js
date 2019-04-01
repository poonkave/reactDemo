"use strict";

var state = {
    counter: 0
};

describe("BetSlipCounter", function () {
    it("renders without crashing", function () {
        var div = document.createElement("div");
        ReactDOM.render(React.createElement(BetSlipCounter, state), div);
    });

    it("renders and matches our snapshot", function () {
        var component = renderer.create(React.createElement(BetSlipCounter, state));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

