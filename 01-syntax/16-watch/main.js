const app = Vue.createApp({
    setup() {
        const { ref } = Vue;
        const price = ref(0);
        const mymoney = ref(5);

        const errormessage = ref(null);

        function increment() {
            price.value++;
        }

        function decrement() {
            if (price.value > 0) {
                price.value--;
            } else {
                errormessage.value = "Price cannot be negative";
            }
        }

    const formatPrice = Vue.computed(() => {
     return price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    });
    
    const watch = Vue.watch;

    watch(price, () => {
        errormessage.value = price.value > mymoney.value ? "You dont have enough money" : null;
    })

        const formatMoney = Vue.computed(() => {
            return mymoney.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
        });

        return { price, increment, decrement,
            formatPrice, mymoney, formatMoney,
            errormessage, watch 
        };
    }
});

app.mount('#appdiv');

//figyeljuk egy adott valtozo ertekenek valtozasat