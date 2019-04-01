"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = (function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item(props) {
        _classCallCheck(this, Item);

        _get(Object.getPrototypeOf(Item.prototype), "constructor", this).call(this, props);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    _createClass(Item, [{
        key: "handleRemoveItem",
        value: function handleRemoveItem(e) {
            e.preventDefault();
            this.props.onRemoveItem(this.props.item.id);
        }
    }, {
        key: "render",
        value: function render() {
            var _this = this;

            return React.createElement(
                "li",
                { className: "item list-group-item" },
                this.props.item.name,
                React.createElement(
                    "span",
                    { className: "cart-icon" },
                    React.createElement(Quantity, {
                        quantity: this.props.item.qty,
                        onUpdateQty: this.props.onUpdateQty,
                        id: this.props.item.id }),
                    React.createElement(
                        "a",
                        { href: "#", onClick: function (e) {
                                return _this.handleRemoveItem(e);
                            } },
                        React.createElement("span", { className: "glyphicon glyphicon-remove" })
                    )
                )
            );
        }
    }]);

    return Item;
})(React.Component);

