const app = Vue.createApp({
    setup() {

        let data = Vue.reactive({
            name: '',
            email: ''
        });


        const userform = Vue.ref();
        function submit(){
            //document.getElementById('userform').reset(); js megoldas
            console.log(data);
            userform.value.reset(); // template ref megoldas
        }

        return { data, submit, userform };
    }
});

app.mount('#appdiv');