
class Footer extends React.Component {
    constructor(props) { super(props); }
    render() {
        return (
            <div>
                {this.props.itemsCount > 0 &&
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onBuy()}>Buy</button>
                }
            </div>
        );
    }
}
