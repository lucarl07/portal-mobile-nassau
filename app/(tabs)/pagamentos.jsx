import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pagamentos() {
	return (
		<SafeAreaView>

			<View style={styles.View1}>
				<Image source={require('@/assets/images/uninassau_logo.png')} style={styles.logo}/>

				<Text style={styles.Text1}>
					PAGAMENTOS
				</Text>
			</View>

			<View style={styles.pagamentos}>
				<View style={styles.pagamentoPendente}>
					<Image source={require('@/assets/images/negação.png')} style={styles.ícones}/>

					<Text style={styles.Text2}>
						Pagamentos pendentes:
					</Text>

					<Text style={styles.Text2}>
						R$ 850,00{'\n'}Fatura de Setembro
					</Text>

					<View style={styles.indicador}>
						<Text style={styles.Text2}>
							PENDENTE
						</Text>
					</View>
				</View>

				<View style={styles.pagamentoRealizado}>
					<Image source={require('@/assets/images/afirmação.png')} style={styles.ícones}/>

					<Text style={styles.Text2}>
						Pagamentos realizados:
					</Text>

					<Text style={styles.Text2}>
						R$ 1650,00 {'\n'}Fatura de Agosto
					</Text>

					<View style={styles.indicador}>
						<Text style={styles.Text2}>
							REALIZADO
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.HistóricoPagamentos}>
				<Text style={styles.Text5}>
					Histórico de pagamentos:
				</Text>
			</View>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({

	View1: {
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
		fontSize: 20,
		fontWeight: 'bold',
		color: '#09397d',
		fontFamily: 'Calibri',
		textShadowColor: 'rgba(0, 0, 0, 0.4)',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 4
	},

	Text2: {
		fontSize: 15,
		fontFamily: 'Calibri',
		fontWeight: 'bold',
		color: 'white'
	},



	logo: {
		width: 48,
		height: 48,
		resizeMode: 'contain'
	},

	pagamentos: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 8,
		marginTop: 16,
		gap: 8,
		elevation: 8
		
	},

	pagamentoPendente: {
		flex: 1,
		backgroundColor: '#ba0100',
		borderRadius: 10,
		padding: 12,
		elevation: 8,
		minHeight: 150,
		flexDirection: 'column',
		justifyContent: 'space-between',
		
	},

	pagamentoRealizado: {
		flex: 1,
		backgroundColor: '#00bf63',
		borderRadius: 10,
		padding: 12,
		elevation: 8,
		minHeight: 150,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	ícones: {
		width: 22,
		height: 22,
		resizeMode: 'contain',
	},

	indicador: {
		borderRadius: 15,
		paddingHorizontal: 8,
		paddingVertical: 4,
		alignSelf: 'flex-start',
		marginTop: 8,
		elevation: 1
	},

	HistóricoPagamentos: {
		borderRadius: 15,
		backgroundColor: '#01295d',
		width: '99%',
		height: '45%',
		paddingVertical: 4,
		paddingHorizontal: 4,
		marginTop: 18,
		marginHorizontal: 2

	},

	Text5: {
		fontSize: 20,
		fontFamily: 'Calibri',
		fontWeight: 'bold',
		color: '#b6a22d'

	}




});
