const app = Vue.createApp({
    setup() {

        let data = Vue.reactive({
            name: '',
            email: ''
        });


        function submit(){
            //event.preventDefault();
            console.log(data);
            //console.log(`Name: ${data.name} Email: ${data.email}`);
        }

        return { data, submit };
    }
});

app.mount('#appdiv');