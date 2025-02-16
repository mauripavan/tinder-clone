import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import theme from '@theme/index';

interface IBackgroundSlice {
  gradientColors: string[];
  color: string;
  isGradient: boolean;
}

const initialState: IBackgroundSlice = {
  gradientColors: theme.colors.gradientTertiaty,
  color: theme.colors.primary,
  isGradient: true,
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
    setIsGradient: (state, action: PayloadAction<boolean>) => {
      state.isGradient = action.payload;
    },
  },
});

export const { setGradientColors, setColors, setIsGradient } =
  backgroundSlice.actions;
export default backgroundSlice.reducer;
