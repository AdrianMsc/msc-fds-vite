import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

// Migration function to modify persisted state
const migrations = {
	0: (state: any) => {
		// Modify the persisted state here (e.g., rename or delete properties)
		if (state && state.someOldKey) {
			state.newKey = state.someOldKey;
			delete state.someOldKey;
		}
		return state;
	}
};

const persistConfig = {
	key: 'root',
	storage,
	version: 1, // Increase this when modifying persisted state
	migrate: createMigrate(migrations, { debug: true }) // Migrate old state when needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
			}
		})
});

const persistor = persistStore(store);

export { persistor, store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
