<template>
        <v-app-bar app :elevation="0">
            <v-toolbar-title class="title">
                <router-link to="/" style="text-decoration: none;font-size: 28px;">TAMBURINS</router-link>
            </v-toolbar-title>
            <div class="top-menu">
                <v-btn to="/perfume" variant="plain">PERFUME</v-btn>
                <v-btn to="/hand-and-lip" variant="plain">HAND&LIP</v-btn>
                <v-btn to="/showery-body" variant="plain">BODY</v-btn>
                <v-btn to="/home-fragrance" variant="plain">HOME FRAGRANCE</v-btn>
                <v-btn to="/store" variant="plain">STORE</v-btn>
            </div>
            <div class="rightbtn">
                <div class="rightbtnbox">
                    <v-btn to="" icon="mdi-magnify" class="hide"></v-btn>
                    <input type="text" placeholder="'퍼퓸 밤'을 검색해보세요" class="searchbox"
                    @click="tabopen">
                </div>

                <v-btn to="/signin" icon="mdi-account-outline" class="loginbtn"></v-btn>
                <v-btn to="/cart" icon="mdi-cart-outline"></v-btn>
                <v-btn to="" icon="mdi-magnify" class="search-btn"></v-btn>
            </div>
            <v-app-bar-nav-icon @click="toggleDrawer" class="toggle-btn"></v-app-bar-nav-icon>
        </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" width="500">
        <v-list>
            <v-list-item to="/perfume" @click="toggleDrawer">
                PERFUME
            </v-list-item>

            <v-list-item to="/hand-and-lip" @click="toggleDrawer">HAND&LIP</v-list-item>
            <v-list-item to="/showery-body" @click="toggleDrawer">BODY</v-list-item>
            <v-list-item to="/home-fragrance" @click="toggleDrawer">HOME FRAGRANCE</v-list-item>
            <br><br>
            <hr><br>

            <v-list-item to="/signin" @click="toggleDrawer">로그인</v-list-item>
            <v-list-item to="/store" @click="toggleDrawer">매장보기</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>

/* .v-app-bar.v-toolbar {
    background-color: transparent;
} */

.top-menu {
    display: flex;
    position: absolute;
    left: 180px;
}
.a.router-link {
    text-decoration: none;
}

.rightbtn {
    display: flex;
}

.v-btn__content {
    font-size: 18px;
}

.rightbtn {
    gap: 5px;
    padding-right: 10px;
    display: flex;
}

.transparent-bar {
    background-color: transparent;
    box-shadow: none;
}

.title {
    list-style: none;
    font-weight: bold;
}

.search {
    width: 280px;
    border: 1px solid black;
    border-radius: 5px;
    height: 50px;
}

.search-btn {
    display: none;
}

.searchbox {
    font-size: 13px;
    width: 220px;
    height: 40px;
}

.toggle-btn {
    display: none;
}

.v-navigation-drawer {
    display: none;
}

/* 모달창 */
.search-tab {
    width: 50%;
    height: 100%;
    height: -webkit-fill-available;
    justify-content: right;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: black;
    z-index: 1050;
}

.search-tab-inner {
    width: 1.56vw 6.77vw 2.864vw;
    height: 100%;
    min-height: 1080px;
    gap: max(30px, min(30px, 6.458vw));
    justify-content: space-between;
}

@media only screen and (max-width: 1280px){
    .searchbox {
        display: none;
    }

    .hide {
        display: none;
    }

}

@media (max-width: 1023px) {
    .top-menu {
        display: none;
    }

    .title::after {
        content: none;
    }

    .toggle-btn {
        display: block;
    }

    .v-navigation-drawer {
        display: block;
    }

    .loginbtn {
        display: none;
    }

    .rightbtn {
        padding: 0px;
    }

    .search {
        display: none;
    }

    .searchbox {
        display: none;
    }

    .search-btn {
        display: flex;
    }
}


@media (max-width:723px) {
    .searchbox {
        display: none
    }
};
</style>

<script>
export default {
    data() {
        return {
            drawer: false,
            tab: false
        };
    },
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer;
        },
        tabopen() {
            this.tab = !this.tab;
        }
    }
};
</script>