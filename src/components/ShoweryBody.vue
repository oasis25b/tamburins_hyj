<template>
    <div style="margin-top: 80px;"></div>

    <div class="Pchip">
        <span class="text">BODY</span>
        <div class="chipbtn">
            <v-btn to="/showery-body" class="shower">
                <span class="topbtn" style="color: white">샤워리바디</span>
            </v-btn>
        </div>
        <div class="chipbtn">
            <v-btn to="/perfumed-hand" class="body">
                <span class="topbtn">퍼퓸드 핸드앤바디</span></v-btn>
        </div>
    </div>

    <!--샤워리바디-->
    <div class="Ppwrap grid">
        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1652762893/ce08e093-1260-4984-96a5-eda8945d52e9/Thumbnail_Shrybody_wash200_bigalico.jpg"
                 alt="샤워리바디워시 비가리코">
                <p class="item-title">샤워리바디워시 비가리코</p>
                <p class="item-inf">씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스 </p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1652764708/d753bb26-68da-493e-abfa-5d40aded70b9/Thumbnail_Shrybody_wash200_nimbus.jpg"
                 alt="샤워리바디워시 님버스">
                <p class="item-title">샤워리바디워시 님버스</p>
                <p class="item-inf">도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크</p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1652764365/b65663d0-d38a-4470-a449-c466e376ea88/Thumbnail_Shrybody_wash200_fog.jpg" 
                alt="샤워리바디워시 포그">
                <p class="item-title">샤워리바디워시 포그</p>
                <p class="item-inf">물안개 낀 숲 | 젖은 나무 | 캐시미어 우드</p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1652764906/c05be5d9-8db0-4377-be35-dbbd1001bd7c/Thumbnail_Shrybody_wash200_storm.jpg" 
                alt="샤워리바디워시 스톰">
                <p class="item-title">샤워리바디워시 스톰</p>
                <p class="item-inf">풀내음 | 짙은 오렌지 | 베티버 뿌리의 쌉쌀함 </p>
                <p class="price">￦ {{ price[0] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1652765573/dcf42ce8-d840-4857-8e5a-cf3eb0dfee99/Thumbnail_Shrybody_duo_bigalico.jpg" 
                alt="샤워리바디 듀오 비가리코">
                <p class="item-title">샤워리바디 듀오 비가리코</p>
                <p class="item-inf">씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스 </p>
                <p class="price">￦ {{ price[1] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1662370990/140851c6-a43e-48ac-825c-8e59f877d791/Thumbnail_Shrybody_duo_nimbus.jpg" 
                alt="샤워리바디 듀오 님버스">
                <p class="item-title">샤워리바디 듀오 님버스</p>
                <p class="item-inf">도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크</p>
                <p class="price">￦ {{ price[1] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1662370974/74eb6ff6-f79f-417a-bc76-2b590e4fd43d/Thumbnail_Shrybody_duo_fog.jpg" 
                alt="샤워리바디 듀오 포그">
                <p class="item-title">샤워리바디 듀오 포그</p>
                <p class="item-inf">물안개 낀 숲 | 젖은 나무 | 캐시미어 우드</p>
                <p class="price">￦ {{ price[1] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1652765105/397880e7-f466-41cb-8955-7093a4b88b10/Thumbnail_Shrybody_lotion200_bigalico.jpg" 
                alt="샤워리바디로션 비가리코">
                <p class="item-title">샤워리바디로션 비가리코</p>
                <p class="item-inf">씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스 </p>
                <p class="price">￦ {{ price[2] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1662370945/7deaa277-bc59-460a-9028-ca3b0d11c1f3/Thumbnail_Shrybody_lotion200_nimbus.jpg" 
                alt="샤워리바디로션 님버스">
                <p class="item-title">샤워리바디로션 님버스</p>
                <p class="item-inf">도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크</p>
                <p class="price">￦ {{ price[2] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1662370907/14f5fec0-558a-4ff8-ae9f-f61f58fc3a86/Thumbnail_Shrybody_lotion200_fog.jpg" 
                alt="샤워리바디로션 포그">
                <p class="item-title">샤워리바디로션 포그</p>
                <p class="item-inf">물안개 낀 숲 | 젖은 나무 | 캐시미어 우드</p>
                <p class="price">￦ {{ price[2] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1653877321/7de47ada-7d7c-44db-b3b4-e453f19fc3e0/Thumbnail_Shrybody_wash400_bigalico.jpg" 
                alt="샤워리바디워시 비가리코">
                <p class="item-title">샤워리바디워시 비가리코</p>
                <p class="item-inf">씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스 </p>
                <p class="price">￦ {{ price[3] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1653877408/8d39cb12-b2fa-4ac1-be1f-2780ac69b575/Thumbnail_Shrybody_wash400_nimbus.jpg" 
                alt="샤워리바디워시 님버스">
                <p class="item-title">샤워리바디워시 님버스</p>
                <p class="item-inf">도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크</p>
                <p class="price">￦ {{ price[3] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1653877388/1c673af9-2173-46a5-92b8-f3f47da0e443/Thumbnail_Shrybody_wash400_fog.jpg" 
                alt="샤워리바디워시 포그">
                <p class="item-title">샤워리바디워시 포그</p>
                <p class="item-inf">물안개 낀 숲 | 젖은 나무 | 캐시미어 우드</p>
                <p class="price">￦ {{ price[3] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1653877423/6da7a13c-d735-4423-9e76-5958138096df/Thumbnail_Shrybody_wash400_storm.jpg" 
                alt="샤워리바디워시 스톰">
                <p class="item-title">샤워리바디워시 스톰</p>
                <p class="item-inf">풀내음 | 짙은 오렌지 | 베티버 뿌리의 쌉쌀함 </p>
                <p class="price">￦ {{ price[3] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1653877450/80b67a19-ef3e-40f1-bc7b-3a5553fd6047/Thumbnail_Shrybody_lotion400_bigalico.jpg" 
                alt="샤워리바디로션 비가리코">
                <p class="item-title">샤워리바디로션 비가리코</p>
                <p class="item-inf">씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스 </p>
                <p class="price">￦ {{ price[4] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1660722037/221cd202-acd4-4153-bb77-732aaa3db3d2/Thumbnail_Shrybody_lotion400_nimbus.jpg" 
                alt="샤워리바디로션 님버스">
                <p class="item-title">샤워리바디로션 님버스</p>
                <p class="item-inf">도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크 </p>
                <p class="price">￦ {{ price[4] }}</p>
            </router-link>
        </div>

        <div class="p-p-item">
            <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
            <router-link to="#" class="p-item">
                <img src="https://web-resource.tamburins.com/catalog/product/1660720704/528a5aaa-e769-49b9-9fe0-20c497ff118c/Thumbnail_Shrybody_lotion400_fog.jpg" 
                alt="샤워리바디로션 포그">
                <p class="item-title">샤워리바디로션 포그</p>
                <p class="item-inf">물안개 낀 숲 | 젖은 나무 | 캐시미어 우드 </p>
                <p class="price">￦ {{ price[4] }}</p>
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
.shower {
    height: 30px;
    background-color: #1d1d1d;
    border-radius: 15px;
    font-size: 12px;

}

.body {
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
            price: ["33,000", "68,000", "38,500", "52,000", "59,500"]
        }
    },
};
</script>