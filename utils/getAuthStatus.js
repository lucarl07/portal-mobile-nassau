import * as SecureStore from 'expo-secure-store';

function getAuthStatus() {
	const isAuthenticated = SecureStore.getItem("is_user_logged");

	if (isAuthenticated == "true") {
		return true;
	}
	return false;
}

export default getAuthStatus;
