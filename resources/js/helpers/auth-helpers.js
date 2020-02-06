const KEY = 'session_token';

export function setToken(token){
    localStorage.setItem(KEY, token);
}

export function getToken() {
    return localStorage.getItem(KEY);
}

export function removeToken(){
    localStorage.removeItem(KEY);
}

