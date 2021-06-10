import { object } from 'prop-types';

// const socket = io('http://localhost:8010');
const initialState = {
  headers: [
    { id: 0, name: 'Наименование' },
    { id: 1, name: 'Колличесво' },
    { id: 2, name: 'Цена' },
    { id: 3, name: 'Общая цена' },
  ],
  products: [],
};

export default function productTable(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_TABLE':
      let products = action.payload;

      return { ...state, products: [...products] };

    case 'EDIT_AMOUNT':
      products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          item.amount = action.payload.value;
        }

        return item;
      });

      return { ...state, products: [...products] };

    case 'EDIT_PRICE':
      products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          item.priceForOne = action.payload.value;
        }

        return item;
      });

      return { ...state, products: [...products] };

    default:
      return state;
  }
}
