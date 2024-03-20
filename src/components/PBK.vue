<template>

  <div class="boxwrap">
    <div class="imgbox">
        <div class="flex">
          <div class="swiper-slide">
            <img
        src="https://web-resource.tamburins.com/catalog/product/1701940111/4f02a9b5-564e-4407-a7fd-0b8126ac8d88/Thumbnail_perfumebalm_PUMKINI_ver2.jpg"
        alt="">
          </div>
          <div class="swiper-slide">
        <img class="hideimg"
      src="https://tamburins-resource.s3.ap-northeast-2.amazonaws.com/catalog/product/12500442/21d4a32b-6795-4b44-91af-2e2b19c684de/Thumbnail_Box_perfumebalm_PUMKINI.jpg"
      alt="">
          </div>
        </div>
    </div>

    <div class="detailbox">
      <div class="detail-content">
        <h2 class="detail-title">
          <div>퍼퓸 밤 펌키니</div>
          <em style="font-style: normal;">￦46,500</em>
        </h2>
        <p>달콤한 호박ㅣ차조기잎ㅣ코코넛밀크 </p>
        <br>
        하얀 호박에서 느껴지는 청초하고 달콤한 향에 차조기잎과 블러드오렌지의 독특한 푸르름이 더해져 기분 좋은 놀라움을 선사합니다. 잘 여물어 진득해진 호박향과 진저의 스파이시함이 교차되어 독특한 조화를
        이루고 뒤이어 밀려오는 크리미한 코코넛밀크는 부드러운 샌달우드와 함께 오묘한 잔상을 만들며 깊은 여운을 그려냅니다.
      </div>

      <div class="anotherimg">
        <a href="">
          <img class="a-img" style="border: 1px solid black;"
            src="https://web-resource.tamburins.com/catalog/product/1701940111/4f02a9b5-564e-4407-a7fd-0b8126ac8d88/Thumbnail_perfumebalm_PUMKINI_ver2.jpg"
            alt="">
        </a>
        <a href="">
          <img class="a-img"
            src="https://web-resource.tamburins.com/catalog/product/1701940112/ee37aab9-63fe-456a-8752-fdb74f3aa480/Thumbnail_perfumebalm_HOLY_ver2.jpg"
            alt="">
        </a>
        <a href="">
          <img class="a-img"
            src="https://web-resource.tamburins.com/catalog/product/1666772156/376a6272-2c75-471f-bb0e-8df1f8f2405e/Thumbnail_perfumebalm_CHAMO_ver2.jpg"
            alt="">
        </a>
        <a href="">
          <img class="a-img"
            src="https://web-resource.tamburins.com/catalog/product/1666774132/9d3cd895-bb1e-4cf3-8031-d754c6973c6d/Thumbnail_perfumebalm_BERGA_ver2.jpg"
            alt="">
        </a>
        <a href="">
          <img class="a-img"
            src="https://web-resource.tamburins.com/catalog/product/1666773989/51b36d53-13e8-4a98-abd2-17ec0c7c187b/Thumbnail_perfumebalm_LALE_ver2.jpg"
            alt="">
        </a>
        <a href="">
          <img class="a-img"
            src="https://web-resource.tamburins.com/catalog/product/1666773625/b996359a-936b-4253-b917-11fd1781d661/Thumbnail_perfumebalm_SUEDEPEAR_ver2.jpg"
            alt="">
        </a>
      </div>

      <div class="detail-content">
        <p style="padding-top: 20px;">사이즈</p>
        <br>
        <button class="sizebtn"> 6.5 g</button>
        <br>
        <button class="addbtn" @click="addToCart">쇼핑백에 추가하기</button>
        <div v-if="notification" class="notification">{{ notification }}</div> <!-- 알림 표시 -->

        <div>
        <button class="itembtn" @click="toggleModal">제품 상세보기</button>
         <Modal :show="modalShow" @close="toggleModal">
          <p>모달 내용을 입력하세요.</p>
         </Modal>
          </div>
      </div>

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

.flex::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.flex::-webkit-scrollbar-track {
  background-color: white;
}

.flex::-webkit-scrollbar-thumb {
  border-radius: 8px ;
  background-color: #8f8f8f;
}

div {
  box-sizing: border-box;
}

.itembtn {
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 14px;
  text-align: left;

}

.addbtn {
  margin-top: 40px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-size: 13px;
  color: white;
  background-color: black;
  margin-bottom: 40px;

}

.sizebtn {
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background-color: aliceblue;
  border-color: 1px solide black;
}

.flex {
  display: flex
}

.anotherimg a {
  width: 100%;
  padding-right: 10px;
}

.a-img {
  border-radius: 5px;
}

.anotherimg {
  padding-top: 20px;
  margin: 0 auto;
  width: 62%;
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(230, 230, 230);
}

.secondimg {
display: none;
}

.detail-title {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 5px;

}

.detail-content {
  padding-bottom: 10px;
}

.detail-content>p {
  font-size: 16px;
}

.detailbox {
  padding-top: 200px;
  top: 60px;
  position: sticky;
  box-sizing: border-box;
}

.detail-content {
  width: 600px;
  margin: auto;
}

.imgbox {
  width: 50%;
  height: 100%;
  float: left;
}

img {
  width: 100%;
}

@media (max-width: 768px) {
  .imgbox {
    width:100%;
    float: none;
    height: fit-content;
  }
  .secondimg {
    display: none;
  }

  .detailbox {
    padding: 10px;
  }

  .detail-content {
    width: 450px;
  }

  .detail-content {
    font-size: 11px;
  }

  .detail-content .p {
    width: 300px;
  }
  
  .detail-title {
    font-size: 13px;
  }

  .detail-content>p {
    font-size: 11px;
  }
}

@media (max-width: 1200px) {
  .imgbox {
    height: fit-content;
    width: 100%;
    float: none;
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .detailbox {
    padding-top: 30px;
    margin: 0 auto;
  }

  .detail-content {
    width: 100%;
    padding: 0 30px;
  }

  .secondimg {
    display: none;
  }

} 


</style>

<script scoped>
import Modal from '../components/Modal.vue'
import AddedProductList from './AddedProductList.vue';
import 'swiper/swiper-bundle.css';


export default {
  props: ['product'],
  data() {
    return {
      modalShow: false,
    }
  },
  components: {
    Modal,
    AddedProductList
  },
  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow;
    },
    addToCart() {
      // 장바구니에 추가할 제품 정보
      const product = {
        id: 'pbk',
        name: '퍼퓸 밤 펌키니',
        img: "https://web-resource.tamburins.com/catalog/product/1701940111/c7b4bfa1-5bb0-48fa-b9ce-7707f472dde3/Thumbnail_perfumebalm_PUMKINI_ver2.jpg",
        price: 46500,
        free: false,
        quantity: 1,
       
      };

      this.$store.dispatch('addToCart', product); // 장바구니에 제품 추가 액션을 호출
    }
  },
  computed: {
        notification() {
            return this.$store.getters.notification; // 알림 상태 가져오기
        }
    },
}

</script>