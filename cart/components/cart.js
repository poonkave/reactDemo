"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = (function (_React$Component) {
    _inherits(Cart, _React$Component);

    function Cart(props) {
        _classCallCheck(this, Cart);

        _get(Object.getPrototypeOf(Cart.prototype), "constructor", this).call(this, props);
        this.state = {
            items: []
        };
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleUpdateQty = this.handleUpdateQty.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    _createClass(Cart, [{
        key: "handleRemoveItem",
        value: function handleRemoveItem(id) {
            var _this = this;

            this.setState(function (prevState) {
                var items = prevState.items.filter(function (item) {
                    return item.id !== id;
                });
                return {
                    items: items

                };
            }, function () {
                return _this.props.onRemoveItem(id);
            });
        }
    }, {
        key: "handleUpdateQty",
        value: function handleUpdateQty(id, quantity) {
            var _this2 = this;

            this.setState(function (prevState) {
                var items = prevState.items.map(function (item) {
                    if (item.id == id) item.qty = quantity;
                    return item;
                });
                return {
                    items: items

                };
            }, function () {
                return _this2.props.onUpdateQty(id, quantity);
            });
        }
    }, {
        key: "handleBuy",
        value: function handleBuy() {
            var _this3 = this;

            var items = undefined;
            this.setState(function (prevState) {
                items = prevState.items;
                return {};
            }, function () {
                return _this3.props.onBuy(items);
            });
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(Items, { items: this.state.items,
                    onRemoveItem: this.handleRemoveItem,
                    onUpdateQty: this.handleUpdateQty }),
                React.createElement(Footer, { itemsCount: this.state.items.length, onBuy: this.handleBuy })
            );
        }
    }]);

    return Cart;
})(React.Component);

