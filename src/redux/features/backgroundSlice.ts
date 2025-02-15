import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import theme from '@theme/index';

interface IBackgroundSlice {
  gradientColors: string[];
  color: string;
}

const initialState: IBackgroundSlice = {
  gradientColors: theme.colors.gradientTertiaty,
  color: theme.colors.primary,
};

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setGradientColors: (state, action: PayloadAction<string[]>) => {
      state.gradientColors = action.payload;
    },
    setColors: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setGradientColors, setColors } = backgroundSlice.actions;
export default backgroundSlice.reducer;
