import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useSQLiteContext } from "expo-sqlite";
import * as Crypto from 'expo-crypto';

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const db = useSQLiteContext();

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
        } catch (error: any) {
            console.error(error);
            Alert.alert('Error', error.message || 'An error occurred while logging in.');
        }
    };

    return (
        <View style={styles.container}>
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
            <Button title="Cadastrar usuário" onPress={registerUser} />
            <Button title="Fazer login" onPress={loginUser} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

