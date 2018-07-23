define([
    'dojo/dom',
    'dojo/dom-construct',
    'dojo/dom-attr',
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    'dojo/text!./templates/formTableRestaurant.html'
], function (dom, domConstruct, domAttr, declare, _WidgetBase, _TemplatedMixin, formTableRestaurant) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: formTableRestaurant,
        showByType: function () {
            domConstruct.empty(dom.byId('dataTableRes'))
            let selTypeResShowValue = domAttr.get(dom.byId('selResTypeShow'), 'value')
            dataTblRestaurant.forEach((item) => {
                if (item.restaurantType == selTypeResShowValue || selTypeResShowValue == 0) {
                    let tbRowBodyRestaurant = domConstruct.create('tr', null, dom.byId('dataTableRes'))
                    domConstruct.create('td', { innerHTML: item.name }, tbRowBodyRestaurant)
                    domConstruct.create('td', { innerHTML: item.restaurantTypeName }, tbRowBodyRestaurant)
                }
            })
        },
        addNewRow: function () {
            alert(dataTblRestaurant[0].name)
        }
    })
})