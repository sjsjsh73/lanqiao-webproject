<template>
<div class="top-content">
    <div class="location-content">
        <img 
        id = "location-icon" 
        src="mark/assets/定位.png" 
        alt=" "
        />
        <span id="location-text">
        杭州市梦想小镇
        </span>
    </div>
    <div class="notice-content">
        <img id="notice-icon" src="mark/assets/消息.png" alt=" "/>
    </div>
    <div class="search-content">
        <input type="search" 
        name="search-box" 
        id="search-box" 
        placeholder="永辉超市优惠商品"
        />
    </div>    
</div>
<div class="ad-content">
        <img id="ad-img" src="@/assets/images/02.jpg" alt=" ">
</div>
<div class="menu-content">
    <ul class="menu-list">
        <li v-for="data in menuData" class="main-menu" :key="data.name">
            <img :src="data.src" alt=" ">
            <span>{{ data.name }}</span>
        </li>
    </ul>
</div>

</template>

<script>

export default {
    name: "Home",
    data(){
        return {
            menuData: [
                {
                    name: "超市便利",
                    src: "/mark/assets/super.png"
                },
                {
                    name: "菜市场",
                    src: "/mark/assets/market.png"
                },
                {
                    name: "水果店",
                    src: "/mark/assets/fruits.png"
                },
                {
                    name: "鲜花绿植",
                    src: "/mark/assets/flower.png"
                },
                {
                    name: "医药健康",
                    src: "/mark/assets/drug.png"
                },
                {
                    name: "家居时尚",
                    src: "/mark/assets/home.png"
                },
                {
                    name: "烘焙蛋糕",
                    src: "/mark/assets/cake.png"
                },
                {
                    name: "签到",
                    src: "/mark/assets/sign.png"
                },
                {
                    name: "大牌免运",
                    src: "/mark/assets/prestige.png"
                },
                {
                    name: "红包套餐",
                    src: "/mark/assets/red.png"
                },
                
            ],
        }
    }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
}
.top-content {
    width: 750px;
    height: 204px;
    background-color: #3B91F8;
}
.location-content {
    margin-left: 36px;
    margin-top: 33px;
    border: 2px solid red;
    width: 300px;
    height: 42px;
    display: inline-block;
}
#location-text {
    position: relative;
    bottom: 10px;
    font-family: PingFangSC-Medium;
    font-size: 31px;
    color: #FFFFFF;
    letter-spacing: 1.15px;
    text-align: justify;
}
#search-box {
    background: #FFFFFF;
    border-radius: 34.5px;
}
.notice-content {
    height: 42px;
    width: 42px;
    border: 2px solid red;
    display: inline-block;
    margin-left: 337px;
}
.search-content {
    margin-top: 37px;
    height: 69px;
    width: 680px;
    border: 2px solid red;
    text-align: center;
    margin-left: 36px;
}

#search-box {
    background: #FFFFFF;
    border-radius: 34.5px;
    display: inline-block;
    height: 69px;
    width: 680px;

}
.ad-content {
    width: 750px;
    height: 192px;
}
#ad-img {
    width: 750px;
    height: 192px;
}
.menu-content {
    background-image: linear-gradient(
        180deg, 
        #5294EB 0%, 
        #FFFFFF 100%);
    width: 750px;
    height: 334px;
}
.menu-list {
    list-style: none;
}
.main-menu {
    width: 20%;
    height: 100px;
    display: inline-block;
    border: 2px solid red;
    margin: 20px;
}
</style>
