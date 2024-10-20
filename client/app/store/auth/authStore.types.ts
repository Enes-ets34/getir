interface User {
    id: string;
    name: string;
    email: string;
  }
  
  interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
  }
  