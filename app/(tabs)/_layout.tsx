import { Tabs, Redirect } from 'expo-router';
// import { useAuth } from '@/hooks/useAuth';

export default function TabsLayout() {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = false;

  if (!isAuthenticated) return <Redirect href="/login" />;

  return <Tabs />;
}

