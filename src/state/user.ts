import { create } from "zustand";

export const useUser = create((set) => ({
    user: String || null,
    avatar: String || null,
    permissions: String || null,
    setUser: (user: string) => set({ user }),
    removeUser: () => set({ user: null }),
}));