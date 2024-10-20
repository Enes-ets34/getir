import { create } from "zustand";
import { LoadingState } from "./loadingStore.types";

export const useLoadingStore = create<LoadingState>((set) => ({
    isLoading: false,
    showLoading: () => set({ isLoading: true }),
    hideLoading: () => set({ isLoading: false }),
  }));