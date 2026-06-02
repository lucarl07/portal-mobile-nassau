import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Outros() {
  return (
    <ScrollView style={styles.container}>
		<SafeAreaView style={styles.container}>

			<View style={styles.title}>
				<Image source={require('@/assets/images/uninassau_logo.png')} style={styles.logo}/>
			
				<Text style={styles.Text1}>
					OUTROS
				</Text>
			</View>
			
		{/* Seção Acadêmico */}
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>Acadêmico</Text>

			<TouchableOpacity style={styles.menuItem}>
			<MaterialCommunityIcons name="calendar-month" size={24} color="white" />
			<Text style={styles.menuText}>Segunda Chamada</Text>
			<MaterialIcons name="chevron-right" size={24} color="white" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.menuItem}>
			<MaterialCommunityIcons name="book-open-variant" size={24} color="white" />
			<Text style={styles.menuText}>Mudança de Curso</Text>
			<MaterialIcons name="chevron-right" size={24} color="white" />
			</TouchableOpacity>
		</View>

		{/* Seção Alterações Acadêmicas */}
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>Alterações acadêmicas</Text>

			<TouchableOpacity style={styles.menuItem}>
			<MaterialIcons name="group" size={24} color="white" />
			<Text style={styles.menuText}>Mudança de Turma</Text>
			<MaterialIcons name="chevron-right" size={24} color="white" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.menuItem}>
			<MaterialCommunityIcons name="clock-outline" size={24} color="white" />
			<Text style={styles.menuText}>Mudança de Turno</Text>
			<MaterialIcons name="chevron-right" size={24} color="white" />
			</TouchableOpacity>
		</View>

		{/* Seção Documentação */}
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>Documentação</Text>

			<TouchableOpacity style={styles.menuItem}>
			<Feather name="folder" size={24} color="white" />
			<Text style={styles.menuText}>Meus Documentos</Text>
			<MaterialIcons name="chevron-right" size={24} color="white" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.menuItem}>
			<MaterialCommunityIcons name="medal-outline" size={24} color="white" />
			<Text style={styles.menuText}>Certificados e Diplomas</Text>
			<MaterialIcons name="chevron-right" size={24} color="white" />
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
		height: '13%',
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

  section: {
    backgroundColor: '#01295d',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: 6,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0c93a',
    fontFamily: 'Calibri',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#09397d',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 8,
    gap: 12,
    elevation: 2,
  },

  menuText: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Calibri',
    fontWeight: 'bold',
    color: 'white',
  },
});