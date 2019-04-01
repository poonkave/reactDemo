(function ($) {
    "use strict";

    var Utils = {
        $container: null,
        component: null,
        options: null
    };

    Utils.removeItem = function (id) {
        Utils.options.eventHandlers.onRemoveItem.call(Utils.$container, { id: id });
    };


    Utils.updateQty = function (id, qty) { 
        console.log("Quantity changed for id = " + id + ",  Qty = " + qty);
    }; 


    Utils.buy = function (items) {

        console.log(items);
    }; 

    var Methods = {
        init: function (options) {

            Utils.options = options;

            Utils.$container = $(this);

            Utils.component = ReactDOM.render(React.createElement(Cart, {
                items: [],
                onRemoveItem: Utils.removeItem,
                onUpdateQty: Utils.updateQty,
                onBuy: Utils.buy
            }), Utils.$container[0]); 

            return Utils.$container;

        },

        add: function (params) {
            //create a new instance of item with minimal properties
            var newItem = {
                "id": params.item.id,
                "name": params.item.name,
                "qty": 1
            };

            Utils.component.setState((state) => {
                const items = state.items.concat(newItem);

                return {
                    items,
                    value: ""
                };
            });
        },

        remove: function (params) {
            Utils.component.setState((state) => {
                const items = state.items.filter(function (item) {
                    return item.id !== params.id;
                });

                return {
                    items,
                    value: ""
                };
            });
        }
    };


    $.fn.cart = function (method, params) {
        // Method calling logic
        var returnval = null;
        if (Methods[method]) {
            returnval = Methods[method].apply(this, [params]);
        } else if (typeof method === "object" || !method) {
            returnval = Methods.init.apply(this, [method]);
        } else {
            $.error("Method " + method + " does not exist on cart");
        }
        return returnval;
    };

}(jQuery));
