<template >
    <button @click="launchAction" class="btn btn-primary">
        <i class="fa fa-2x"
            :class="icon"
            
        >
        </i>
    </button>
</template>
<script>
export default { 
    props: {
        icon: {
            type: String,
            required: true,
            default: 'fa-plus'
        }
    },
    methods: {
        launchAction (){
            this.$router.push( {name:'entry-view', params: { id: 'new'}})
            this.$emit('on:click')
            
        }
    },

}
</script>
<style lang="scss" scoped>
button {
    border-radius: 100%;
    bottom : 30px;
    height: 70px;
    position: fixed;
    right:  40px;
    width: 70px;
}
</style>