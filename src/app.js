import './index'
console.log('test')
let viewmodel = {
  title: ko.observable('i am ucloud-ko-fileupload'),
  exportData: {
    excelHeader: ko.observableArray([
             {'title':'姓名','field': 'name' },
             {'title':'年龄', 'field': 'age'},
             {'title':'个人信息','type': 'render',
                renderFn: function (row) {
                 return  '我叫' + row.name + '年龄' + row.age
                }
              }
    ]),
    excelBody:  ko.observableArray([
      {'name':'姓名1', 'age': '16', },
      {'name':'姓名2', 'age': '161',}
    ]),
  },
  importdata: ko.observable(''), 
  importCallback: function (data) {
    viewmodel.importdata(JSON.stringify(data))
  }
}

ko.applyBindings(viewmodel, document.getElementById('app'))
