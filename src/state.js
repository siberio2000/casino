import {createEvent, createStore} from 'effector';

export const addData = createEvent();
export const $data = createStore({}).on(addData, (state, data) => ({...state, ...data}));

$data.watch(console.log)

/**
 *  Creating multi-store state manager with Effector
 *  to gather winown's user journey events
 *  Documentation: https://effector.dev/
 *  https://github.com/effector/effector
 * */