new Vue({
    el: "#app",
    data: {
        title: "هیچ عنوانی وجود ندارد"
    },
    methods: {
        changeTitle() {
            this.title = "آمزش ویو جی اس";
        }
    }
});