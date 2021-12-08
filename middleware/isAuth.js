import Cookies from 'js-cookie';

export default function({ req, redirect }) {
    let isAuth = true;

    if(req) {
        if(!req.headers.cookie) isAuth = false;
    }

    isAuth ? console.log('Accesso consentito!') : redirect('/auth/login'); 
}