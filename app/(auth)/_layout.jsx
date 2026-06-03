import getAuthStatus from '@/utils/getAuthStatus';
import { Redirect, Slot } from 'expo-router';

export default function AuthLayout() {
  const isAuthenticated = getAuthStatus();

  // Se já estiver logado, redireciona para a área principal
  if (isAuthenticated === true) return <Redirect href="/(tabs)" />;

  return <Slot />;
}
