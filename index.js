var defaultUsers = [
    { firstname: "Giovanni", lastname: "Fernandes" },
    { firstname: "Nome1", lastname: "Sobrenome1" }
];

var vm = new Vue({
    el: "#myPage",
    data: {
        firstname: "",
        lastname: "",
        users: defaultUsers,
        editUser: null
    },
    watch: {
        firstname: function() {
            console.log(this.firstname);
        }
    },
    computed: {
        fullname: function() { return this.firstname + " " + this.lastname }
    },
    filters: {
        tofullname: function(val) {
            return val.firstname + " " + val.lastname;
        }
    },
    methods: {
        add: function() {
            this.users.push({ firstname: this.firstname, lastname: this.lastname });
            this.firstname = "";
            this.lastname = "";
            document.getElementById("firstname").focus();
        },
        remove: function(index) {
            this.users.splice(index, 1);
        }
    },
    mounted: function() {
        alert("Hello TDC!!!");
    }
});