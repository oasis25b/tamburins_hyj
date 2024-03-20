<template>
    <div style="margin-top: 80px;"></div>

    <div class="Pchip">
        <span class="text">PERFUME</span>
        <div class="chipbtn">
            <v-btn to="/perfume" class="per">
                <span class="topbtn" style="color: white">퍼퓸 캔들</span>
            </v-btn>
        </div>
    </div>

    <!--퍼퓸 캔들-->
    <div class="Ppwrap grid">
        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1697693723/bfdddf47-d025-4d6d-98a4-974383046eb5/Thumbnail_PerfumeCandle_200g_pumkini.jpg"
                    alt="퍼퓸 캔들 펌키니">
                <p class="item-title">퍼퓸 캔들 펌키니</p>
                <p class="item-inf">달콤한 호박 | 차조기잎 | 코코넛밀크</p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1697693826/422da6c0-0495-49f6-804c-7fea907aaec8/Thumbnail_PerfumeCandle_200g_holy.jpg"
                    alt="퍼퓸 캔들 홀리메탈">
                <p class="item-title">퍼퓸 캔들 홀리메탈</p>
                <p class="item-inf">측백나무잎 | 차가운 금속 | 화이트 머스크</p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1697693834/0687abfe-c23d-49a5-a27d-00fd4d8d732e/Thumbnail_PerfumeCandle_200g_bather.jpg"
                    alt="퍼퓸 캔들 베이더인더레이크">
                <p class="item-title">퍼퓸 캔들 베이더인더레이크</p>
                <p class="item-inf">쑥 | 안개 낀 호수 | 촉촉한 이끼</p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1697693830/2142b64d-9bd8-4214-aa07-a0ba21edf308/Thumbnail_PerfumeCandle_200g_late.jpg"
                    alt="퍼퓸 캔들 레이트어텀">
                <p class="item-title">퍼퓸 캔들 레이트어텀</p>
                <p class="item-inf">버터오렌지 | 사탕수수 풀내음 | 머스크</p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1697693842/077a4c56-9420-4ece-a068-73317b64e24d/Thumbnail_PerfumeCandle_60g_set.jpg"
                    alt="퍼퓸 캔들 미니 세트">
                <p class="item-title">퍼퓸 캔들 미니 세트</p>
                <p class="item-inf">캔들 네 가지 향</p>
                <p class="price">￦ {{ price[1] }}</p>
            </router-link>
        </div>




    
    </div>
</template>

<style scoped>
/* 위부터 차례대로 */
.Pchip {
    display: flex;
    padding-bottom: 20px;
    gap: 10px;
}

.text {
    padding: 0 10px 0 15px;
    font-size: 22px;
    font-weight: bold;
}

/* 버튼 */
.per {
    height: 30px;
    background-color: #1d1d1d;
    border-radius: 15px;
    font-size: 12px;

} 

.topbtn {
    font-size: 12px;
    color: #4d4c4c;
}

.chipbtn {
    padding: 0 5px;
} 
/* 상자 안 */
.Ppwrap {
    position: relative;
    width: 100%;
    column-gap: 1px;
    grid-template-columns: repeat(3,minmax(0,1fr));
}
.grid {
    display: grid;
}
.p-item {
    list-style: none;
    text-decoration: none;
}

/* item별 스타일 */

.item-title {
    font-size: 16px;
    padding: 20px 0 10px 20px;
    font-weight: bold;
}

.item-inf {
    font-size: 13px;
    color: #a4a4a4;
    padding: 0 20px 10px 20px;
}

.price {
    font-size: 16px;
    color: #1d1d1d;
    padding: 0px 0px 30px 20px;
}
.p-p-item {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    margin-right: 0.5px;
}

/* 미디어쿼리 */
@media (max-width: 1023px) {
    .Ppwrap {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
}

@media (max-width: 768px) {
    .text {
        font-size: 18px;
    }
    .per, .balm{
        font-size: 14px;
    }
    .item-title {
    font-size: 14px;
    padding: 5px 0 5px 10px;
    font-weight: bold;
    color: #3d3d3d;
    }
    .item-inf {
        font-size: 10px;
        padding: 5px 0 5px 10px;
        color: #797676;
    }
    .price {
        font-size: 14px;
        padding: 5px 0 25px 10px;
    }
}

/* 이미지 */
img {
    width: 100%;
    height: auto;
    /* 이미지의 높이를 자동으로 조정하여 꽉 차게 설정 */
    margin: 0;
}
</style>

<script>
export default {
    data() {
        return {
            price: ["83,000","148,000"]
        }
    },
};
</script>
