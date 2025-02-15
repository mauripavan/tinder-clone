import { MOCKED_CARDS_DATA } from '@constants/data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '@components/Card/types';

interface ICardSlice {
  cardsData: ICard[];
}

const initialState: ICardSlice = {
  cardsData: MOCKED_CARDS_DATA,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardsData: (state, action: PayloadAction<ICard[]>) => {
      state.cardsData = action.payload;
    },
  },
});

export const { setCardsData } = cardsSlice.actions;
export default cardsSlice.reducer;
