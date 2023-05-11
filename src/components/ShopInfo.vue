<template>
<div class="main-data">
        <ul style="list-style: none">
            <li class="shop" v-for="info in shopInfo" :key="info.id">
                <router-link :to="'/shop/' + info.id">
                    <img class="shop-icon" :src="info.imgUrl" alt=""/>
                    <div class="shop-info">
                        <p class="shop-name">
                            {{info.name}}
                        </p>
                        <br/>
                        <p class="base-info">
                            <span class="sale-count">
                                月售:{{info.sales}}
                            </span>
                            <span class="lowest-deliver-price">
                                起送:{{info.expressLimit}}
                            </span>
                            <span class="normal-deliver-price">
                                基础运费: {{info.expressPrice}}
                            </span>
                        </p>
                        <br/>
                        <p class="discount-info">
                            {{info.slogan}}
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ShopInfo",
    data() {

    },
    props: {
        shopInfo: Array,
    }
}
</script>
