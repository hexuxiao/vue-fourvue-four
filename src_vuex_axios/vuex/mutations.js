import {REQUESTING,REQUEST_SUCCESS,REQUEST_FAILD} from './mutationType'
export const mutations = {
    [REQUESTING](state) {
        state.isFirst = false;
        state.isLoading = true;
    },
    [REQUEST_SUCCESS](state, users) {
        state.isLoading = false;
        state.users = users
    },
    [REQUEST_FAILD](state, msg) {
        state.errMsg = msg;
        state.isLoading = false;
    }
}