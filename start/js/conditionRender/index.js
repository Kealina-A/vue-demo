var vm = new Vue({
    el:"#app1",
    data:{
        type:'D',
        loginType:'username',
        ok:true
    },
    methods:{
        changeLoginType:function () {
            if (vm.loginType === 'username') {
                vm.loginType = 'email';
            } else {
                vm.loginType = 'username'
            }
        }
    }
})
