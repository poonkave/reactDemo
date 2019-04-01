class Item extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this)
    }

    removeItem(e) {
        e.preventDefault();
        this.props.removeItem(this.props.item.id);
    }

    render() {
        return (
            <li className="item list-group-item">{this.props.item.name}
                <span className="cart-icon">
                    <Quantity
                        quantity={this.props.item.qty}
                        updateQuantity={this.props.updateQuantity}
                        id={this.props.item.id} />
                    <a href="#" onClick={(e) => this.removeItem(e)}><span className="glyphicon glyphicon-remove" ></span></a>
                </span>
            </li>
        );
    }
}