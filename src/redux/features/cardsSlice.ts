import {
  MOCKED_FRIENDSHIP_CARDS_DATA,
  MOCKED_RELATIONSHIP_CARDS_DATA,
  MOCKED_DATE_CARDS_DATA,
} from '@constants/data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '@components/Card/types';

interface ICardSlice {
  group: IGroup[];
  index: number;
}

interface IGroup {
  id: number;
  name: string;
  data: ICard[];
}

interface IUpdateCardsPayload {
  group: number;
}

const initialState: ICardSlice = {
  group: [
    {
      id: 0,
      name: 'Amistad',
      data: MOCKED_FRIENDSHIP_CARDS_DATA,
    },
    {
      id: 1,
      name: 'Cita',
      data: MOCKED_DATE_CARDS_DATA,
    },
    {
      id: 2,
      name: 'Relacion',
      data: MOCKED_RELATIONSHIP_CARDS_DATA,
    },
  ],
  index: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateCards: (state, action: PayloadAction<IUpdateCardsPayload>) => {
      const { group } = action.payload;
      const groupIndex = state.group.findIndex((g) => g.id === group);

      if (groupIndex !== -1 && state.group[groupIndex].data.length > 0) {
        state.group[groupIndex].data = state.group[groupIndex].data.slice(
          0,
          -1,
        );
      }
    },
    resetCards: (state) => {
      state.group = initialState.group;
    },
    setIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { updateCards, resetCards, setIndex } = cardsSlice.actions;
export default cardsSlice.reducer;
