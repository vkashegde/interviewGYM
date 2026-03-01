import { create } from 'zustand';

interface AppState {
  // Add your state properties here
  // Example:
  // user: User | null;
  // interviews: Interview[];
}

interface AppActions {
  // Add your actions here
  // Example:
  // setUser: (user: User) => void;
  // addInterview: (interview: Interview) => void;
}

type AppStore = AppState & AppActions;

export const useAppStore = create<AppStore>((set) => ({
  // Initial state
  // Example:
  // user: null,
  // interviews: [],

  // Actions
  // Example:
  // setUser: (user) => set({ user }),
  // addInterview: (interview) => set((state) => ({ 
  //   interviews: [...state.interviews, interview] 
  // })),
}));
