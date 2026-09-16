const app = Vue.createApp({
    setup() {
        const guitars = [
            { id: 1, name: "Fender Stratocaster", stock: 0 },
            { id: 2, name: "Gibson Les Paul", stock: 5 },
            { id: 3, name: "Taylor GS Mini", stock: 2 },
            { id: 4, name: "Ibanez RG", stock: 0 },
            { id: 5, name: "PRS Custom 24", stock: 3 }
        ]
        const outofStock = {color: "red", fontSize: "1.25rem"};
        const onlyFewLeft = {color: "orange", fontSize: "1.5rem"};
        const inStock = {color: "green", fontSize: "1rem"};
        return { guitars, outofStock, onlyFewLeft, inStock };
    }
});

app.mount('#appdiv');