// import axios from "axios";
import fakestoreapi from '../../apis/fakeStoreapi'
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakestoreapi.get('/products');
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data
    })
}
  
export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({
      type: ActionTypes.SELECTED_PRODUCT,
      payload: response.data
    })
  }
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const signupUser = (data) =>  async (dispatch) =>{
    const result = await fakestoreapi.post('/register', data={username:"helower",email:"hell@gmail.com",password:"hello33232"});
    
  console.log("result data inside",result)
    dispatch({
      type: ActionTypes.SIGNUP_USER,
      payload: result.data
    })
    
  
};

export const loginUser = () => {
  return async function (dispatch) {
    const response = await fakestoreapi.post('/login');
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: response.data
    })
  }
}