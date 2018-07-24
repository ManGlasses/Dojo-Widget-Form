define([
    'dojo/_base/declare',
    'widget/formTableRestaurant'
], function (declare, form) {
    return declare([form], {
        postCreate: function () {
            this.inherited(arguments);
            console.log('override')
        },
        addOption: function () {

        }
    })
})