import MButton from './src/button.vue';

MButton.install = function(Vue) {
  Vue.component(MButton.name, MButton);
}

export default MButton;