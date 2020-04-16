import { REMOVE_FEATURE, BUY_ITEM } from "../actions/actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ITEM:
      // console.log("Buy me");
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price, // adds the price of the option chosen to the total amount
        car: {
          ...state.car,
          features: [...state.car.features, action.payload], // adds the selected feature to the added features
        },
        additionalFeatures: [
          ...state.additionalFeatures.filter(
            (item) => item.id !== action.payload.id
          ),
        ], // filter method returns all the items that are not equal to the payload id
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price, // subtracts the removed option price from the total
        car: {
          ...state.car,
          features: state.car.features.filter(
            (item) => item.id !== action.payload.id
          ),
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };
    default:
      return state;
  }
};
