<template >
    <button @click="$router.push( {name:'entry-view'})" class="btn btn-primary">
        <i class="fa fa-2x"
            :class="icon"
            @click="$emit('on:click')"
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