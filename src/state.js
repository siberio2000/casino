import {createEvent, createStore} from 'effector';

export const addData = createEvent();
export const $data = createStore({}).on(addData, (state, data) => ({...state, ...data}));

$data.watch(console.log)