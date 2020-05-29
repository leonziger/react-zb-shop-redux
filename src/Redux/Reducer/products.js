import { SELECT_PRODUCT } from '../Actions/products';

const initialState = {
  data: [
    {
      id: 123,
      name: "Шарик",
      image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
      price: 20
    },
    {
      id: 234,
      name: "Футболка",
      image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
      price: 50
    },
    {
      id: 345,
      name: "Сердце",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
      price: 30
    }
  ],
  selectedProduct: null
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      return {
        ...state,
        selectedProduct: action.product
      }
    }
    default: {
      return state;
    }
  }
};