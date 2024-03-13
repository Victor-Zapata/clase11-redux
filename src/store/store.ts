import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import counterReducer from './slices/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

//tipado de estado
export type RootState = ReturnType<typeof store.getState>;

//tipado de acciones
export type AppDispatch = typeof store.dispatch;

//me va a retornar acciones a despachar
type DispatchFunction = () => AppDispatch;

export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
