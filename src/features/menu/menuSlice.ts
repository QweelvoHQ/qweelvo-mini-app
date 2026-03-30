import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuCategory, MenuItem } from '@/types/session';

interface FullMenuPayload {
  categories: MenuCategory[];
  items: MenuItem[];
}

interface MenuState {
  categories: MenuCategory[];
  products: MenuItem[];
  activeCategory: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  categories: [],
  products: [],
  activeCategory: null,
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<FullMenuPayload>) {
      state.categories = action.payload.categories;
      state.products = action.payload.items;
      if (action.payload.categories.length > 0 && !state.activeCategory) {
        state.activeCategory = action.payload.categories[0].id;
      }
      state.isLoading = false;
      state.error = null;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setMenuLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setMenuError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    }
  },
});

export const { setMenu, setActiveCategory, setMenuLoading, setMenuError } = menuSlice.actions;

export default menuSlice.reducer;
