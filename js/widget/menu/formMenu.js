define([
    'dojo/dom-construct',
    'dojo/dom-attr',
    'dojo/_base/declare',
    'widget/restaurant/formRestaurant',
    'dojo/text!./templates/formMenu.html'
], function (domConstruct, domAttr, declare, formRestaurant, formMenu) {
    return declare([formRestaurant], {
        templateString: formMenu,
        dataType: '',
        postCreate: function () {
            this.inherited(arguments)
        },
        addOption: function () {
            this.inherited(arguments)
        }
    })
})