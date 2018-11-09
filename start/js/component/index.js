Vue.component("button-counter",{
    data:function(){
        return {
            count:0
        }
    },
    template: '<button v-on:click="count++">You click me {{count}} times.</button>'
});

Vue.component('blog-post',{
    props:['title'],
    template: '<h3>{{title}}</h3>'
});


Vue.component('blog-post1',{
    props:['post'],
    template: '<div class="blog-post">' +
        '<h3>{{post.title}}</h3>' +
        '<div v-html="post.content"></div>' +
        '</div>'
});

Vue.component('blog-post2',{
    props:['post'],
    template: '<div class="blog-post">' +
        '<h3>{{post.title}}</h3>' +
        '<button v-on:click="$emit(\'enlarge-text\')">Enlarge text</button>'+
        '<div v-html="post.content"></div>' +
        '</div>'
});
Vue.component('blog-post3',{
    props:['post'],
    template: '<div class="blog-post">' +
        '<h3>{{post.title}}</h3>' +
        '<button v-on:click="$emit(\'enlarge-text\',0.5)">Enlarge text1</button>'+
        '<div v-html="post.content"></div>' +
        '</div>'
});

Vue.component('custom-input',{
    props:['value'],
    template:'<input v-bind:value="value" v-on:input="$emit(\'input\',$event.target.value)">'
})

Vue.component('alert-box',{
    template:'<div class="demo-alert-box"><strong>Error!</strong><slot></slot></div>'
})

Vue.component('tab-home', {
    template: '<div>Home component</div>'
})
Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
})
Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
})

new Vue({
    el: "#components-demo",
    data:{
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
        posts1: [
            { id: 5, title: 'My journey with Vue' ,content:'...content...'},
            { id: 6, title: 'Blogging with Vue' ,content: '...content...'},
            { id: 7, title: 'Why Vue is so fun' ,content:'...content...'}
        ],

    },

});


var vm = new Vue({
    el:"#blog-posts-events-demo",
    data:{
        size:1,
        searchText:"",
        posts:[
            { id: 8, title: 'My journey with Vue1' ,content:'...content...'},
            { id: 9, title: 'Blogging with Vue1' ,content: '...content...'},
            { id: 10, title: 'Why Vue is so fun1' ,content:'...content...'}
        ],
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
    },
    computed:{
        currentTabComponent:function () {
            return 'tab-'+this.currentTab.toLowerCase();
        }
    }
})
