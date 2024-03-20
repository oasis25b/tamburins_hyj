<template>
  <main class>
    <div style="padding-top: 60px;"></div>
    <div class="MainBanner-wrap">
      <router-link to="/perfume-balm" class="MainBanner-item">
        <img fetchpriority="high"
          src="https://web-resource.tamburins.com/mainbanner/cc82c762-b0d1-4b9d-9212-ebd1f33b6001/pc_main_banner_jen_half.jpg">
      </router-link>

      <router-link to="/perfume-balm" class="MainBanner-item">
        <img fetchpriority="high"
          src="https://tamburins-resource.s3.ap-northeast-2.amazonaws.com/mainbanner/73e3c79b-93ba-4acd-9d3a-7ae7f812dc20/pc_main_banner_half_ver2.jpg"
          alt="">
      </router-link>

      <router-link to="/e-p-k" class="MainBanner-item">
        <video width="100%" height="auto" loop autoplay muted playsinline>
          <source
            src="https://tamburins-dev-resource.s3.ap-northeast-2.amazonaws.com/mainbanner/1966d633-1974-44d6-a6da-9af2d62ce01e/pc_main_banner_2.mp4"
            type="video/mp4">
        </video>
      </router-link>

      <router-link to="/hand-and-lip" class="MainBanner-item">
        <img fetchpriority="high"
          src="https://tamburins-dev-resource.s3.ap-northeast-2.amazonaws.com/mainbanner/5cc816d5-50d4-407b-935a-a8028d228afe/pc_main_banner_half_4.jpg"
          alt="">
      </router-link>

      <router-link to="/hand-and-lip" class="MainBanner-item">
        <img fetchpriority="high"
          src="https://tamburins-dev-resource.s3.ap-northeast-2.amazonaws.com/mainbanner/828b0171-58a2-4354-b8ac-fac49aa7eb29/pc_main_banner_half_2.jpg"
          alt="">
      </router-link>

      <router-link to="/" class="MainBanner-item">
        <img fetchpriority="high"
          src="https://tamburins-dev-resource.s3.ap-northeast-2.amazonaws.com/mainbanner/01938e09-9d48-4b03-be54-f023e275148b/pc_main_banner_half_3.jpg"
          alt="">
      </router-link>

      <router-link to="/home-fragrance" class="MainBanner-item">
        <img fetchpriority="high"
          src="https://tamburins-resource.s3.ap-northeast-2.amazonaws.com/mainbanner/877866b8-1b82-4c53-a99a-dfbc4d03d3e1/pc_main_banner_half_6.jpg"
          alt="">
      </router-link>

      <router-link to="/hand-and-lip" class="MainBanner-item">
        <video width="100%" height="auto" loop autoplay muted playsinline>
          <source
            src="https://tamburins-resource.s3.ap-northeast-2.amazonaws.com/mainbanner/d5fc14f8-164e-4cd2-b5de-bd44ccefe526/lip_balm_1280_1193.mp4"
            type="video/mp4">
        </video>
      </router-link>
    </div>
  </main>
</template>

<style scoped>

/* 리셋 */
* {
  margin: 0;
  padding: 0;
  border: 0;
  color: #1d1d1d;
  overflow: auto;
}

/* nav */
/* .v-layout {
 padding-bottom: 50px;
} */

/* 메인 */
.MainBanner-wrap {
  display: flex;
  flex-wrap: wrap;
}

.v-toolbar-title {
  font-weight: bold;
  cursor: pointer;
}

.MainBanner-item {
  width: 50%;
  position: relative;
  display: flex;
  box-sizing: border-box;
  /* 변경된 box-sizing 속성 추가 */
  margin: 0;
  
}

/* 이미지 */
img {
  width: 100%;
  height: 100%!important;
  /* 이미지의 높이를 자동으로 조정하여 꽉 차게 설정 */
  margin: 0;
  object-fit: cover;

}

video {
  width: 100%;
  object-fit: cover;
}

@media (min-width: 769px) {

}
@media (max-width: 768px) {

/* 화면의 너비가 769px 이상일 때, 이미지가 두 개씩 나열되도록 설정 */
.MainBanner-item {
  width: 100%;
  height: 810px;
}

}

</style>