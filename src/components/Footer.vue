<template>
    <footer>
        <div class="footer-category flex">
            <div class="footer-section">
                <router-link to="/store">
                <button class="footer-section-title">
                    매장안내</button> </router-link>
                <div class="footer-section-content">
                    <ul>
                        <li class=""><a href="">대한민국</a></li>
                        <li class=""><a href="">중국</a></li>
                        <li class=""><a href="">전시</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-section--1">
                <button class="footer-section-title">고객서비스</button>
                <div class="footer-section-content">
                    <ul>
                        <li><a href="">비회원 주문 조회</a></li>
                        <li><a href="">교환 및 반품</a></li>
                        <li><a href="">자주 묻는 질문</a></li>
                        <li><a href="">1:1 문의하기</a></li>
                        <li><a href="">기업 구매 문의</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-section--1">
                <button class="footer-section-title">법적고지</button>
                <div class="footer-section-content">
                    <ul>
                        <li><a href="">공지사항</a></li>
                        <li><a href="">이용 약관</a></li>
                        <li><a href=""><span style="font-weight: bold;">개인정보처리방침</span></a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-section--1">
                <button class="footer-section-title">소셜미디어</button>
                <div class="footer-section-content">
                    <ul>
                        <li><a href="">인스타그램</a></li>
                        <li><a href="">카카오톡</a></li>
                        <li><a href="">페이스북</a></li>
                        <li><a href="">웨이보</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-company-inf">
            <div class="footer-container-1">
                주)아이아이컴바인드 | 사업자등록번호: 119-86-38589 | 대표자: 김한국
                | 서울특별시 마포구 어울마당로5길 41 | 대표번호: 1644-1246 |
                이메일:cs@tamburins.com | 개인정보 보호 책임자: 정태호 |
                호스팅 서비스 사업자: Aws | 통신판매업신고: 제 2014-서울마포-1050 호
                <button>
                    <a target="_blank" class="footer-link"
                        href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1198638589">
                        사업자정보확인
                    </a></button>
            </div>

            <div class="footer-container-2">
                고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다.
                <button>
                    <span class="footer-link">서비스 가입사실 확인</span>
                </button>
            </div>
        </div>

        <div class="footer-bottom flex">
            <div class="footer-copyright">
                © Tamburins
            </div>
            <span>SHOP IN KOREAN</span>
        </div>
    </footer>
</template>

<style scoped>
button {
    cursor: pointer;
}

.flex {
    display: flex;
}

.footer-category {
    padding: 60px 60px;
    border-top: 1px solid rgb(240, 240, 240);
    border-bottom: 1px solid rgb(240, 240, 240);
}
.footer-section {
    width: 190px;
}

.footer-section--1 {
    width: 240px;
}

.footer-section-content {
    line-height: normal;
}

.footer-section-title {
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
    text-align: left;
}

ul {
    margin-top: 53px;
}

li:first-child {
    padding-top: 0;
}

li {
    padding-top: 30px;
    font-size: 13px;
    font-weight: 400;
}

a {
    text-decoration: none;
}

.footer-link{
    text-decoration: underline;
}
.footer-company-inf {
    display: flex;
    padding: 30px 0;
    font-size: 11px;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    border-bottom: 1px solid rgb(240, 240, 240);
}

.footer-container-1 {
    width: 50%;
    padding: 0 60px
}

.footer-container-2 {
    width: 50%;
    padding: 0 60px;
    height: fit-content;
    text-align: right;
}

.footer-bottom {
    padding: 16px 0 15px;
    justify-content: space-between;
}

.footer-copyright {
    padding: 0 60px;
    font-size: 13px;
    font-weight: 600;
}

.footer-bottom span {
    padding: 0 60px;
    font-size: 13px;
}
@media (max-width: 768px) {
    .footer-section-content {
        display: none;
    }

    .footer-section-title {
        font-size: 12px;
    }

    .footer-category {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px 15px;
    }
    .footer-company-inf {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
    }
    .footer-container-1 {
        width: 100%;
        font-size: 10px;
        padding: 0 15px;
        border-bottom: 1px solid rgb(240, 240, 240);
        padding-bottom: 15px;
    }

    .footer-container-2 {
        width: 100%;
        font-size: 10px;
        padding: 0 15px;
        text-align: left;
        padding-top: 15px;
    }
    .footer-copyright {
        font-size: 10px;
        padding-left: 15px;
    }
    .footer-bottom span {
        display: none;
    }
    

}</style>