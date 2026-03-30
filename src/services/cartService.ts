import api from './api';
import { CartItem, CartSummary } from '@/types/session';

export const cartService = {
  getCart: async (token: string): Promise<CartItem[]> => {
    const res = await api.get(`/sessions/${token}/cart`);
    return res.data.data || [];
  },

  addItemToCart: async (token: string, data: any): Promise<void> => {
    await api.post(`/sessions/${token}/cart/items`, data);
  },

  updateCartItem: async (token: string, itemId: string, data: any): Promise<void> => {
    await api.patch(`/sessions/${token}/cart/items/${itemId}`, data);
  },

  removeCartItem: async (token: string, itemId: string): Promise<void> => {
    await api.delete(`/sessions/${token}/cart/items/${itemId}`);
  },

  clearCart: async (token: string): Promise<void> => {
    await api.delete(`/sessions/${token}/cart`);
  },

  getCartSummary: async (token: string): Promise<CartSummary> => {
    const res = await api.get(`/sessions/${token}/cart/summary`);
    return res.data.data;
  },

  applyOffer: async (token: string, offerCode: string): Promise<void> => {
    await api.post(`/sessions/${token}/cart/apply-offer`, { offerCode });
  },

  removeOffer: async (token: string): Promise<void> => {
    await api.post(`/sessions/${token}/cart/remove-offer`);
  },

  validateCart: async (token: string): Promise<any> => {
    const res = await api.post(`/sessions/${token}/cart/validate`);
    return res.data;
  }
};
