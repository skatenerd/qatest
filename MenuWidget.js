function MenuWidget() {
    this.data_url = "http://api.myjson.com/bins/nm17";
    this.checkedItems = {};
    this.items = {};
    this.getMenuItems();
}

MenuWidget.prototype.getMenuItems = function(){
    var widget = this;
    $.ajax({
        dataType: "json",
        url: this.data_url,
        success: function(items){
            widget.items = items;
            widget.installItems();
        },
    });
}

MenuWidget.prototype.bindCheckboxClick = function(checkbox, itemName, quantityInput){
    var widget = this;
    checkbox.on('click', function(){
        if(this.checked) {
            quantityInput.prop('disabled', false);
            quantityInput.val(1);
        }
        if(!this.checked) {
            quantityInput.val(0);
        }
        widget.checkedItems[itemName] = $(quantityInput).val();
        widget.updateTotal();
    });

    quantityInput.on('change', function(){
        widget.checkedItems[itemName] = $(this).val();
        if(checkbox.prop('checked')) {
            widget.updateTotal();
        }
    });
}

MenuWidget.prototype.computeTotal = function(){
    var total = 0;
    for (var key in this.checkedItems) {
        if (this.checkedItems[key]) {
            total += this.items[key] * this.checkedItems[key];
        }
    }
    return total;
}

MenuWidget.prototype.updateTotal = function(){
    var total = this.computeTotal();
    if (total > 10) {
        $("#total").css('color', 'red');
    } else {
        $("#total").css('color', 'green');
    }
    $("#total").text("$" + total);
}

MenuWidget.prototype.installItems = function(){
    var widget = this;
    var itemsContainer = $("#menu-items");
    for (itemName in this.items) {
        var row = $("<tr>");
        var checkboxTD = $("<td>");
        var checkbox = $("<input>", {type: "checkbox"});
        checkbox.attr('data-item-name', itemName);
        var itemTD = $("<td>", {text: itemName});
        var priceTD = $("<td>", {text: "$" + this.items[itemName]});
        var quantityTD = $("<td>");
        var quantityInput = $("<select>", {type: 'text', value: 0, disabled: true});
        for (var i=0; i<10; i++) {
            var optionValue = $("<option>", {value: i, text: i});
            optionValue.appendTo(quantityInput);
        }
        quantityInput.appendTo(quantityTD);
        this.bindCheckboxClick(checkbox, itemName, quantityInput);
        checkbox.appendTo(checkboxTD);
        row.appendTo(itemsContainer);
        itemTD.appendTo(row);
        priceTD.appendTo(row);
        checkboxTD.appendTo(row);
        quantityTD.appendTo(row);
    }
}
