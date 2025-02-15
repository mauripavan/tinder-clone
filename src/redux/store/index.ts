import { configureStore } from '@reduxjs/toolkit';

import backgroundReducer from '../features/backgroundSlice';
import cardsReducer from '../features/cardsSlice';

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
