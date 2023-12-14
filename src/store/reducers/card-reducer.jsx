import { ADD, DELETE, UPDATE } from "../actions/card-actions";


export const cardReducer = (
  state = [
    {
      id: 1,
      title: 'Card title1',
      details: 'Some quick example text to build on the card11',
      img: "https://petapixel.com/assets/uploads/2011/11/polaroid_mini.jpg"
    },
    {
      id: 2,
      title: 'Card title2',
      details: 'Some quick example text to build on the card222',
      img: 'https://egyptlaptop.com/images/watermarked/1/thumbnails/800/655/detailed/52/%E2%80%8BHP_581.webp',
    },
  ], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((card, index) => index !== action.payload - 1);
    case UPDATE:
      let index = state.findIndex((card) => card.id === action.payload.id);
      state[index] = action.payload;
      return state;
    default:
      return state;

  }
}