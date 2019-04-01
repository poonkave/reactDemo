

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.removeItem = this.removeItem.bind(this)
        this.updateQuantity = this.updateQuantity.bind(this)
    }
    removeItem(id) {
        this.setState(prevState => {
            const items = prevState.items.filter(function (item) {
                return item.id !== id
            })
            return {
                items: items

            }
        }, () => this.props.onRemoveItem(id));
    }

    updateQuantity(id, quantity) {
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
                    removeItem={this.removeItem}
                    updateQuantity={this.updateQuantity} />
                {this.state.items.length > 0 &&
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onBuy(this.state.items)}>Buy</button>
                }
            </div>
        );
    }
}


