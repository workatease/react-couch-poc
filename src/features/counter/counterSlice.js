import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data: [],
  },
  reducers: {
    getTable: (state, action) => {
      state.data = action.payload;     
    },

  },
});

export const { getTable } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const incrementByAmount = (action) => dispatch => {
  axios.put('/api/add', action)
    .then(function (respone) {
      console.log(respone);
      dispatch(getList());
    });
};

export const getList = () => dispatch => {
  axios.get('/api/getList')
    .then(function (response) {
      // handle success
      dispatch(getTable(response.data));
      
    });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export const data = state => state.counter.data;


export default counterSlice.reducer;
