<template>
    <div style="margin-top: 120px;"></div>

    <main class="main">
        <section class="signbox top">
            <div class="tabmenu">
                <button v-for="(tab, index) in tabList" :key="index" @click.prevent="currentTab = index"
                    :class="{ 'active': currentTab === index }"> {{ tab.name }} <!-- 이게 저기 위에 버튼-->
                </button>
            </div>
            <section class="signbox mid" v-if="currentTab === 0">
                <form action="">
                    <div class="idbox">
                        <input type="text" class="userid" placeholder="아이디(이메일)" autocomplete="off">
                    </div>
                    <div class="pwbox">
                        <input type="password" class="userpw" placeholder="비밀번호" maxlength="16" autocomplete="off">
                    </div>
                    <div class="btnbox">
                        <button type="submit" class="loginbtn">로그인</button>
                    </div>
                </form>
                <div class="pagebox">
                    <a href="">아이디 찾기</a>
                    <span>|</span>
                    <a href="">비밀번호 찾기</a>
                    <span>|</span>
                    <a href="">회원가입</a>
                </div>
                <div class="snssign flex">
                    <button type="button" class="kakaobtn">
                        <img src="https://www.tamburins.com/icons/ico_kakao_x3.png" alt loading="lazy" width="20"
                            height="19" decoding="async" style="color: transparent;">
                        <a
                            href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fscope%3D%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.tamburins.com%252Fapi%252Fauth%252Fcallback%252Fkakao%26state%3Dzitgj_A4tUEo2aQJQRIWwNtbIZFKxo8Ce5A47awWRaU%26through_account%3Dtrue%26client_id%3Dc3019255ff44f8f40f8a4de1c4f3757b&talk_login=hidden#login">카카오
                            로그인</a>
                    </button>
                    <!-- 네이버 로그인 버튼 노출 영역 -->
                    <button type="button" @click="naverLogin" class="naverbtn">
                        <img src="https://www.tamburins.com/icons/ico_naver_x3.png" alt="" width="15" height="15"
                            decoding="async" style="color: transparent;">
                        네이버 로그인
                    </button>
                    <!-- 나머지 코드 -->
                </div>

            </section>

            <section class="signbox mid" v-if="currentTab === 1">
                <form action="">
                    <div class="idbox">
                        <label for="labelphone" class="label">휴대폰번호</label>
                        <input type="text" class="userphone" placeholder="'-'없이 숫자만 입력" autocomplete="off">
                    </div>
                    <div class="pwbox">
                        <label for="labelphone" class="label" style="margin-top: 25px;">주문 번호</label>
                        <input type="text" class="userorderid" placeholder="17자리 주문번호 입력" autocomplete="off">
                    </div>
                    <div class="btnbox">
                        <button type="submit" class="loginbtn">로그인</button>
                    </div>
                </form>
            </section>

        </section>
    </main>
</template>

<style scoped>
.snssign {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
}

.snssign a {
    text-decoration: none;
}

.kakaobtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    background: #f7e600;
    border: 1px solid #f7e600;
    border-radius: 4px;
    color: #1d1d1d;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
}

.naverbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    background: #03c75a;
    border: 1px solid #03c75a;
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    text-align: center;

}

.kakaobtn img {
    position: absolute;
    left: 20px;
}

.naverbtn img {
    position: absolute;
    left: 22px;
}

.pagebox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.pagebox a {
    display: inline-flex;
    position: relative;
    line-height: 15px;
    color: #1d1d1d;
    font-size: 11px;
    text-decoration: none;
}

.label {
    display: block;
    font-size: 11px;
    margin-bottom: 5px;
    color: #1d1d1d;
}

.tabmenu>button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a8a8a8;
    border-bottom: 1px solid #d5d5d5;
    width: 100%;
    height: 40px;
    padding: 6px 0;
    border: 0;
    outline: 0;
    background: #Fff;
    font-weight: 600;
    font-size: 13px;
    appearance: none;
    cursor: pointer;
}

button.active {
    border-bottom: 1px solid #1d1d1d;
    color: #1d1d1d;
}

.userid,
.userpw,
.userphone,
.userorderid {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #1d1d1d;
    background: #fff;
    border-radius: 5px;
    font-size: 13px;
    color: #1d1d1d;
    outline: none;
    margin-top: 10px;
}

.loginbtn {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #1d1d1d;
    background-color: #1d1d1d;
    color: #fff;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 14px;

}

.mid {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 40px;
}

.tabmenu {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    list-style: none;
}

.main {
    min-height: 640px;
    box-sizing: border-box;
}

.signbox {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    width: 100%;
    max-width: 375px;
}
</style>

<script>
export default {
    name: "Tab",
    data() {
        return {
            currentTab: 0,
            tabList: [
                { name: "로그인" },
                { name: "비회원 주문 조회" },
            ],
            tab: false
        };
    },
    methods: {
        tabopen() {
            this.tab = !this.tab;
        },
        initializeNaverIdLogin() {
            // 네이버 아이디 로그인 객체를 생성합니다
            var naver_id_login = new naver_id_login("YOUR_CLIENT_ID", "YOUR_CALLBACK_URL");
            // 고유한 상태값을 가져옵니다
            var state = naver_id_login.getUniqState();
            // 버튼의 스타일과 크기를 설정합니다
            naver_id_login.setButton("white", 2, 40);
            // 서비스의 도메인을 설정합니다
            naver_id_login.setDomain("YOUR_SERVICE_URL");
            // 상태값을 설정합니다
            naver_id_login.setState(state);
            // 팝업 모드로 설정합니다
            naver_id_login.setPopup();
            // 네이버 아이디 로그인을 초기화합니다
            naver_id_login.init_naver_id_login();
        }
    },
    mounted() {
        // 네이버 아이디 로그인을 초기화하는 메소드를 호출합니다
        this.initializeNaverIdLogin();
    }
}
</script>