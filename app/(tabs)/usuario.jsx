import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';

import getAuthStatus from '@/utils/getAuthStatus';
import setAuthStatus from '@/utils/setAuthStatus'

export default function Usuario() {
	const onPressExit = async () => { 
		await setAuthStatus('false') 
	}

	useEffect(() => {
		const isAuthenticated = getAuthStatus()

		if (!isAuthenticated) {
			router.replace('/login')
		}
	}, [])

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView style={styles.container}>	
				
				<View style={styles.title}>
					<Image source={require('@/assets/images/uninassau_logo.png')} style={styles.logo}/>
							
					<Text style={styles.Text1}>
						USUÁRIO
					</Text>
				</View>

				{/* Card do Usuário */}
				<View style={styles.userCard}>
					<MaterialIcons name="account-circle" size={56} color="white" />
					<View style={styles.userInfo}>
					<Text style={styles.userName}>USER 22009323</Text>
					<Text style={styles.userRole}>Aluno</Text>
					<Text style={styles.userCourse}>Ciências da Computação</Text>
					</View>
				</View>

				{/* Seção Configurações */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Configurações</Text>

					<TouchableOpacity style={styles.menuItem}>
						<View style={styles.iconWrapper}>
							<MaterialIcons name="person" size={22} color="white" />
							<MaterialIcons name="people" size={14} color="white" style={styles.iconBadge} />
						</View>
						<View style={styles.menuTextGroup}>
							<Text style={styles.menuTitle}>Perfil</Text>
							<Text style={styles.menuSubtitle}>Dados Pessoais</Text>
						</View>
						<MaterialIcons name="chevron-right" size={24} color="#09397d" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.menuItem}>
						<MaterialCommunityIcons name="bell-badge-outline" size={26} color="#09397d" />
						<View style={styles.menuTextGroup}>
							<Text style={styles.menuTitle}>Notificações</Text>
							<Text style={styles.menuSubtitle}>Dados Pessoais</Text>
						</View>
						<MaterialIcons name="chevron-right" size={24} color="#09397d" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.menuItem}>
						<MaterialCommunityIcons name="lock-open-outline" size={26} color="#09397d" />
						<View style={styles.menuTextGroup}>
							<Text style={styles.menuTitle}>Segurança</Text>
							<Text style={styles.menuSubtitle}>Senha e Privacidade</Text>
						</View>
						<MaterialIcons name="chevron-right" size={24} color="#09397d" />
					</TouchableOpacity>

					<TouchableOpacity onPress={onPressExit} style={styles.menuItem}>
						<MaterialCommunityIcons name="exit-run" size={26} color="#09397d" />
						<View style={styles.menuTextGroup}>
							<Text style={styles.menuTitle}>Sair</Text>
							<Text style={styles.menuSubtitle}>Encerrar Sessão</Text>
						</View>
						<MaterialIcons name="chevron-right" size={24} color="#09397d" />
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 12,
  },

  title: {
	backgroundColor: 'white',
	width: '99%',
	height: '17%',
	borderRadius: 10,
	marginTop: 16,
	paddingHorizontal: 12,
	elevation: 8,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	marginHorizontal: 2
	},

	Text1: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#09397d',
		fontFamily: 'Calibri',
		textShadowColor: 'rgba(0, 0, 0, 0.4)',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 4
	},

	logo: {
		width: 48,
		height: 48,
		resizeMode: 'contain'
	},

  // Card do usuário
  userCard: {
    backgroundColor: '#09397d',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    elevation: 4,
	height: 115,
  },

  userInfo: {
    flexDirection: 'column',
    gap: 2,
  },

  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Calibri',
  },

  userRole: {
    fontSize: 16,
    color: '#f0c93a',
    fontFamily: 'Calibri',
    fontWeight: 'bold',
  },

  userCourse: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Calibri',
  },

  // Seção
  section: {
    backgroundColor: '#01295d',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: 6,
    elevation: 4,
	minHeight: 400,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f0c93a',
    fontFamily: 'Calibri',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },

  // Itens do menu
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 22,
    paddingHorizontal: 14,
    marginBottom: 8,
    gap: 12,
    elevation: 2,
  },

  menuTextGroup: {
    flex: 1,
    flexDirection: 'column',
  },

  menuTitle: {
    fontSize: 17,
    fontFamily: 'Calibri',
    fontWeight: 'bold',
    color: '#09397d',
  },

  menuSubtitle: {
    fontSize: 12,
    fontFamily: 'Calibri',
    color: '#555',
  },

  // Ícone duplo do Perfil
  iconWrapper: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09397d',
    borderRadius: 13,
  },

  iconBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
  },
});
