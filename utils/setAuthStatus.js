import * as SecureStore from 'expo-secure-store';

async function setAuthStatus(value) {
  await SecureStore.setItemAsync("is_user_logged", String(value));
}

export default setAuthStatus;
