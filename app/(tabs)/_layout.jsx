import getAuthStatus from '@/utils/getAuthStatus';
import { MaterialIcons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';

export default function TabsLayout() {
  const isAuthenticated = getAuthStatus()

  if (isAuthenticated !== true) return <Redirect href="/login" />;

  return (
	<Tabs
		screenOptions={{
			headerShown: false,
			tabBarActiveTintColor: '#35609b',
		}}
	>
		<Tabs.Screen 
			name='index'
			options={{
				title: 'Início',
				tabBarIcon: ({color}) => <MaterialIcons size={28} name='home' color={color} />,
			}}
		/>
		<Tabs.Screen 
			name='pagamentos'
			options={{
				title: 'Pagamentos',
				tabBarIcon: ({color}) => <MaterialIcons size={28} name='attach-money' color={color} />, 
			}}
		/>
		<Tabs.Screen 
			name='usuario'
			options={{
				title: 'Usuário',
				tabBarIcon: ({color}) => <MaterialIcons size={28} name='person' color={color} />,
			}}
		/>
		<Tabs.Screen 
			name='outros'
			options={{
				title: 'Outros',
				tabBarIcon: ({color}) => <MaterialIcons size={28} name='view-list' color={color} />,
			}}
		/>
	</Tabs>
  );
}

