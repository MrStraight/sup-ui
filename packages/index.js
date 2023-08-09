import Button from './button'
const components = [
  Button
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$ELEMENT = {
    size: opts.size || 'small',
    zIndex: opts.zIndex || 2000
  };
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install
}