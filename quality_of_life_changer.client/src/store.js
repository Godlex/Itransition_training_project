import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux-modules/index-reducer';

export default configureStore({
  reducer: reducer,
})