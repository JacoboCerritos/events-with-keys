import Vue from 'vue'
import App from './App.vue'
import VueFormGenerator  from 'vue-form-generator'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

export default {
  components: {
    "vue-form-generator": VueFormGenerator.components
  }
}

Vue.directives('color',{
  bind(el, binding){
    el.style.color=binding.value;
  }
});
