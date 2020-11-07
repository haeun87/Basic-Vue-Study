// 05-1 실습
var app = new Vue({
    el: '#app',
    data: {
        message: 'Vue야 안녕 오늘의 행운의 숫자는 ',
        luckyNumber: parseInt(Math.random()*100)+'이야!!',
        uid : '20',
        flag: true
    },
    methods: {
        clickBtn(){
            console.log('하이염!');
        },
        flagEvent(){
            this.flag = this.flag ? false : true;
            return this.flag;
        }
    }
});