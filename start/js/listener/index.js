var example1 = new Vue({
    el:"#example-1",
    data:{
        counter:1
    },
    methods:{
        greet:function () {
            alert("hello greet")
        },
        warn:function (message,event) {
            if (event) event.preventDefault()
            alert(message)
        },
    }
});
