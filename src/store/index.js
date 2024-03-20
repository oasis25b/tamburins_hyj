import { createStore } from 'vuex'

export default createStore({
    state: {
        cartItems: [], // 장바구니 항목을 저장할 배열
        notification: null // 알림 상태 추가
      },
      mutations: {
        addToCart(state, product) {
          state.cartItems.push(product);
          state.notification = '상품이 쇼핑백에 추가되었습니다!'; 
          // 알림 메세지 설정
    },
    clearNotification(state) {
        state.notification = null;
    },
        updateQuantity(state, payload) {
          const { id, quantity } = payload;
          const item = state.cartItems.find(item => item.id === id);
          if (item) {
            item.quantity = quantity;
          }
        },
        removeFromCart(state, id) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
      },
      actions: {
        addToCart({ commit }, product) {
          commit('addToCart', product);
          setTimeout(() => {
            commit('clearNotification');
        }, 3000); // 3초 후 알림 자동으로 사라지도록 설정
        },
        updateQuantity({ commit }, payload) {
          commit('updateQuantity', payload);
        },
        removeFromCart({ commit }, id) {
          commit('removeFromCart', id);
        }
      },
      getters: {
        cartItems: state => state.cartItems,
        notification: state => state.notification // 알림 상태 getter 추가
      }

    });