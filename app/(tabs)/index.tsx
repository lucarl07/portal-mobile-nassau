import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Inicio() {
	useFonts({
		'Open Sans': require('@/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
	});
	
	const styles = header;

	//Imagens que alternam na View1
	const imagens = [
		require('@/assets/images/nassau01.jpg'),
		require('@/assets/images/nassau02.jpg'),
		require('@/assets/images/nassau03.jpg')
	];

	const [imagemAtual, setImagemAtual] = useState(0);

	useEffect(() => {
		const intervalo = setInterval(() => {
			setImagemAtual(anterior => (anterior + 1) % imagens.length);
		}, 3000);

		return () => clearInterval(intervalo); 
	}, []);

	return (
		<SafeAreaView style={styles.container}>

			<View style={styles.View1}>
				<Image source={require('@/assets/images/uninassau_logo.png')} style={styles.íconeLogo}/>

				<Text style={styles.TextHeader}> UNINASSAU SYSTEM</Text>

				<TouchableOpacity onPress={() => console.log('botão pressionado')}>
				<Image source={require('@/assets/images/sino.png')} style={styles.íconeSino}/>
				
				</TouchableOpacity>
			</View>

			<View style={styles.View2}>
				<Image source={imagens[imagemAtual]} style={styles.banner} />
			</View>

			<View style={styles.row}>
				<View style={[styles.comunicados, styles.cardDestaque]}>
					<Text style={styles.Text3}>
						Comunicados:
					</Text>
				</View>

				<View style={styles.coluna}>
					<View style={styles.card}>
						<Image source={require('@/assets/images/provas.png')} style={styles.ícone}/>

						<Text style={styles.Text2}>
							Provas
						</Text>
					</View>
					<View style={[styles.card, styles.corAtividades]}>

						<Image source={require('@/assets/images/calendario.png')} style={styles.ícone}/>

						<Text style={styles.Text2}>
							Atividades
						</Text>
					</View>
					<View style={[styles.card, styles.cardDestaque]}>
						<Text style={styles.Text3}>
							Vazio
						</Text>
					</View>
				</View>
			</View>

		</SafeAreaView>
	)
}

const header = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#f0f0f0'
	},

    View1: {
		height: '8%',
		width: '99%',
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 10,
		marginTop: 16,
		paddingHorizontal: 12,
		elevation: 8
    },

	TextHeader: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#01295d',
		fontFamily: 'Calibri',
		textShadowColor: 'rgba(0, 0, 0 , 0.4)',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 4
	},

	Text2: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'black',
		fontFamily: 'Calibri'
	},

	Text3: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#b6a22d',
		fontFamily: 'Calibri'
	},


	View2: {
		height: '30%',
		width: '95%',
		backgroundColor: 'white',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginTop: 16,
		elevation: 8
	},

	row: {
		flexDirection: 'row',
		width: '95%',
		marginTop: 16,
		gap: 8, 
		height: 350,
		
	},

	comunicados: {
		flex: 0.9,
		backgroundColor: 'white',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderRadius: 10,
		padding: 5,
		alignSelf: 'stretch',
		elevation: 8
		
	},

	coluna: {
		flex: 0.9,
		flexDirection: 'column',
		gap: 8
	},

	card: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderRadius: 10,
		padding: 8,
		flexDirection: 'row',
		gap: 8,
		alignSelf: 'stretch',
		elevation: 8
	},

	ícone: {
		width: 24,
		height: 24,
		resizeMode: 'contain'
	},

	cardDestaque: {
		backgroundColor: '#01295d'
	},

	íconeSino: {
		width: 22,
		height: 22,
		resizeMode: 'contain'
	},

	íconeLogo: {
		width: 48,
		height: 48,
		resizeMode: 'contain'
	},

	banner: {
		width: '100%',
		height: '100%',
		borderRadius: 10,
		resizeMode: 'cover'
	},

	corAtividades: {
		backgroundColor: '#efc108'
	}
	

});

