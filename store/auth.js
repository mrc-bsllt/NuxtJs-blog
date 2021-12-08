import Cookies from 'js-cookie';

export const state = () => (
    {
        IDToken: null
    }
)

export const mutations = {
    setToken(state, token) {
        state.IDToken = token;
    }
}

export const actions = {
    registerUser({ commit, dispatch }, userData) {
        this.$axios.$post(process.env.REGISTER_API + process.env.API_KEY, userData)
            .then(data => {
                dispatch('setAuthCookies', { ...userData, token: data.idToken });
                this.$router.push('/admin');
            });
    },
    loginUser({ commit, dispatch }, userData) {
        this.$axios.$post(process.env.LOGIN_API + process.env.API_KEY, userData)
        .then(data => {
            const user = {
                token: data.idToken,
                name: userData.email
            }

            dispatch('setAuthCookies', user);
            this.$router.push('/admin');   
        })
    },
    setAuthCookies({ commit }, data) {
        Cookies.set('token', data.token, { expires: 7 });
        Cookies.set('userName', data.name, { expires: 7 });
        commit('setToken', data.token);
    }
}

export const getters = {
    getToken(state) {
        return state.IDToken;
    }
}