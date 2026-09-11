const app = Vue.createApp({
    setup() {
        const frameworks = [ 
            { name: "Vue.js" },
            { name: "React" },
            { name: "Angular" },
            { name: "Svelte" }
        ];

        return { frameworks };
    }
});

app.mount('#appdiv');