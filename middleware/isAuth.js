import Cookies from 'js-cookie';

export default function({ req, redirect, store }) {
    let isAuth = true;

    if(req) {
        if(!req.headers.cookie) isAuth = false;
    } else {
        if(!Cookies.get('token')) {
            isAuth = false;
            store.commit('auth/setToken', null);
        }
    }

    isAuth ? console.log('Accesso consentito!') : redirect('/auth/login'); 
}