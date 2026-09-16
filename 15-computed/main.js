const app = Vue.createApp({
    setup() {
        const { ref } = Vue;
        let price = ref(0);

        function increment() {
            price.value++;
        }

        function decrement() {
            price.value--;
        }

    const formatPrice = Vue.computed(() => {
     return price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    });


        return { price, increment, decrement, formatPrice };
    }
});

app.mount('#appdiv');