import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

//api call does not always return data, sometimes it return some error too so we accepting data inside an object 
const initialState = {
    data:[],
    status: 'idle'
};
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        // fetchProducts(state,action){
        //     state.data = action.payload
        // }
    },
    // in api calls we have 3 cases, resolve,reject, pending
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(getProducts.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = 'idle'
        })
    }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async ()=> {
        const data = await fetch('https://fakestoreapi.com/products');
        const result = await data.json();
        return result;
})


// export function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch('https://fakestoreapi.com/products');
//         const result = await data.json();
//         // console.log(result);
//         //instead of calling ddispacth from component now we are calling ddispacth from thunk action creator(middleware)
//         dispatch(fetchProducts(result));
//     }
// }

