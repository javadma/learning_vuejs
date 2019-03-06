new Vue({
    el: '#app',
    data: {
        name: "Javad",
        family: "Jafariniya",
    },
    // watch: {
    //     name(value) {
    //         this.fullName = value + " " + this.family;
    //     },
    //     family(value) {
    //         this.fullName = this.name + " " + value;
    //     }
    // }
    computed: {
        fullName: {
            get() {
                return this.name + " " + this.family;
            },
            set(value) {
                let names = value.split(" ");
                this.name = names[0];
                console.log(this.name);
                this.family = names[1];
                console.log(this.family);
            }
        }
    }

});