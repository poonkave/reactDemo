"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quantity = (function (_React$Component) {
    _inherits(Quantity, _React$Component);

    function Quantity(props) {
        _classCallCheck(this, Quantity);

        _get(Object.getPrototypeOf(Quantity.prototype), "constructor", this).call(this, props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.setQty = this.setQty.bind(this);
        this.state = {
            qty: this.props.quantity
        };
    }

    _createClass(Quantity, [{
        key: "increment",
        value: function increment() {
            this.props.updateQuantity(this.props.id, ++this.state.qty);
        }
    }, {
        key: "decrement",
        value: function decrement() {
            if (this.state.qty === 0) return;
            this.props.updateQuantity(this.props.id, --this.state.qty);
        }
    }, {
        key: "setQty",
        value: function setQty(evt) {
            this.state.qty = evt.target.value;
            this.props.updateQuantity(this.props.id, evt.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            var _this = this;

            return React.createElement(
                "span",
                { className: "quantity" },
                React.createElement(
                    "a",
                    { href: "#", onClick: function () {
                            return _this.decrement();
                        } },
                    React.createElement("span", { className: "glyphicon glyphicon-minus" })
                ),
                React.createElement("input", { value: this.props.quantity, onChange: this.setQty }),
                React.createElement(
                    "a",
                    { href: "#", onClick: function () {
                            return _this.increment();
                        } },
                    React.createElement("span", { className: "glyphicon glyphicon-plus" })
                )
            );
        }
    }]);

    return Quantity;
})(React.Component);

