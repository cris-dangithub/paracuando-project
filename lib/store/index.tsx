import { configureStore } from '@reduxjs/toolkit';
import popUpAuth from './slices/popUpAuth.slices';
import user from './slices/user.slices';

export const store = configureStore({ reducer: { popUpAuth, user } });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
