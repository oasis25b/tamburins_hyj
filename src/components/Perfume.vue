<template>
    <div style="margin-top: 80px;"></div>
    <div v-if="notification" class="notification">{{ notification }}</div> <!-- 알림 표시 -->

    <div class="Pchip">
        <span class="text">PERFUME</span>
        <div class="chipbtn">
            <v-btn to="/perfume" class="per">
                <span class="topbtn" style="color: white">퍼퓸</span>
            </v-btn>
        </div>
        <div class="chipbtn">
            <v-btn to="/perfume-balm" class="balm">
                <span class="topbtn">퍼퓸 밤</span></v-btn>
        </div>
    </div>

    <!--퍼퓸-->
    <div class="Ppwrap grid">
        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline" @click="addToCart"></v-btn>
            <router-link to="e-p-K" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1695802404/0fe8b6cc-0670-4261-a9c1-8fa8e627f2d4/Thumbnail_EggPerfume_pumkini.jpg"
                    alt="에그 퍼퓸 펌키니">
                <p class="item-title">에그 퍼퓸 펌키니</p>
                <p class="item-inf">달콤한 호박 | 차조기잎 | 코코넛밀크</p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1695802408/173760b8-fbb3-41ae-b751-d063fa3af4f1/Thumbnail_EggPerfume_holymetal.jpg"
                    alt="에그 퍼퓸 홀리멘탈">
                <p class="item-title">에그 퍼퓸 홀리멘탈</p>
                <p class="item-inf">측백나무잎 | 차가운 금속 | 화이트 머스크 </p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1695802344/089c468a-3ace-4ec0-9df1-3554f850322e/Thumbnail_EggPerfume_woodsalt.jpg"
                    alt="에그 퍼퓸 우드솔트비치">
                <p class="item-title">에그 퍼퓸 우드솔트비치</p>
                <p class="item-inf">로즈우드 | 씨솔트 | 암브레트 시드 </p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1695801508/f3280396-6c15-4c35-bd5e-d765ab571538/Thumbnail_Perfume2_50ml_Pumkini.jpg"
                    alt="퍼퓸 펌키니">
                <p class="item-title">퍼퓸 펌키니</p>
                <p class="item-inf">달콤한 호박 | 차조기잎 | 코코넛밀크</p>
                <p class="price">￦ {{ price[2] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1695801573/b52d6748-3ada-4f6d-9c25-e9fe706a1e90/Thumbnail_Perfume2_50ml_HolyMetal.jpg"
                    alt="퍼퓸 홀리멘탈">
                <p class="item-title">퍼퓸 홀리멘탈</p>
                <p class="item-inf">측백나무잎 | 차가운 금속 | 화이트 머스크 </p>
                <p class="price">￦ {{ price[2] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1695801544/97f95edb-4661-40a0-8693-e1a65e6b18d5/Thumbnail_Perfume2_50ml_BoldCitrus.jpg"
                    alt="퍼퓸 볼드시트러스">
                <p class="item-title">퍼퓸 볼드시트러스</p>
                <p class="item-inf">다채로운 시트러스 | 캐럿시드 | 고소한 결명자 </p>
                <p class="price">￦ {{ price[2] }}</p>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ffffff;
    color: #8f8f8f;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #8f8f8f;
    font-size: 12px;
    z-index: 2222;
}

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

.balm {
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
import AddedProductList from './AddedProductList.vue';

export default {
    data() {
        return {
            price: ["45,800","46,500","139,000"],
        };
    },
    components: {
    AddedProductList
  },
  methods: {
    addToCart() {
      // 장바구니에 추가할 제품 정보
      const product = {
        id: 'pf1',
        name: '에그 퍼퓸 펌키니',
        img: "https://web-resource.tamburins.com/catalog/product/1695802404/0fe8b6cc-0670-4261-a9c1-8fa8e627f2d4/Thumbnail_EggPerfume_pumkini.jpg",
        price: 45800,
        quantity: 1,
        free: false
      };

      this.$store.dispatch('addToCart', product); // 장바구니에 제품 추가 액션을 호출
    }
  },
  computed: {
        notification() {
            return this.$store.getters.notification; // 알림 상태 가져오기
        }
    }
}; 

</script>
