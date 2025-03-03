import { create } from "zustand";
import { persist , createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist((set) => ({
    userAvatar: null,
    userName: null,
    setAvatar: (avatar) => set({ userAvatar: avatar }),
    setName: (name) => set({ userName: name }),
  })
  ,{
    name: "user-storage",
    getStorage: () => createJSONStorage(),
  })
);
