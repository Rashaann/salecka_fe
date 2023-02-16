import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        user: {},
        article: {},
        favs: [],
        cart: [],
        searchKey: '',
        isConnected: false,
    }
}

export const saleckaSlice = createSlice({
    name: 'salecka',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            state.value.user = action.payload;
            state.value.isConnected = true;
        },
        addDataArticle: (state, action) => {
            state.value.article = action.payload;
        },
        addFavsData: (state, action) => {
            state.value.favs.push(action.payload);
        },
        removeFavsData: (state, action) => {
            state.value.favs = state.value.favs.filter(el => el.token !== action.payload.token);
        },
        addCartsData: (state, action) => {
            if(state.value.cart.some(el => el.article.token === action.payload.article.token)){
                state.value.cart = state.value.cart.map(e => {
                    if(e.article.token === action.payload.article.token){
                        if(action.payload.quantity>0){
                            return {article: e.article, quantity: e.quantity+1};
                        } else {
                            return {article: e.article, quantity: e.quantity-1};
                        }
                    } else {
                        return {article: e.article, quantity: e.quantity};
                    }
                });
            } else {
                state.value.cart.push(action.payload);
            }
        },
        removeCartsData: (state, action) => {
            state.value.cart = state.value.cart.filter(el => el.article.token !== action.payload.article.token);
        },
        searchArticle: (state, action) => {
            state.value.searchKey = action.payload;
        },
        logout: (state) => {
            state.value.user = {};
            state.value.article = {};
            state.value.favs = [];
            state.value.cart = [];
            state.value.isConnected = false;
        }
    },
});

export const {
    addUserData,
    addDataArticle,
    addFavsData,
    removeFavsData,
    addCartsData,
    removeCartsData,
    searchArticle,
    logout
    } = saleckaSlice.actions;
export default saleckaSlice.reducer;