<template>
    <div style="padding-top: 120px;"></div>
    <div>
        <h2>회원 가입 완료</h2>
        <p>안녕하세요 황유진님. <br>
            탬버린즈에 가입해주셔서 감사합니다.
        </p>
        <p> 탬버린즈 회원만을 위해 준비된 <br>
            온라인 익스클루시브 혜택을 경험해보세요.</p>
    </div>
</template>

<script>
export default {
  mounted() {
    new window.naver_id_login("Client Id", "callback URL");
    console.log("access token", naver_id_login.getAccessToken()); // 정상적 로그인이 된 경우 access token값 출력
  },
};
  </script>