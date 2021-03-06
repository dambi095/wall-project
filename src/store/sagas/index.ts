import {spawn} from 'redux-saga/effects';
import watchPost from './postSaga';
import watchUser from './userSaga';

export default function* rootSaga() {
	yield spawn(watchUser);
	yield spawn(watchPost);
}
