<template>
    <div style="margin-top: 80px;"></div>

    <div class="tab">
        <div class="Pchip">
            <span class="text">HAND&LIP</span>
            <div>
                <button v-for="(tab, index) in tabList" :key="index" @click.prevent="currentTab = index"
                    :class="{ 'active': currentTab === index }"> {{ tab.name }} <!-- 이게 저기 위에 버튼-->
                </button>
            </div>
        </div>

        <!--쉘 퍼퓸 핸드-->
        <div class="Ppwrap grid" v-if="currentTab === 0">
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="p-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1695799914/2f05fb74-14a3-4a30-ade5-ef71fdb9d580/Thumbnail_shellX_30ml_pumkini.jpg"
                        alt="쉘 퍼퓸 핸드 펌키니">
                    <p class="item-title">쉘 퍼퓸 핸드 펌키니</p>
                    <p class="item-inf">달콤한 호박 | 차조기잎 | 코코넛밀크</p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="p-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1695800017/647ba501-4af5-472b-8076-528b877728b4/Thumbnail_shellX_30ml_bold.jpg"
                        alt="쉘 퍼퓸 볼드시트러스">
                    <p class="item-title">쉘 퍼퓸 볼드시트러스</p>
                    <p class="item-inf">다채로운 시트러스 | 캐럿시드 | 고소한 결명차 </p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="p-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1695800013/9cfd2091-f0fc-445b-b45f-fb2350461752/Thumbnail_shellX_30ml_holymetal.jpg"
                        alt="쉘 퍼퓸 핸드 홀리멘탈">
                    <p class="item-title">쉘 퍼퓸 핸드 홀리멘탈</p>
                    <p class="item-inf">측백나무잎 | 차가운금속 | 화이트 머스크 </p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="p-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1666763525/e1cd7977-2702-4e63-ba3c-ca3429a00ab0/Thumbnail_shellX_30ml_chamo.jpg"
                        alt="쉘 퍼퓸 핸드 카모">
                    <p class="item-title">쉘 퍼퓸 핸드 카모</p>
                    <p class="item-inf">진득한 카모마일 | 부드러운 나무결 | 머스크</p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="p-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1666769254/bd3de33b-3b0f-41ea-aca8-9c293b9952fe/Thumbnail_shellX_30ml_lale.jpg"
                        alt="쉘 퍼퓸 핸드 라레">
                    <p class="item-title">쉘 퍼퓸 핸드 라레</p>
                    <p class="item-inf">이슬을 머금은 풋사과 | 화이트 튤립 | 샌달 우드 </p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="p-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1666765396/21e2b3e8-2760-4506-a6ab-2a3344992b98/Thumbnail_shellX_30ml_berga.jpg"
                        alt="쉘 퍼퓸 핸드 버가샌달">
                    <p class="item-title">쉘 퍼퓸 핸드 버가샌달</p>
                    <p class="item-inf">지중해의 베르가못 | 쌉싸래한 청귤 | 샌달 우드 </p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>
        </div>

        <!--더보기 버튼-->
        <div class="plus" v-if="currentTab === 0">
            <button class="plusbtn" @click="tabopen">30mL 더보기</button>
        </div>
        <div class="plustab" v-if="tab">
            <div class="plus-item">
                <router-link to="" style="text-decoration: none;">
                    <img src="https://web-resource.tamburins.com/catalog/product/1697681527/f02a9417-04cb-4cd7-93f3-8d62289f80d1/Thumbnail_shell_30ml_fey9.jpg"
                        alt="">
                    <p class="item-title-p">쉘 퍼퓸 핸드 페이구 </p>
                </router-link>
            </div>

            <div class="plus-item">
                <router-link to="" style="text-decoration: none;">
                    <img src="https://web-resource.tamburins.com/catalog/product/1697681569/f2bcd82a-6fc7-4bf1-bf0d-b72b93a4b56c/Thumbnail_shell_30ml_VEIN.jpg"
                        alt="">
                    <p class="item-title-p">쉘 퍼퓸 핸드 베인 </p>
                </router-link>
            </div>
        </div>

        <!--에그 립밤-->
        <div class="Ppwrap grid" v-if="currentTab === 1">
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1695802162/b4e47158-4f17-4d4d-9d82-ac0c3de7f70f/Thumbnail_EggLipbalm_pink.jpg"
                        alt="에그 립밤 로즈우디">
                    <p class="item-title">에그 립밤 로즈우디</p>
                    <p class="item-inf">자몽 | 우아한 장미 | 머스크 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1695801896/9cf14fdd-2181-47f1-8f07-a62f4392d728/Thumbnail_EggLipbalm_egg.jpg"
                        alt="에그 립밤 밀크티">
                    <p class="item-title">에그 립밤 밀크티</p>
                    <p class="item-inf">베르가못 | 은은한 블랙티 | 코코넛 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1695802170/b14a73eb-8f00-4302-8b1c-8c97acd4c9e3/Thumbnail_EggLipbalm_silver.jpg"
                        alt="에그 립밤 언센티드">
                    <p class="item-title">에그 립밤 언센티드</p>
                    <p class="item-inf">언센티드(무향)</p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1695802166/e0a3b6b6-6277-4701-9143-a0127fc15f8a/Thumbnail_EggLipbalm_black.jpg"
                        alt="에그 립밤 우디그린">
                    <p class="item-title">에그 립밤 우디그린</p>
                    <p class="item-inf">신선한 만다린 과즙 | 아로마틱 허브 | 부쿠 </p>
                    <p class="price">￦ {{ price[1] }}</p>
                </router-link>
            </div>
        </div>

        <!-- 체인 핸드 -->
        <div class="Ppwrap grid" v-if="currentTab === 3">
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1504792781/62afe28f-a6b2-47c6-bda7-315030b79f24/Thumbnail_ChainHand_65ml_000.jpg"
                        alt="체인 핸드 000">
                    <p class="item-title">체인 핸드 000</p>
                    <p class="item-inf">샌달우드 | 패츌리 | 흙 내음 </p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1544597707/3d369fa8-650c-496f-b5d5-e630e59d9a0e/Thumbnail_ChainHand_65ml_7.jpg"
                        alt="체인 핸드 7">
                    <p class="item-title">체인 핸드 7</p>
                    <p class="item-inf">로즈우드 | 코코넛 향 | 우아함 </p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1630632842/0a83147a-2243-4cdc-8ede-befebecb595b/Thumbnail_ChainHand_65ml_421.jpg"
                        alt="체인 핸드 421">
                    <p class="item-title">체인 핸드 421</p>
                    <p class="item-inf">바닐라 우디 | 너티함 </p>
                    <p class="price">￦ {{ price[0] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1568791598/b710d30f-2f96-4590-bae5-b8867be3a9a2/Thumbnail_ChainHand_30ml_000.jpg"
                        alt="체인 핸드 000">
                    <p class="item-title">체인 핸드 000</p>
                    <p class="item-inf">샌달우드 | 패츌리 | 흙 내음 </p>
                    <p class="price">￦ {{ price[2] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1568791887/c6338aa6-c475-41cf-92c8-8e74be1bd666/Thumbnail_ChainHand_30ml_7.jpg"
                        alt="체인 핸드 7">
                    <p class="item-title">체인 핸드 7</p>
                    <p class="item-inf">로즈우드 | 코코넛 향 | 우아함 </p>
                    <p class="price">￦ {{ price[2] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1630632738/03953e10-90fd-470d-ae3a-29663fe0801b/Thumbnail_ChainHand_30ml_421.jpg"
                        alt="체인 핸드 421">
                    <p class="item-title">체인 핸드 421</p>
                    <p class="item-inf">바닐라 우디 | 너티함 </p>
                    <p class="price">￦ {{ price[2] }}</p>
                </router-link>
            </div>
        </div>

        <!-- 튜브 핸드-->
        <div class="Ppwrap grid" v-if="currentTab === 2">
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1634090668/de705dc7-9e83-45bc-9e4b-7ecb8a658815/Thumbnail_OlfactiveHand_65ml_Cocoon.jpg"
                        alt="튜브 핸드 코쿤머스크">
                    <p class="item-title">튜브 핸드 코쿤머스크</p>
                    <p class="item-inf">본능의 향 | 고귀한 머스크 | 성스러운 나무 </p>
                    <p class="price">￦ {{ price[3] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1634090670/cfc06f6e-2a9d-4f59-918d-4207eed2a9bb/Thumbnail_OlfactiveHand_65ml_SoundNight.jpg"
                        alt="튜브 핸드 사운즈오브나잇">
                    <p class="item-title">튜브 핸드 사운즈오브나잇</p>
                    <p class="item-inf">씁쓸한 프루티함 | 바람에 흔들리는 꽃의 향 | 고요함 </p>
                    <p class="price">￦ {{ price[3] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1634090669/df0ebaff-9022-49c3-82d5-2145a744c2cf/Thumbnail_OlfactiveHand_65ml_Mulberry.jpg"
                        alt="튜브 핸드 멀버리리브즈">
                    <p class="item-title">튜브 핸드 멀버리리브즈</p>
                    <p class="item-inf">회귀의 향 | 나무껍질의 눈물 | 내적 평온 </p>
                    <p class="price">￦ {{ price[3] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1634090672/7a4ae364-8ad4-42d7-8ada-4f7b58e95990/Thumbnail_OlfactiveHand_65ml_Fey9.jpg"
                        alt="튜브 핸드 페이구">
                    <p class="item-title">튜브 핸드 페이구</p>
                    <p class="item-inf">무화과나무 | 엠브레트 씨앗 | 달콤 씁쓸한 </p>
                    <p class="price">￦ {{ price[3] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1634090673/11890891-f569-4c01-b787-55fede3ca15c/Thumbnail_OlfactiveHand_65ml_Vein.jpg"
                        alt="튜브 핸드 베인">
                    <p class="item-title">튜브 핸드 베인</p>
                    <p class="item-inf">월계수 잎 | 은방울꽃 | 정돈된 가죽 </p>
                    <p class="price">￦ {{ price[3] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1634090671/a95851ea-26dc-4d44-b8ca-d213a542d372/Thumbnail_OlfactiveHand_65ml_000.jpg"
                        alt="튜브 핸드 000">
                    <p class="item-title">튜브 핸드 000</p>
                    <p class="item-inf">샌달우드 | 패츌리 | 흙 내음 </p>
                    <p class="price">￦ {{ price[3] }}</p>
                </router-link>
            </div>
        </div>

        <!-- 퍼퓸 비누-->
        <div class="Ppwrap grid" v-if="currentTab === 4">
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1680768216/18552ee1-ef38-4489-bf05-61022c7a98fc/Thumbnail_PerfumeSoap_Tray_Chamo.jpg"
                        alt="퍼퓸 비누 카모 트레이 세트">
                    <p class="item-title">퍼퓸 비누 카모 트레이 세트</p>
                    <p class="item-inf">진득한 카모마일 | 부드러운 나무결 | 머스크 </p>
                    <p class="price">￦ {{ price[4] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1680768213/6b6c563e-c44d-4468-a7ba-ef63daa20251/Thumbnail_PerfumeSoap_Tray_BergaSandal.jpg"
                        alt="퍼퓸 비누 버가샌달 트레이 세트">
                    <p class="item-title">퍼퓸 비누 버가샌달 트레이 세트</p>
                    <p class="item-inf">지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드 </p>
                    <p class="price">￦ {{ price[4] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1680768202/4b81f14e-a7f6-4957-8618-8e885a47e1b6/Thumbnail_PerfumeSoap_Tray_Lale.jpg"
                        alt="퍼퓸 비누 라레 트레이 세트">
                    <p class="item-title">퍼퓸 비누 라레 트레이 세트</p>
                    <p class="item-inf">이슬을 머금은 풋사과 | 화이트 튤립 | 샌달 우드 </p>
                    <p class="price">￦ {{ price[4] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1680768207/3a2bfdf4-f16f-4e9f-b512-b97fa0b012e3/Thumbnail_PerfumeSoap_Tray_WhiteDarjeeling.jpg"
                        alt="퍼퓸 비누 화이트다즐링 트레이 세트">
                    <p class="item-title">퍼퓸 비누 화이트다즐링 트레이 세트</p>
                    <p class="item-inf">화이트 샴페인 | 다즐링 티 | 크리미한 머스크 </p>
                    <p class="price">￦ {{ price[4] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1680768290/ac48bcb2-9b84-4960-a65d-ea79619b7bc1/Thumbnail_PerfumeSoap_Shell_Vein.jpg"
                        alt="퍼퓸 비누&쉘">
                    <p class="item-title">퍼퓸 비누&쉘</p>
                    <p class="item-inf">CHAMO+VEIN </p>
                    <p class="price">￦ {{ price[5] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1680768295/69b5f093-af37-492c-8130-062bfbb7c800/Thumbnail_PerfumeSoap_Shell_Fey9.jpg"
                        alt="퍼퓸 비누&쉘">
                    <p class="item-title">퍼퓸 비누&쉘</p>
                    <p class="item-inf">CHAMO+FEY9 </p>
                    <p class="price">￦ {{ price[5] }}</p>
                </router-link>
            </div>
        </div>

        <!-- 손 소독제-->
        <div class="Ppwrap grid" v-if="currentTab === 5">
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1571975478/e8ed5e57-78e6-45b0-b0bd-05497bb13c9b/Thumbnail_sani_30ml_000.jpg"
                        alt="손 소독제 000">
                    <p class="item-title">손 소독제 000</p>
                    <p class="item-inf">샌달우드 | 패츌리 | 흙 내음 </p>
                    <p class="price">￦ {{ price[6] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1645057889/a0b7d643-28af-44a8-88e9-12fba6722ff0/Thumbnail_sani_30ml_fey9.jpg"
                        alt="손 소독제 페이구">
                    <p class="item-title">손 소독제 페이구</p>
                    <p class="item-inf">무화과나무 | 엠브레트 씨앗 | 달콤 씁쓸한 </p>
                    <p class="price">￦ {{ price[6] }}</p>
                </router-link>
            </div>
            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1608604841/3f5311b6-9cdb-4ba0-99f3-106870e4c3e6/Thumbnail_sani_30ml_7.jpg"
                        alt="손 소독제 7">
                    <p class="item-title">손 소독제 7</p>
                    <p class="item-inf">로드우드 | 코코넛 향 | 우아함 </p>
                    <p class="price">￦ {{ price[6] }}</p>
                </router-link>
            </div>

            <div class="p-p-item">
                <v-btn class="ProductListItem" icon="mdi-cart-outline"></v-btn>
                <router-link to="#" class="b-item">
                    <img src="https://web-resource.tamburins.com/catalog/product/1645059192/e8f95cdd-3e98-4d45-ab4d-4fbf7df0f0a4/Thumbnail_sani_30ml_trio.jpg"
                        alt="손 소독제 트리오">
                    <p class="item-title">손 소독제 트리오</p>
                    <p class="item-inf">000+7+FEY9 </p>
                    <p class="price">￦ {{ price[4] }}</p>
                </router-link>
            </div>
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

.ProductListItem {
position: absolute;
    right: 10px;
    top: 10px;
    padding: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    background: rgba(0,0,0,.4);
    border-radius: 50%;
    height: calc(var(--v-btn-height) + 12px);
}

.Pchip button {
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
    text-decoration: none;
}

.item-title-p {
    font-size: 16px;
    padding: 15px 0 10px 20px;
    text-decoration: none;
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

/* 더보기 */

.plus {
    width: 100%;
    margin: 0 auto;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 50px 0 50px 0;
}

.plustab {
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;

}

.plus-item {
    width: 15%;
    margin: 20px 10px 80px 20px;
    border-radius: 5px;
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
        width: 190px;
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

    .item-title-p {
        font-size: 11px;
        padding: 5px 0 10px 10px;
        text-decoration: none;
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

    .plus-item {
        width: 20%;
        margin: 10px 10px 80px 20px;
        border-radius: 5px;
    }

    .plusbtn {
        font-size: 12px;
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
    name: "Tab",
    data() {
        return {
            currentTab: 0,
            tabList: [
                { name: "쉘 퍼퓸 핸드" },
                { name: "에그 립밤" },
                { name: "튜브 핸드" },
                { name: "체인 핸드" },
                { name: "퍼퓸 비누" },
                { name: "손 소독제" }
            ],
            price: ["32,000", "28,900", "23,000", "25,000", "43,500","26,500","8,500","24,500"],
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


