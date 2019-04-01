
 
const state = {
    counter: 0
};

describe("BetSlipCounter", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BetSlipCounter {...state} />, div);
    });


    it("renders and matches our snapshot", () => {
        const component = renderer.create(
            <BetSlipCounter {...state}  />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});