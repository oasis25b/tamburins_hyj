User
<template>
    <div class="" style="padding-top: 60px;"></div>
    <div class="cart-container">
        <h2>쇼핑백</h2>
        <ul class="cart-items">
            <li v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
                <div class="item-info">
                    <span class="item-number">{{ index + 1 }} </span>
                    <img :src="item.img" alt="Product Image" class="item-image">
                    <div class="item-details">
                        <span class="item-name">{{ item.name }}</span>
                        <span class="item-price"> {{ item.price }}</span>
                    </div>
                    <div v-if="item.free == false" class="item-quantity">
                        <button @click="decreaseQuantity(item)" class="quantity-button">-</button>
                        <input type="number" v-model.number="item.quantity" min="1" class="quantity-input">
                        <button @click="increaseQuantity(item)" class="quantity-button">+</button>
                    </div>

                    <div v-if="item.free" class="item-quantity">
                        무료증정
                    </div>

                    <div class="item-total" v-if="item.free == false">
                        {{ item.price * item.quantity }}원
                    </div>
                    <v-btn @click="removeFromCart(item.id)" class="remove-button" icon="mdi-delete-outline"></v-btn>
                </div>
            </li>
        </ul>
        <div class="total">총 주문금액 ￦ {{ getTotalPrice() }}원</div>
        <div class="class">
            <button type="submit" class="paybtn">결제하기</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            free: false
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters.cartItems;
        }
    },
    created() {
        // 장바구니에 기본적으로 있는 상품 목록
        const defaultProducts = [
            {
                id: 'freeC',
                name: '에그 캔들',
                img: "https://web-resource.tamburins.com/item/1700208292_GWP(CART)_eggcandle.jpg",
                price: 0,
                free: true,
                quantity: 1

            },
            {
                id: 'freeR',
                name: '핑크리본 미니 케이스',
                img: "https://tamburins-resource.s3.ap-northeast-2.amazonaws.com/promotion/PerfumeBalmMiniCase/691613d7-029e-44c5-9ebf-6ccc4105829f/GWP(CART)_PerfumeBalmMiniCase.jpg",
                price: 0,
                free: true,
                quantity: 1
            }
        ];
        // 각 상품을 장바구니에 추가합니다.
        defaultProducts.forEach(product => {
            // 장바구니에 이미 해당 상품이 있는지 확인합니다.
            const existingProductIndex = this.cartItems.findIndex(item => item.id === product.id);
            if (existingProductIndex === -1) {
                // 장바구니에 해당 상품이 없으면 추가합니다.
                this.$store.dispatch('addToCart', product);
            } else {
                // 장바구니에 이미 해당 상품이 있으면 수량만 증가시킵니다.
                const existingProduct = this.cartItems[existingProductIndex];
                existingProduct.quantity += product.quantity;
                this.$store.commit('updateQuantity', existingProduct);
            }
        });
    },
    methods: {
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
                this.$store.commit('updateQuantity', item);
            }
        },
        increaseQuantity(item) {
            item.quantity++;
            this.$store.commit('updateQuantity', item);
        },
        updateQuantity(item) {
            this.$store.commit('updateQuantity', item);
        },
        getTotalPrice() {
            return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString();
        },

        removeFromCart(id) {
            this.$store.dispatch('removeFromCart', id);
        }
    }
}
</script>

<style scoped>
.paybtn {
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #1d1d1d;
    background-color: #1d1d1d;
    color: #fff;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    position: relative;
    left: 300px;
}

input {
    width: 50px;
    text-align: center;
}

.quantity-button {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    background-color: #eee;
    font-size: 18px;
    color: #333;
}

.cart-container {
    margin: 0 auto;
    padding: 10px;
    width: 1100px;
}

h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.cart-items {
    list-style-type: none;
    padding: 0;
}

.cart-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.item-info {
    display: flex;
    align-items: center;
    padding: 20px 10px 0 10px;
    text-align: center;
}

.item-number {
    font-size: 18px;
    margin-right: 30px;
    padding: 10px;
    border: 1px solid #888;
}

.item-image {
    width: 200px;
    height: 200px;
    margin-right: 10px;
}

.item-details {
    flex-grow: 1;
    width: 400px;
}

.item-name {
    font-size: 13px;
    padding-right: 30px;
}

.item-price {
    font-size: 13px;
    color: #858585;
}

.item-quantity {
    margin-right: 10px;
}

.item-total {
    margin-right: 10px;
    font-size: 13px;
}

.total {
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: end;
    padding: 0 0 30px;
}

@media (max-width: 768px) {

    .cart-container {
        width: 100%;
    }

    .item-info {
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .item-image {
        width: 170px;
        height: 170px;
        margin-right: 10px;
    }

    .paybtn {
        width: 100%;
        left: 0;
    }
}
</style>