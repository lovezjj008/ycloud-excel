// 组件列表
import ko from 'knockout'
// 注册普通组件
ko.components.register('ycloud-excel', {
  viewModel: require('./ycloud_excel/index').default,
  // template: { fromUrl: name},
  template: require('./ycloud_excel/index.html')
})
