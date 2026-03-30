import api from './api';
import { MenuCategory, MenuItem } from '@/types/session';

interface FullMenuResponse {
  categories: MenuCategory[];
  items: MenuItem[];
}

export const menuService = {
  getFullMenu: async (token: string, lang?: string): Promise<FullMenuResponse> => {
    const res = await api.get(`/sessions/${token}/menu`, {
      params: { lang }
    });
    // Assuming the API returns it wrapped in data.categories and data.items
    return {
      categories: res.data.data?.categories || [],
      items: res.data.data?.items || []
    };
  },

  getCategories: async (token: string, lang?: string): Promise<MenuCategory[]> => {
    const res = await api.get(`/sessions/${token}/menu/categories`, {
      params: { lang }
    });
    return res.data.data || [];
  },

  getItemDetails: async (token: string, itemId: string, lang?: string): Promise<MenuItem> => {
    const res = await api.get(`/sessions/${token}/menu/items/${itemId}`, {
      params: { lang }
    });
    return res.data.data;
  }
};
