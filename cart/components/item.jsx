class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
    }

    handleRemoveItem(e) {
        e.preventDefault();
        this.props.onRemoveItem(this.props.item.id);
    }

    render() {
        return (
            <li className="item list-group-item">{this.props.item.name}
                <span className="cart-icon">
                    <Quantity
                        quantity={this.props.item.qty}
                        onUpdateQty={this.props.onUpdateQty}
                        id={this.props.item.id} />
                    <a href="#" onClick={(e) => this.handleRemoveItem(e)}><span className="glyphicon glyphicon-remove" ></span></a>
                </span>
            </li>
        );
    }
}
