new Vue({
    el: "#app",
    data: {
        name: "جواد",
        family: "جعفری نیا"
    },
    methods: {
        dayState(state) {
            return 'سلام ' + this.name + '  ' + state;
        },
        fullName() {
            return this.name + '  ' + this.family;
        }
    }
});