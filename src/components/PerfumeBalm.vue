<template>
    <div style="margin-top: 80px;"></div>

        <div class="Pchip">
            <span class="text">PERFUME</span>
            <div class="chipbtn">
                <v-btn to="/perfume" class="per">
                    <span class="topbtn">퍼퓸</span></v-btn>
            </div>
            <div class="chipbtn">
                <v-btn  to="/perfume-balm" class="balm">
                    <span class="topbtn" style="color: white;">퍼퓸 밤</span></v-btn>
            </div>
        </div>

        <!--퍼퓸 밤-->
        <div class="Ppwrap grid">
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="/p-b-k" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1701940111/c7b4bfa1-5bb0-48fa-b9ce-7707f472dde3/Thumbnail_perfumebalm_PUMKINI_ver2.jpg"
                        alt="퍼퓸 밤 펌키니">
                        <p class="item-title">퍼퓸 밤 펌키니</p>
                    <p class="item-inf">달콤한 호박 | 차조기잎 | 코코넛밀크 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1701940112/2babdd4d-7660-49fa-b560-d6d98cb2bf7f/Thumbnail_perfumebalm_HOLY_ver2.jpg"
                        alt="퍼퓸 밤 홀리메탈">
                        <p class="item-title">퍼퓸 밤 홀리멘탈</p>
                    <p class="item-inf">측백나무잎 | 차가운 금속 | 화이트 머스크 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1666772156/34d545ad-25a6-4222-b7fd-5af13ce88530/Thumbnail_perfumebalm_CHAMO_ver2.jpg"
                        alt="퍼퓸 밤 카모">
                        <p class="item-title">퍼퓸 밤 카모</p>
                    <p class="item-inf">진득한 카모마일 | 부드러운 나무결 | 머스크 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1666774132/bd752a3b-d73a-49a0-aff0-cc23188acbbf/Thumbnail_perfumebalm_BERGA_ver2.jpg"
                        alt="퍼퓸 밤 버가샌달">
                        <p class="item-title">퍼퓸 밤 버가샌달</p>
                    <p class="item-inf">지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1666773989/6eba038f-94f1-4da9-b4a1-39c8ba77d321/Thumbnail_perfumebalm_LALE_ver2.jpg"
                        alt="퍼퓸 밤 라레">
                        <p class="item-title">퍼퓸 밤 라레</p>
                    <p class="item-inf">이슬을 머금은 풋사과 | 화이트 튤립 | 샌달우드 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1666773625/845769c7-e5e4-4b70-b77a-0b08b6bc755f/Thumbnail_perfumebalm_SUEDEPEAR_ver2.jpg"
                        alt="퍼퓸 밤 스웨이드페어">
                        <p class="item-title">퍼퓸 밤 스웨이드페어</p>
                    <p class="item-inf">시원한 배 | 스웨이드 | 쌉쌀한 갈바넘 </p>
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
.balm {
    height: 30px;
    background-color: #1d1d1d;
    border-radius: 15px;
    font-size: 12px;
} 

.per{
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
    grid-template-columns: repeat(3,minmax(0,1fr));
}
.grid {
    display: grid;
}
.p-item, .b-item {
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
            price: ["45,800","46,500","139,000"]
        }
    },
};
</script>
