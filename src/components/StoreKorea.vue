<template>
    <div style="height: 80px;"></div>
    <div class="container">
        <div class="content-wrap">
            <div class="tab">
                <div class="Pchip">
                    <span class="text">STORE</span>
                    <div>
                        <button v-for="(tab, index) in tabList" :key="index" @click.prevent="currentTab = index"
                            :class="{ 'active': currentTab === index }"> {{ tab.name }} <!-- 이게 저기 위에 버튼-->
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--대한민국-->
    <div class="container">
        <div class="korea" v-if="currentTab === 0">
            <div class="korea">
                <img src="https://web-resource.tamburins.com/assets/image/store/kr/seongsu/pc_seongsu_1.jpg"
                    alt="플래그십 스토어 성수">
                <div class="store">
                    <div class="store-title">
                        <p>플래그십 스토어 성수</p>
                        <div class="map">
                            <a style="text-decoration: underline;"
                                href="https://www.google.co.kr/maps/place/%ED%83%AC%EB%B2%84%EB%A6%B0%EC%A6%88+%EC%84%B1%EC%88%98+%ED%94%8C%EB%9E%98%EA%B7%B8%EC%8B%AD%EC%8A%A4%ED%86%A0%EC%96%B4/data=!3m1!4b1!4m15!1m8!3m7!1s0x357ca490cc5188af:0x18dd0af0962d6656!2z7ISc7Jq47Yq567OE7IucIOyEseuPmeq1rCDsl7DrrLTsnqU16ri4IDg!3b1!8m2!3d37.5437671!4d127.0526044!16s%2Fg%2F11bzf3jxry!3m5!1s0x357ca5151332a661:0x7a0416827c108d68!8m2!3d37.5437671!4d127.0526044!16s%2Fg%2F11vlbg5hjk?entry=ttu"
                                target="_blank">
                                지도보기
                            </a>
                        </div>
                    </div>
                    <div class="store-inf">
                        
                        <div class="store-place">
                            <p>서울 성동구 연무장 5길 8</p>
                            <p>+82 70 4266 6142</p>
                            <p>월-일 11:00am-9:00pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="korea">
                <img src="https://web-resource.tamburins.com/assets/image/store/kr/samcheong/samchung_fs_01.jpg"
                    alt="플래그십 스토어 삼청">
                <div class="store">
                    <div class="store-title">
                        <p>플래그십 스토어 삼청</p>
                        <div class="map">
                            <a style="text-decoration: underline;"
                                href="https://www.google.co.kr/maps/place/TAMBURINS+Flagship+Store+Samcheong/data=!3m1!4b1!4m6!3m5!1s0x357ca310873a0217:0x48767bcb989ef154!8m2!3d37.5793989!4d126.9822207!16s%2Fg%2F11khm926xj"
                                target="_blank">
                                지도보기
                            </a>
                        </div>
                    </div>
                    <div class="store-inf">
                        
                        <div class="store-place">
                            <p>서울 종로구 율곡로3길 84</p>
                            <p>+82 70 4139 7450</p>
                            <p>월-일 11:00am-8:00pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="korea">
                <img src="https://web-resource.tamburins.com/assets/image/store/kr/sinsa/Sinsa1.jpg" alt="플래그십 스토어 신사">
                <div class="store">
                    <div class="store-title">
                        <p>플래그십 스토어 신사</p>
                        <div class="map">
                            <a style="text-decoration: underline;"
                                href="https://www.google.co.kr/maps/place/%ED%95%98%EC%9A%B0%EC%8A%A4%EB%8F%84%EC%82%B0+HAUS+DOSAN/@37.5253221,127.0334898,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3b907673741:0x5435f1f3bddb11da!8m2!3d37.5253221!4d127.0356785"
                                target="_blank">
                                지도보기
                            </a>
                        </div>
                    </div>
                    <div class="store-inf">
                        
                        <div class="store-place">
                            <p>서울 종로구 압구정로10길 44</p>
                            <p>+82 02 511 1246</p>
                            <p>월-일 11:00am-9:00pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="korea">
                <video width="100%" height="auto" loop autoplay muted playsinline>
                    <source src="https://web-resource.tamburins.com/assets/image/store/kr/dosan/Dosan1.mp4"
                        type="video/mp4">
                    <track kind="captions" src="https://web-resource.tamburins.com/assets/image/store/kr/dosan/Dosan1.mp4"
                        srclang="en" label="English">
                </video>
                <div class="store">
                    <div class="store-title">
                        <p>하우스 도산</p>
                        <div class="map">
                            <a style="text-decoration: underline;"
                                href="https://www.google.com/maps/place/%ED%83%AC%EB%B2%84%EB%A6%B0%EC%A6%88+%ED%94%8C%EB%9E%98%EA%B7%B8%EC%8B%AD%EC%8A%A4%ED%86%A0%EC%96%B4+Tamburins/@37.5206052,127.0214472,19z/data=!3m1!4b1!4m5!3m4!1s0x357ca3eb0892eca7:0x317ff33e31a18c5a!8m2!3d37.5206052!4d127.0219944"
                                target="_blank">
                                지도보기
                            </a>
                        </div>
                    </div>
                    <div class="store-inf">
                        
                        <div class="store-place">
                            <p>서울 종로구 압구정로10길 44</p>
                            <p>+82 02 511 1246</p>
                            <p>월-일 11:00am-9:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--중국-->
    <div class="container">
        <div class="china" v-if="currentTab === 1">
            <video width="100%" height="auto" loop autoplay muted playsinline
                poster="https://web-resource.tamburins.com/assets/image/store/cn/shanghai/Shanghai1_poster.jpg">
                <source src="https://web-resource.tamburins.com/assets/image/store/cn/shanghai/Shanghai1.mp4"
                    type="video/mp4">
                <track kind="captions" src="https://web-resource.tamburins.com/assets/image/store/cn/shanghai/Shanghai1.mp4"
                    srclang="en" label="English">
            </video>

            <div class="store">
                <div class="store-title">
                    <p>하우스 상해</p>
                </div>
                <div class="store-inf">
                    <div class="map">
                    </div>
                    <div class="store-place">
                        <p>+86 4F, No.798-812, Middle Huaihai Road, Huangpu District, Shanghai, China <br>
                        +86 21-64220858 <br>
                        월-일 10:00am-10:00pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 전시-->
    <div class="container">
        <div class="exhibition" v-if="currentTab === 2">
            <img src="https://web-resource.tamburins.com/assets/image/store/exhibition/toilet_fragrance/pc_hausdosan_tf01.jpg"
                alt="">
            <div class="store12">
                <div class="store-title" style="padding-bottom: 20px;">
                    <p>토일렛 프래그런스 컬렉션</p>
                </div>
                <div class="store-ex" style="font-size: 14px;margin-bottom: 20px;">
                    탬버린즈의 토일렛 에피소드는 방해받고 싶지 않은 공간과 순간에 대해 이야기합니다.
                    가장 편안한 공간에서 떠오르는 영감을 끄적이는 순간, 아무 생각을 하지 않고 음악을 듣는 순간. 아무도 당신의 시간을 방해할 수 없는 은밀하고 원초적인 공간에서 기분 좋은 향과 함께
                    영감을 얻어보세요.
                    나를 위해, 연인을 위해 그리고 가족과 친구를 위해 에티켓을 지킨다면 화장실을 더욱 유쾌한 공간으로 맞이할 수 있습니다.
                    토일렛 프래그런스와 함께 탬버린즈만의 감각적 향으로 표현된 새로운 화장실 에티켓을 경험해보세요.
                </div>
                <div class="store-ex-1" style="font-size: 14px;margin-bottom: 20px;">
                    서울 강남구 압구정로46길 50 하우스도산<br>
                    2023. 07. 29 - 2023. 08. 29
                </div>
            </div>

            <div class="exhibition">
                <img src="https://web-resource.tamburins.com/assets/image/store/exhibition/perfume_balm/popup_balm_01.jpg"
                    alt="">
                <div class="store12">
                    <div class="store-title" style="padding-bottom: 20px;">
                        <p>퍼퓸밤 컬렉션</p>
                    </div>
                    <div class="store-ex" style="font-size: 14px;margin-bottom: 20px;">
                        감각적으로 향을 즐길 수 있는 새로운 형태의 퍼퓸밤.
                        아이코닉한 퍼퓸 밤 디자인은 탬버린즈 퍼퓸의 일부가 미러링된 형태로 확장된 퍼퓸의 페르소나를 표현합니다.
                        향수 컬렉션의 연장선인 ‘퍼퓸밤’의 런칭을 맞이하여 청량한 컬러감이 돋보이는 조형물을 선보입니다.
                        산뜻한 향기로 가득 채워진 팝업공간은 하우스 도산에서 바로 만나보실 수 있으며, 평면화된 이미지를 통해 사물을 디테일하게 관찰하도록 작업하는 김경태 작가와 탬버린즈가 함께 향의
                        피사체를
                        선사합니다.
                        자연의 향에서 기반된 향수 라인의 시그니처 향인 Chamo를 고체향수로 새롭게 경험 할 수 있는 순간이 되길 바랍니다.
                    </div>
                    <div class="store-ex-1" style="font-size: 14px;margin-bottom: 20px;">
                        서울 강남구 압구정로46길 50 하우스도산<br>
                        2022. 11. 25 - 2022. 12. 18
                    </div>
                </div>
            </div>

            <div class="exhibition" style="margin-bottom: 50px;">
                <img src="https://web-resource.tamburins.com/assets/image/store/exhibition/perfume_collection/exhibition_perfume_1.jpg"
                    alt="">
                <div class="store12">
                    <div class="store-title" style="padding-bottom: 20px;">
                        <p>향수 컬렉션</p>
                    </div>
                    <div class="store-ex" style="font-size: 14px;margin-bottom: 20px;">
                        첫 향수 컬렉션 전시에 당신을 초대합니다.
                        탬버린즈는 향수를 보여주는 일반적인 방식의 틀을 벗어나 새로운 향수 세계관을 확장하는 것에 중점을 두었습니다.
                        첫 향수 캠페인 주제는 [solace: 한 줌의 위안] 입니다.
                        이번 전시는 위안과 함께 공존하는 다양한 감정들을 오롯이 공간에 표현하고자 했으며 존재감이 압도적인 아트 인스톨레이션(거인)은 탬버린즈의 정신성, 정체성과도 닮아
                        있으며,
                        캠페인의 네러티브를 상상하게 만듭니다.
                        공간 전체를 감싸는 아트 사운드 ‘CHAMO sound exhibition duration ca.10’ 도 전시장에서 감상해보세요.
                        “눈에 보이지 않는 감각은 언제나 우리의 삶을 더욱 풍요롭게 만든다.
                        대상의 움직임을 정확히 알 수 없지만 그 존재는 우리의 순간을 더욱 분명하게 만든다.
                        그렇게 CHAMO는 음악이 되고 향이 되어 우리에게 한 줌의 위로를건네는 것은 아닐까.
                        ”Collaboration with Artist GRAYCODE, jiiiiin
                    </div>
                    <div class="store-ex-1" style="font-size: 14px;">
                        서울 성동구 금호로3길 14<br>
                        2022. 09. 30 - 2022. 10. 30
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.content-wrap {
    border-bottom: 1px solid rgb(240, 240, 240);
}

