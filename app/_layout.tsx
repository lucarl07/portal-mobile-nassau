import { Slot } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite';

const handleDbInit = async (db: any) => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL
        );
    `);
    await db.execAsync(`PRAGMA journal_mode = WAL;`);
}

export default function RootLayout() {
    return (
        <SQLiteProvider 
            databaseName="db.db"
            onInit={handleDbInit}
            options={{ useNewConnection: false }}
        >
            <Slot />
        </SQLiteProvider>
    );
}
