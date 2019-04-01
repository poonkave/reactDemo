




class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.setQty = this.setQty.bind(this)
        this.state = {
            qty: this.props.quantity
        }
    }

    increment() {
        this.props.updateQuantity(this.props.id, ++this.state.qty);
    }
    decrement() {
        if (this.state.qty === 0) return;
        this.props.updateQuantity(this.props.id, --this.state.qty);
    }

    setQty(evt) {
        this.state.qty = evt.target.value;
        this.props.updateQuantity(this.props.id, evt.target.value);
    }

    render() {
        return (
            <span className="quantity">
                <a href="#" onClick={() => this.decrement()}><span className="glyphicon glyphicon-minus"></span></a>
                <input value={this.props.quantity} onChange={this.setQty} />
                <a href="#" onClick={() => this.increment()}><span className="glyphicon glyphicon-plus" ></span></a>
            </span>
        );
    }
}

