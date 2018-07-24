require([
    'dojo/on',
    'widget/tableRestaurant',
    'widget/formRestaurant',
    'dojo/domReady!'
], function (on, tableRestaurant, formRestaurant) {
    let tbRes = new tableRestaurant({
        dataType: dataLUTResType,
        data: dataTblRestaurant
    }, 'tableRestaurant')

    let formRes = new formRestaurant({
        dataType: dataLUTResType
    }, 'formRestaurant')

    let editIndexRes
    on(tbRes, 'Click_btnEdit', function (item, index) {
        formRes.setForm(item)
        editIndexRes = index
    })

    on(tbRes, 'Click_btnDelete', function (index) {
        dataTblRestaurant.splice(index, 1)
        tbRes.createTable()
        alert('ลบข้อมูลเรียบร้อย')
    })

    let currentIdRes = dataTblRestaurant.length
    on(tbRes, 'Click_btnAddNewRow', function () {
        let _formRes = formRes.getForm()
        dataTblRestaurant.push({
            id: ++currentIdRes,
            name: _formRes.name,
            restaurantType: _formRes.restaurantType,
            restaurantTypeName: _formRes.restaurantTypeName,
            detail: _formRes.detail
        })
        tbRes.createTable()
        alert('เพิ่มข้อมูลเรียบร้อย')
    })

    on(formRes, 'Click_btnSave', function () {
        if (editIndexRes != null) {
            let _formRes = formRes.getForm()
            dataTblRestaurant[editIndexRes].name = _formRes.name
            dataTblRestaurant[editIndexRes].restaurantType = _formRes.restaurantType
            dataTblRestaurant[editIndexRes].restaurantTypeName = _formRes.restaurantTypeName
            dataTblRestaurant[editIndexRes].detail = _formRes.detail
            tbRes.createTable()
            alert('บันทึกข้อมูลเรียบร้อย')
        }
    })

    on(formRes, 'Click_btnCancel', function () {
        editIndexRes = null
    })
})