// app/(auth)/_layout.tsx
import { Slot, Redirect } from 'expo-router';
// import { useAuth } from '@/hooks/useAuth';

export default function AuthLayout() {
  const isAuthenticated = false;

  // Se já estiver logado, redireciona para a área principal
  if (isAuthenticated) return <Redirect href="/(tabs)" />;

  return <Slot />;
}
