import { Slot, Redirect } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function AuthLayout() {
  const isAuthenticated = SecureStore.getItem("is_user_logged");

  // Se já estiver logado, redireciona para a área principal
  if (isAuthenticated == "true") return <Redirect href="/(tabs)" />;

  return <Slot />;
}
