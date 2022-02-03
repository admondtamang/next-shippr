import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleProduct, getProductVariations } from "../../api/products";

// export const getSearchData = createAsyncThunk("search/getSearchData", async () => {
//     const response = await getHomePageData();

//     return response.data;
// });

export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id, { dispatch }) => {
    const res = await getSingleProduct(id);
    if (res[0].variations.length !== 0) dispatch(fetchProductVariations(id));
    return res;
});

export const fetchProductVariations = createAsyncThunk("product/fetchProductVariation", async (id) => {
    const res = await getProductVariations(id);
    return res;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: {},
        status: null,
        productVariations: {
            data: {},
            status: null,
        },
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchProduct.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = "success";
        },
        [fetchProduct.rejected]: (state, action) => {
            state.status = "failed";
        },
        [fetchProductVariations.pending]: (state, action) => {
            state.productVariations.status = "loading";
        },
        [fetchProductVariations.fulfilled]: (state, { payload }) => {
            state.productVariations.data = payload;
            state.productVariations.status = "success";
        },
        [fetchProductVariations.rejected]: (state, action) => {
            state.productVariations.status = "failed";
        },
    },
});

export default productSlice.reducer;
