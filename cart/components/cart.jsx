class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.handleUpdateQty = this.handleUpdateQty.bind(this)
    }
    handleRemoveItem(id) {
        this.setState(prevState => {
            const items = prevState.items.filter(function (item) {
                return item.id !== id
            })
            return {
                items: items

            }
        }, () => this.props.onRemoveItem(id));
    }

    handleUpdateQty(id, quantity) {
        this.setState(prevState => {
            const items = prevState.items.map(function (item) {
                if (item.id == id) item.qty = quantity;
                return item;
            })
            return {
                items: items

            }
        }, () => this.props.onUpdateQty(id, quantity));
    }
    render() {

        return (
            <div>
                <Items items={this.state.items}
                    onRemoveItem={this.handleRemoveItem}
                    onUpdateQty={this.handleUpdateQty} />
                {this.state.items.length > 0 &&
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onBuy(this.state.items)}>Buy</button>
                }
            </div>
        );
    }
}


