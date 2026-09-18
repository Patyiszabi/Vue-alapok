const app = Vue.createApp({
    setup() {
        const count = Vue.ref(0);
        const price = Vue.ref(0);
        const fullPrice = Vue.computed(() => count.value * price.value);
        const formattedFullPrice = Vue.computed(() => fullPrice.value.toLocaleString('de-DE'));

        let data = Vue.reactive({
            name: '',
        });


        const userform = Vue.ref();
        function submit(){
            console.log(data);
            userform.value.reset();
        }


         const guitars = [
            { id: 1, title: "Ibanez S6570SK-STB Prestige", stock: 0 },
            { id: 2, title: "Fender AM Ultra Luxe Strat MN PRB", stock: 2 },
            { id: 3, title: "FGN Expert Odyssey SBB", stock: 11 },
            { id: 4, title: "Gibson SG Standard Reissue Cherry VOS", stock: 1 },
            { id: 5, title: "Jackson SL2A MAH Pro Soloist UWH", stock: 25 }
        ]
          const outofstockcolor = "red";
        const instockcolor = "green";

           let color = Vue.ref("white");
           Vue.watch(color, (newColor) => {
               document.body.style.backgroundColor = newColor;
           });


            const guitars2 = [
            { id: 1, title: "Ibanez S6570SK-STB Prestige", stock: 0 },
            { id: 2, title: "Fender AM Ultra Luxe Strat MN PRB", stock: 2 },
            { id: 3, title: "FGN Expert Odyssey SBB", stock: 11 },
            { id: 4, title: "Gibson SG Standard Reissue Cherry VOS", stock: 1 },
            { id: 5, title: "Jackson SL2A MAH Pro Soloist UWH", stock: 25 }
        ]

         const outofStock2 = {color: "red", fontSize: "1.25rem"};
        const inStock2 = {color: "green", fontSize: "1rem"};

        
        
        return { count, price, fullPrice, formattedFullPrice, data, submit, userform, guitars, outofstockcolor, outofStock2, inStock2, instockcolor, color, guitars2 };
    }
});

app.mount('#appdiv');
