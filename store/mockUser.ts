import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  user?: string;
};

type Actions = {
  loggedUser: (user: string) => void;
  disconnectUser: () => void;
};

type Store = State & Actions;

export const useMockedUserStore = create<Store>()(
  persist(
    (set) => ({
      user: undefined,
      loggedUser: (user) => set(() => ({ user: user })),
      disconnectUser: () => set(() => ({ user: undefined })),
    }),
    {
      name: "mockedUser",
    }
  )
);