.tab {
    width: 100%;
    height: 60px;
}

.container {
    width: 1134px;
    margin: 0 auto;
    height: auto;
}

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

button {
    width: 80px;
    height: 30px;
    background-color: #d8d5d5;
    border-radius: 15px;
    font-size: 12px;
    margin-right: 10px;
    color: #4d4c4c;
}

button.active {
    background-color: #1d1d1d;
    color: white;
    font-size: 12px;
    border-radius: 15px;
}

/* 이미지 */
img,
video {
    padding-top: 40px;
    width: 100%;
}

/* content */
.store {
    padding-top: 20px;
    max-width: 1134px;
    display: flex;
    justify-content: space-between;
    color: #1d1d1d;
    margin: 30px auto 100px;
    line-height: 21px;
    font-size: 13px;
}

.store12 {
    padding-top: 20px;
    max-width: 1134px;
    justify-content: space-between;
    color: #1d1d1d;
    margin: 30px auto 100px;
    font-size: 13px
}
.store-title {
    font-size: 15px;
    font-weight: bold;
    font-size: 14px;
}

.store-place {
    text-align: right;
}

.map {
    padding-top: 20px;
}

@media only screen and (max-width: 1280px) {
    .container {
        width: 100%;
        padding: 0;
    }
}


@media (max-width: 1023px) {
    .container {
        width: 100%;
        padding: 0;
    }

    .store {
        max-width: 100%;
        padding: 0 15px;
        margin: 20px 0 40px;
        flex-direction: column;
        text-align: center;
        display: flex;
    }

    .store-place {
        text-align: center;
    }
    .store12 {
        max-width: 100%;
        padding: 0 15px;
        margin: 20px 0 40px;
        flex-direction: column;
        text-align: center;
        display: flex;

    }
}

@media (max-width: 768px) {
    .Pchip {
        width: 100%;
        box-sizing: border-box;
    }

    .container {
        width: 100%;
    }
}


</style>

<script>
export default {
    name: "Tab",
    data() {
        return {
            currentTab: 0,
            tabList: [
                { name: "대한민국" },
                { name: "중국" },
                { name: "전시" },

            ],
            tab: false
        };
    },
    methods: {
        tabopen() {
            this.tab = !this.tab;
        }
    }
}
</script>