<template>
<div class="top-contntent">
    <div class="location-content">
        <img id = "location-icon" src="mark/assets/定位.png" alt=" "/>
        <span id="location-text">杭州市梦想小镇</span>
    </div>
    <div class="notice-content">
        <img id="notice-icon" src="mark/assets/消息.png" alt=" "/>
    </div>
    <div class="search-content">
        <input 
        type="search" 
        name="search-box" 
        id="search-box"
        placeholder="永辉超市优惠商品"
        >
    </div>
</div>
</template>

<script>

export default {
    name: "Home",
}
</script>
<style>
.top-content {
    width: 750px;
    height: 204px;
    background-color: #3B91F8;
}
.location-content {
    position: relative;
    left: 36px;
    top: 33px;
}
#location-text {
    font-family: PingFangSC-Medium;
    font-size: 31px;
    color: #FFFFFF;
    letter-spacing: 1.15px;
}
</style>
