$(document).ready(function () {

    $.getJSON("items.json", function (data) {
        var items = [];
        $.each(data.items, function (key, item) {
            items.push("<li class='list-group-item' id='item_" + item.id + "'>" + item.name + "<a href='#' class='add'><span class='glyphicon glyphicon-plus'></span></a></li>");
        });

        $("<ul/>", {
            "class": "list-group",
            html: items.join("")
        }).appendTo("#itemsList");


        $(".list-group .add").on("click", function () {
            var $add = $(this).find("span");
            var add = false;
            if ($add.hasClass("glyphicon-plus")) {
                $add.removeClass("glyphicon-plus").addClass("glyphicon-minus");
                add = true;
            } else {
                $add.removeClass("glyphicon-minus").addClass("glyphicon-plus");
            }

            var itemId = $add.closest(".list-group-item").attr("id").split("item_")[1];
            var activeItem;

            data.items.map(function (item, index) {
                if (item.id === +itemId) {
                    activeItem = item;
                }
            });

            console.log(activeItem);

            if (add) {
                $("#cart").cart("add", { "item": activeItem });
            } else {
                $("#cart").cart("remove", { "id": activeItem.id });
            }

        });


        $("#cart").cart({
            eventHandlers: {
                onRemoveItem: function (params) {
                    $("#item_" + params.id).find("span").removeClass("glyphicon-minus").addClass("glyphicon-plus");
                }
            }
        });

    });
});