class Items extends React.Component {
    constructor(props) { super(props); }
    render() {
        return (
            <ul className="list-group">
                {this.props.items.map(item => (
                    <Item key={item.id} item={item}
                        onRemoveItem={this.props.onRemoveItem}
                        onUpdateQty={this.props.onUpdateQty} />
                ))}
            </ul>
        );
    }
}
