export interface AuthState {
  token: {
    access: string;
    refresh: string;
  } | null;
  isAuthenticated: boolean;
}