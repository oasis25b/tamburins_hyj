<template>
    <div style="margin-top: 80px;"></div>

    <div class="Pchip">
        <span class="text">BODY</span>
        <div class="chipbtn">
            <v-btn to="/showery-body" class="shower">
                <span class="topbtn">샤워리바디</span>
            </v-btn>
        </div>
        <div class="chipbtn">
            <v-btn to="/perfumed-hand" class="body">
                <span class="topbtn"  style="color: white">퍼퓸드 핸드앤바디</span></v-btn>
        </div>
    </div>

    <!--퍼퓸드 핸드앤바디-->
    <div class="Ppwrap grid">
        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1684999166/6b8d2aa4-87b2-45b0-ac1e-f9a7485b6228/Thumbnail_PerfumedHand_Wash_Chamo.jpg"
                 alt="퍼퓸드 핸드워시">
                <p class="item-title">퍼퓸드 핸드워시 카모</p>
                <p class="item-inf">진득한 카모마일 | 부드러운 나무결 | 머스크 </p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1689055367/7abb4e0a-cba8-4af3-9355-8d774e44a1f4/Thumbnail_PerfumedHand_Wash_000.jpg"
                 alt="퍼퓸드 핸드워시 000">
                <p class="item-title">퍼퓸드 핸드워시 000</p>
                <p class="item-inf">샌달우드 | 패츌리 | 흙 내음 </p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1612860429/9eaa0ebb-e1d1-49f0-9f48-cb1ac7169be3/Thumbnail_PerfumedHand_Emul_000.jpg"
                 alt="퍼퓸드 핸드앤바디 에멀전 000">
                <p class="item-title">퍼퓸드 핸드앤바디 에멀전 000</p>
                <p class="item-inf">샌달우드 | 패쥴리 | 흙 내음 </p>
                <p class="price">￦ {{ price[1] }}</p>
            </router-link>
        </div>


        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1689055380/ac6e4a6c-0a96-428b-85d2-5d0dbc8bc4c8/Thumbnail_PerfumedHand_Wash_7.jpg"
                 alt="퍼퓸드 핸드워시 7">
                <p class="item-title">퍼퓸드 핸드워시 7</p>
                <p class="item-inf">로즈우드 | 코코넛 향 | 우아함 </p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1614063075/d77a4563-7bb9-4b40-8675-8b815c961752/Thumbnail_PerfumedHand_Emul_7.jpg"
                 alt="퍼퓸드 핸드앤바디 에멀전 7">
                <p class="item-title">퍼퓸드 핸드앤바디 에멀전 7</p>
                <p class="item-inf">로즈우드 | 코코넛 향 | 우아함 </p>
                <p class="price">￦ {{ price[1] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1614063580/9995b2c1-4de0-4138-b35b-dbc12a3144d4/Thumbnail_PerfumedHand_Emul_712.jpg"
                 alt="퍼퓸드 핸드앤바디 에멀전 712">
                <p class="item-title">퍼퓸드 핸드앤바디 에멀전 712</p>
                <p class="item-inf">패츌리 | 쌉싸래한 풀 줄기 | 스모키함</p>
                <p class="price">￦ {{ price[1] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1614063580/9995b2c1-4de0-4138-b35b-dbc12a3144d4/Thumbnail_PerfumedHand_Emul_712.jpg"
                 alt="퍼퓸드 핸드앤바디 듀오세트 000">
                <p class="item-title">퍼퓸드 핸드앤바디 듀오세트 000</p>
                <p class="item-inf">샌달우드 | 패쥴리 | 흙 내음 </p>
                <p class="price">￦ {{ price[2] }}</p>
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
.body {
    height: 30px;
    background-color: #1d1d1d;
    border-radius: 15px;
    font-size: 12px;

}

.shower {
    height: 30px;
    background-color: #d8d5d5;
    border-radius: 15px;
    font-size: 12px;
    color: #4d4c4c;
}

.topbtn {
    font-size: 12px;
    color: #4d4c4c;
}

/* 상자 안 */
.Ppwrap {
    position: relative;
    width: 100%;
    column-gap: 1px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid {
    display: grid;
}

.p-item,
.b-item {
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
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
    .text {
        font-size: 18px;
    }

    .per,
    .balm {
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
            price: ["34,000", "43,000", "74,000"]
        }
    },
};
</script>