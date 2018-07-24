require([
    'dojo/on',
    'dijit/registry',
    'widget/restaurant/tableRestaurant',
    'widget/restaurant/formRestaurant',
    'widget/menu/tableMenu',
    'widget/menu/formMenu',
    'dojo/domReady!'
], function (on, registry, tableRestaurant, formRestaurant, tableMenu, formMenu) {
    let _tableRestaurant = new tableRestaurant({
        dataType: dataLUTResType,
        data: dataTblRestaurant
    }, 'tableRestaurant')

    let _formRestaurant = new formRestaurant({
        dataType: dataLUTResType
    }, 'formRestaurant')

    on(_tableRestaurant, 'Click_btnViewMenu', function (item) {
        if (registry.byId('tableMenu') != undefined) {
            registry.byId('tableMenu').destroyRecursive(true)
        }
        if (registry.byId('formMenu') != undefined) {
            registry.byId('formMenu').destroyRecursive(true)
        }

        let _tableMenu = new tableMenu({
            dataType: dataLUTMenuType,
            data: dataTblMenu,
            nameRes: item.name
        }, 'tableMenu')

        let _formMenu = new formMenu({
            dataType: dataLUTMenuType
        }, 'formMenu')

        on(_tableMenu, 'Click_btnDelete', function (index) {
            // editIndexRes = editIndexRes == index ? null : editIndexRes
            dataTblMenu.splice(index, 1)
            _tableMenu.createTable()
            alert('ลบข้อมูลเรียบร้อย')
        })

        let currentIdMenu = dataTblMenu.length
        on(_tableMenu, 'Click_btnAddNewRow', function () {
            let _formMenu = _formMenu.getForm()
            dataTblMenu.push({
                id: ++currentIdMenu,
                name: _formMenu.name,
                categoryId: _formMenu.categoryId,
                categoryName: _formMenu.categoryName,
                price: _formMenu.price
            })
            _tableMenu.createTable()
            alert('เพิ่มข้อมูลเรียบร้อย')
        })
    })

    let editIndexRes
    on(_tableRestaurant, 'Click_btnEdit', function (item, index) {
        _formRestaurant.setForm(item)
        editIndexRes = index
    })

    on(_tableRestaurant, 'Click_btnDelete', function (index) {
        editIndexRes = editIndexRes == index ? null : editIndexRes
        dataTblRestaurant.splice(index, 1)
        _tableRestaurant.createTable()
        alert('ลบข้อมูลเรียบร้อย')
    })

    let currentIdRes = dataTblRestaurant.length
    on(_tableRestaurant, 'Click_btnAddNewRow', function () {
        let dataFormRestaurant = _formRestaurant.getForm()
        dataTblRestaurant.push({
            id: ++currentIdRes,
            name: dataFormRestaurant.name,
            restaurantType: dataFormRestaurant.restaurantType,
            restaurantTypeName: dataFormRestaurant.restaurantTypeName,
            detail: dataFormRestaurant.detail
        })
        _tableRestaurant.createTable()
        alert('เพิ่มข้อมูลเรียบร้อย')
    })

    on(_formRestaurant, 'Click_btnSave', function () {
        if (editIndexRes != null) {
            if (confirm('ต้องการบันทึกข้อมูลหรือไม่')) {
                let dataFormRestaurant = _formRestaurant.getForm()
                dataTblRestaurant[editIndexRes].name = dataFormRestaurant.name
                dataTblRestaurant[editIndexRes].restaurantType = dataFormRestaurant.restaurantType
                dataTblRestaurant[editIndexRes].restaurantTypeName = dataFormRestaurant.restaurantTypeName
                dataTblRestaurant[editIndexRes].detail = dataFormRestaurant.detail
                _tableRestaurant.createTable()
                alert('บันทึกข้อมูลเรียบร้อย')
            }
        }
    })

    on(_formRestaurant, 'Click_btnCancel', function () {
        editIndexRes = null
    })
})