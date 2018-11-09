var vm = new Vue({
    el: "#app1",
    data: {
        items: [
            {id: 1, message: 'Foo'},
            {id: 2, message: 'Bar'}
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        },
        numbers: [1, 2, 3, 4, 5],
        todos: [
            {todo: "a", isComplete: false},
            {todo: "b", isComplete: false},
            {todo: "c", isComplete: false},
            {todo: "d", isComplete: true},
            {todo: "e", isComplete: false}
        ]

    }, computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            })
        }
    },
    methods: {
        even: function (numbers) {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            })
        }
    }
});


Vue.component('todo-item', {
    template: '<li>{{ title }} <button v-on:click="$emit(\'remove\')">Remove</button></li>',
    props: ['title']
});

var app2 = new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = ''
        }
    }
});

