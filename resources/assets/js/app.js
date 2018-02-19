/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import bulma from 'bulma';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('gibberish-component', require('./components/GibberishComponent.vue'));
Vue.component('binding-component', require('./components/BindingComponent.vue'));
Vue.component('task-list', require('./components/TaskList.vue'));
Vue.component('task', require('./components/Task.vue'));
Vue.component('message', require('./components/Message.vue'));

Vue.component('computing-component', require('./components/ComputingComponent.vue'));

const app = new Vue({
    el: '#app',
    data: {
        customBackground: false,
        message: 'Hello World!'
    },
    computed: {
        className: function () {
            return this.customBackground ? 'card-body darken' : 'card-body'
        },
        reversedMessage(){
            return this.message.split('').reverse().join('');
        }
    }
});
