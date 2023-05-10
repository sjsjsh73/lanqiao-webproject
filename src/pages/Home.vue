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
            <span class="menu-text">{{ data.name }}</span>
        </li>
    </ul>
</div>
<div class="block-content"></div>
<div class="data-content">
    <div class="data-side-text">
        <span class="left-text">附近店铺</span>
        <span class="right-text">查看更多</span>
    </div>
    <div class="main-data">
        <ul style="list-style: none">
            <li class="shop" v-for="info in shopInfo" :key="info.id">
                <img class="shop-icon" :src="info.shopIcon" alt=""/>
                <div class="shop-info">
                    <p class="shop-name">
                        {{info.shopName}}
                    </p>
                    <br/>
                    <p class="base-info">
                        <span class="sale-count">
                            月售:{{info.saleCount}}
                        </span>
                        <span class="lowest-deliver-price">
                            起送:{{info.lowestDeliverPrice}}
                        </span>
                        <span class="normal-deliver-price">
                            基础运费: {{info.normalDeliverPrice}}
                        </span>
                    </p>
                    <br>
                    <p class="discount-info">
                        {{info.discountInfo}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</div>

<div class="function-menu-content">
    <ul style="list-style: none;">
        <li class="function-menu"><img class="function-menu-icon" src="mark/assets/首页.png" alt=""><span class="function-menu-text">首页</span></li>
        <li class="function-menu"><img class="function-menu-icon" src="mark/assets/cart_empty.png" alt=""><span class="function-menu-text">购物车</span></li>
        <li class="function-menu"><img class="function-menu-icon" src="mark/assets/order.png" alt=""><span class="function-menu-text">订单</span></li>
        <li class="function-menu"><img class="function-menu-icon" src="mark/assets/My.png" alt=""><span class="function-menu-text">我的</span></li>
    </ul>
</div>
<dir></dir>

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
            shopInfo: [

                {
                    shopName:"沃尔玛",
                    shopIcon: "/mark/assets/位图.png",
                    saleCount: 10000,
                    lowestDeliverPrice: 0,
                    normalDeliverPrice: 5,
                    discountInfo: "VIP尊享满89元件减4元运费券",
                },
                {
                    shopName:"永辉超市",
                    shopIcon: "/mark/assets/位图备份.png",
                    saleCount: 2000,
                    lowestDeliverPrice: 0,
                    normalDeliverPrice: 5,
                    discountInfo: "联合利华洗护满10减5",
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
    /* border: 2px solid red; */
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
    /* border: 2px solid red; */
    display: inline-block;
    margin-left: 337px;
}
.search-content {
    margin-top: 37px;
    height: 69px;
    width: 680px;
    /* border: 2px solid red; */
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
    width: 18%;
    height: 120px;
    display: inline-block;
    margin: 5px;
    margin-top: 30px;
    text-align: center;
}
.menu-text {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #20364B;
    letter-spacing: 0;
    text-align: center;
    display: block;
}
.block-content {
    width: 750px;
    height: 20px;
    background-color: #F1F1F1;
}
.left-text {
    float: left;
    font-family: PingFangSC-Regular;
    font-size: 29px;
    color: #20364B;
    letter-spacing: -0.7px;
}
.right-text {
    float: right;
    font-family: PingFangSC-Regular;
    font-size: 29px;
    color: #20364B;
    letter-spacing: -0.7px;
}

.data-side-text {
    overflow: auto;
    width: 680px;
    margin-left: 35.5px;
    margin-top: 25px;
    margin-bottom: 25px;
    /* border: 2px solid red; */

}
.shop {
    width: 750px;
    height: 198px;
    border-top: 2px solid rgba(241,241,241,1);
    border-bottom: 2px solid rgba(241,241,241,1);
}
.shop-icon {
    margin-top: 25px;
    margin-left: 36px;
    display: inline-block;
}
.shop-info {
    height: 150px;
    width: 425px;
    margin-left: 32px;
    margin-bottom: 25px;
    margin-top: 25px;
    display: inline-block;
}
.shop-name {
    font-family: PingFangSC-Regular;
    font-size: 32px;
    color: #20364B;
    letter-spacing: -0.77px;
}
.base-info {
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #20364B;
    letter-spacing: -0.1px;
}
.discount-info {
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #E27475;
    letter-spacing: 0;
}

.function-menu-content {
    height: 100px;
    width: 750px;
}

.function-menu-text {
    font-family: PingFangSC-Regular;
    font-size: 23px;
    color: #353535;
    letter-spacing: 0;
    text-align: center;
    display: block;
}
.function-menu-icon {
    width: 45px;
    height: 45px;
}

.function-menu {
    width: auto;
    height: auto;
    float: left;
    margin-left: 15% ;
    margin-top: 18px;
    margin-bottom: 10px;
    
}

</style>
