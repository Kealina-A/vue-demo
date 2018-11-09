var vm = new Vue({
    el: "#example",
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
});

var demo = new Vue({
    el: "#demo",
    data: {
        firstName: "Foo",
        lastName: "Bar",
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[1]

            }
        }
    }
});

var watch = new Vue({
    el: "#watch-example",
    data: {
        fruits: [
            'banana',
            'apple',
            'origin',
            'pear',
            'lemon',
            'pineapple',
            'peach',
            'strawberry'
        ],
        choose: 'banana'
    },
    watch: {
        choose: function (newValue, oldValue) {
            alert(oldValue + " -> " + newValue)
        }
    }
})
