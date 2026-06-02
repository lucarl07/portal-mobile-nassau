import { useState } from "react";
import { Text, TextInput, Button, StyleSheet, Alert, View, Pressable } from 'react-native';

import { useSQLiteContext } from "expo-sqlite";
import { useRouter } from "expo-router";
import * as Crypto from 'expo-crypto';

import setAuthStatus from '@/utils/setAuthStatus'

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const db = useSQLiteContext();
	const router = useRouter();

    const hashPassword = async (password: string) => {
        const hashed = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            password
        );
        return hashed;
    };

    const registerUser = async () => {
        try {
            if (!form.email || !form.password) {
                throw new Error('All fields are required');
            }

            const user = await db.getFirstAsync(
                'SELECT * FROM users WHERE email = ?',
                [form.email]
            );

            if (user) {
                Alert.alert('Error', 'User already exists');
                return;
            }

            const hashedPassword = await hashPassword(form.password);

            await db.runAsync(
                'INSERT INTO users (email, password) VALUES (?, ?)',
                [form.email, hashedPassword]
            );

            Alert.alert('Success', 'User added successfully');
            setForm({ email: '', password: '' });
        } catch (error: any) {
            console.error(error);
            Alert.alert('Error', error.message || 'An error occurred while adding the user.');
        }
    };

    const loginUser = async () => {
        try {
            if (!form.email || !form.password) {
                throw new Error('All fields are required');
            }

            const user = await db.getFirstAsync(
                'SELECT * FROM users WHERE email = ?',
                [form.email]
            );

            if (!user) {
                Alert.alert('Error', 'Invalid email or password');
                return;
            }

            const hashedPassword = await hashPassword(form.password);
            const senhaCorreta = hashedPassword === user!.password;

            if (!senhaCorreta) {
                Alert.alert('Error', 'Invalid email or password');
                return;
            }

            Alert.alert('Success', 'User logged in successfully');
            setForm({ email: '', password: '' });

			await setAuthStatus(true)
			router.replace('/(tabs)')
        } catch (error: any) {
            console.error(error);
            Alert.alert('Error', error.message || 'An error occurred while logging in.');
        }
    };

    return (
        <View style={styles.pageView}>
			<View style={styles.contentView}></View>
			<View style={styles.loginView}>
				<View style={styles.inputWrapper}>
					<TextInput
						style={styles.input}
						placeholder="E-mail"
						value={form.email}
						onChangeText={(text) => setForm({ ...form, email: text })}
						keyboardType="email-address"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Senha"
						value={form.password}
						onChangeText={(text) => setForm({ ...form, password: text })}
						secureTextEntry
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<Pressable style={[styles.button, styles.loginButton]} onPress={loginUser}>
						<Text style={styles.loginButtonText}>Fazer login</Text>
					</Pressable>
					<Pressable style={[styles.button, styles.registerButton]} onPress={registerUser}>
						<Text style={styles.registerButtonText}>Registrar-se</Text>
					</Pressable>
				</View>
			</View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageView: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#D0D0D0',
    },
	contentView: {
		flex: 7,
	},
	loginView: {
		flex: 3,
		gap: 24,
		width: '100%',
        padding: 32,
        borderRadius: 24,
        backgroundColor: '#02295d',
		
		// Sombra no Android:
        elevation: 5,
		// Sombra no iOS:
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
	},
	inputWrapper: {
		gap: 12
	},
    input: {
        height: 48,
		padding: 12,
		borderRadius: 12,
        borderWidth: 1,
		color: '#000',
		backgroundColor: '#FFF',
        borderColor: '#D0D0D0',
    },
	buttonWrapper: {
		flexDirection: 'row',
		gap: 12,
	},
	button: {
		flex: 1,
		padding: 16,
		alignItems: 'center',
		borderRadius: 12,
	},
	loginButton: {
		backgroundColor: '#efc10a'
	},
	registerButton: {
		backgroundColor: '#35609b'
	},
	loginButtonText: {
		color: '#35609b',
		fontSize: 16,
		fontWeight: '800'
	},
	registerButtonText: {
		color: '#efc10a',
		fontSize: 16,
		fontWeight: '800'
	}
});

