const app = Vue.createApp({
    setup() {
        const name = Vue.ref('');
        const email = Vue.ref('');

        function submit(){
            console.log(`Name: ${name.value} Email: ${email.value}`);
        }

        return { name, email, submit };
    }
});

app.mount('#appdiv');
