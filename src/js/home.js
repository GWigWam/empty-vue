registerAsyncComponentTemplate('home', 'components/home.htm', () => {
    return {
        data() {
            return {
                val: 'Hello Vue! (from home)'
            }
        },
        methods: {}
    }
});
