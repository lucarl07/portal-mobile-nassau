import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Inicio() {
	const styles = header;

	return (
		    <SafeAreaView style={styles.container}>
			    <View style={styles.View1}>

					<Text> UNINASSAU SYSTEM!</Text>
			    </View>

				<ScrollView> style={styles.container2}
					<Text>Olá, mundo!</Text>
				</ScrollView>
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
		borderColor: 'black',
		borderWidth: 1,
		height: '8%',
		width: '99%',
		backgroundColor: 'white',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		marginTop: 16
		

    },

	Text: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#101ed7'
	},

	Container2: {
		flex: 1,
		width: '50%'
	}

});

