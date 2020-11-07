//03-3 실습
Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
}
);

Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
}
);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from parent Componet',
        anothorMessage: '또 다른 메세지 is Comming Soon'
    },
    methods: {
        showTextLog: function(){
            alert('로그도 보여 드립니다!!');
        }

    }
});