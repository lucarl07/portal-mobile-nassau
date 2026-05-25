import { Tabs, Redirect } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function TabsLayout() {
  const isAuthenticated = SecureStore.getItem("is_user_logged");

  if (isAuthenticated != "true") return <Redirect href="/login" />;

  return <Tabs />;
}

