class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.handleUpdateQty = this.handleUpdateQty.bind(this)
        this.handleBuy = this.handleBuy.bind(this)
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

    handleBuy() {
        let items;
        this.setState(prevState => {
            items = prevState.items;
            return {}
        }, () => this.props.onBuy(items));
    }

    render() {

        return (
            <div>
                <Items items={this.state.items}
                    onRemoveItem={this.handleRemoveItem}
                    onUpdateQty={this.handleUpdateQty} />

                <Footer itemsCount={this.state.items.length} onBuy={this.handleBuy}/>
            </div>
        );
    }
}


