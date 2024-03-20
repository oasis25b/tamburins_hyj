<!-- Modal.vue -->
<template>
    <transition name="modal">
      <div class="modal-mask" v-if="show" @click.self="$emit('close')">
        <div class="modal-container">
          <div class="modal-content">
            <h3 class="detail-title">제품 상세 정보</h3>
            <p style="padding-bottom: 20px;"> 
                감각적으로 향을 즐길 수 있는 새로운 형태의 퍼퓸밤.
              핸디한 사이즈의 퍼퓸 밤과 함께 어디서든 자유롭게 향을 경험하고 스스로를 표현해보세요.
              부드러운 텍스처로 맥박이 뛰는 손목, 귀밑 등에 부드럽게 발라주면 체온에 의해 은은하게 퍼지는 향을 느끼실 수 있습니다.
              아이코닉한 퍼퓸 밤 디자인은 탬버린즈 퍼퓸의 일부가 미러링된 형태로 확장된 퍼퓸의 페르소나를 표현합니다.
            </p>
            <h4  style="padding-bottom: 5px;">전성분</h4>
            <p  style="padding-bottom: 10px;">
            카프릴릭/카프릭트라이글리세라이드, 향료, 다이메티콘, 마이크로크리스탈린왁스, 파라핀, 페닐트라이메티콘, 합성왁스, 마이크로크리스탈린왁스, 리모넨, 리날룰, 알파-아이소메틸아이오논, 헥실신남알,
            쿠마린, 제라니올, 하이드록시시트로넬알, 시트랄, 비에이치티</p>

            <h4  style="padding-bottom: 5px;">사용방법</h4>
            <p  style="padding-bottom: 10px;">
            용기 하단을 돌려 내용물을 끌어올려 손목, 귀 뒤 등 맥박이 뛰는 부위에 가볍게 발라줍니다.</p>

            <h4  style="padding-bottom: 5px;">사용할 때의 주의사항</h4>
            <p  style="padding-bottom: 10px;">
            1. 손목 등에 가볍게 테스트 후 사용하세요.
            2. 사용 시 묻어날 수 있으니 잘 흡수시켜 사용해주세요.
            3.제형 특성상 온도에 민감하여 고온 보관시 스웨팅 현상이 발생할 수 있으니 유의해주세요. 
            * 본 제품에 이상이 있을 경우 공정거래위원회 고시 소비자 분쟁 해결 기준에 의해 보상해 드립니다.</p>

            <h4  style="padding-bottom: 5px;">사용기한</h4>
            <p  style="padding-bottom: 10px;">
            사용기한 24개월(상품 발송일 기준으로 사용기한이 12개월 이상 남은 상품만을 판매합니다.)</p>

            <h4  style="padding-bottom: 5px;">제조업자</h4>
            <span  style="padding-bottom: 10px;">코스맥스(주)</span>

          </div>
        </div>
          </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean
    },  
  };
  </script>
  
  <style scoped>

  .detail-title {
    font-size: 16px;
    margin-top: 100px;
    padding-bottom: 15px;
  }
  .modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 999;
  }
  
  .modal-container {
    width: 500px; /* 모달의 너비 */
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
  }
  
  .modal-enter-active, .modal-leave-active {
    transition: transform 0.5s;
  }
  
  .modal-enter, .modal-leave-to {
    transform: translateX(100%);
  }
  </style>
  