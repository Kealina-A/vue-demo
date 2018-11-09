var app1 = new Vue({
    el:"#app1",
    data:{
        isActive:true,
        hasError:false,
        classObject:{
            active:true,
            'text-danger':true
        }
    }
});
Vue.component('my-component',{
    template:'<p class="foo bar">HI</p>'
});

var app2 = new Vue({
    el:"#app2",
    data: {
        isActive:true,
        activeClass:'active',
        errorClass:'text-danger',
        styleObject: {
            color:'red',
            fontSize:'40px'
        },
        baseStyle:{
            color:'red'
        },
        overridingStyle:{
            fontSize: '40px'
        }
    }
});


