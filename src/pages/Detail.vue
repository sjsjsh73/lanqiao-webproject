<template>
    <h1>Detail Page</h1>
    <p class="refer-from">Come From Shop id : {{ id }}</p>
    <div></div>
</template>
<script>
import DetailTopBar from '@/components/DetailTopBar'
export default {
    
    name: "Detail",
    data() {
        return {
            id: 0,
            shopInfo: [],
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.shopInfo = this.$route.params.shopInfo;
    },
    component: {
        "DetailTopBar": DetailTopBar,
    }

}
</script>
<style>
</style>