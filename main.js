import Vue from 'vue'
import App from '.App.vue'
import Vueresource from 'vue-resource';
     vue.use(Vueresource)

Vue.config.productionTip=false
Vue.directive('focus',function(e,value){
	console.log(value)
	e.focus()
	e.value=value.value.name
})

