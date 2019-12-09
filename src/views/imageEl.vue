<script>
export default {
    name: 'imageEl',
    data() {
        return {
            src: '.../log'
        }
    },
    inheritAttrs: true,
    methods: {
        
    },
    mounted() {
        // console.log(this.$store.state.user);
        var user = this.$store.state.user;
        const el = this.$refs.img;
                console.log(el);
                console.log(el.src);
    },
    render() {
        return <div class="x-image"><img src='' ref="img"/></div>;
    }
}
</script>