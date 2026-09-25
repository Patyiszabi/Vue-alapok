const app = Vue.createApp({
    setup() {
        //let counter = 0;
        let counter = Vue.ref(0);

        function increment() {
            counter.value++;
        }

        function decrement() {
            counter.value--;
        }


        return { counter, increment, decrement };
    }
});

app.mount('#appdiv');