import api from './api';

export async function login(email, password) {
    await api.get('/sanctum/csrf-cookie');

    return api.post('/login', {
        email,
        password,
    });
}

export async function register(name, email, password) {
    await api.get('/sanctum/csrf-cookie');

    return api.post('/register', {
        name,
        email,
        password,
        password_confirmation: password,
    });
}

export async function logout() {
    return api.post('/logout');
}

export async function getUser() {
    return api.get('/api/user');
}
