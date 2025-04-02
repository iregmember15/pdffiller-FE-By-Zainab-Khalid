export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  [key: string]: any; // Allows additional user properties if needed
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
export interface AuthResponse {
  success: boolean;
  user?: User;
  message?: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password1: string;
  password2: string;
}
