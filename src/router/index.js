import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import AddedProductList from "@/components/AddedProductList.vue"

import Perfume from "@/components/Perfume.vue";
import PerfumeBalm from "@/components/PerfumeBalm.vue";
import PBK from "@/components/PBK.vue";
import EPK from '@/components/EPK.vue';
import HandAndLip from "@/components/HandAndLip.vue";

import ShoweryBody from "@/components/ShoweryBody.vue";
import PerfumedHand from "@/components/PerfumedHand.vue"
import HomeFragrance from "@/components/HomeFragrance.vue";

import StoreKorea from '@/components/StoreKorea.vue';
import Signin from "@/components/Signin.vue";
import RegisterCompleted from '@/components/RegisterCompleted.vue';
import Modal from "@/components/Modal.vue"


const routes = [
  { path: '/', component: HelloWorld},
  { path: "/header", component: Header},
  { path: "/footer", component: Footer},
  { path: "/cart", component: AddedProductList},

  { path: "/perfume", component: Perfume },
  { path: "/perfume-balm", component: PerfumeBalm },
  { path: "/p-b-k", component: PBK },
  { path: "/e-p-k", component: EPK },
  
  { path: "/hand-and-lip", component: HandAndLip },
  { path: "/showery-body", component: ShoweryBody },
  { path: "/perfumed-hand", component: PerfumedHand},
  { path: "/home-fragrance", component: HomeFragrance },
  
  { path: "/store", component: StoreKorea },
  { path: "/signin", component: Signin},
  { path: "/register-completed", component: RegisterCompleted},

  { path: "/modal", component: Modal},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
