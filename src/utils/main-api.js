import { BASE_URL } from "./constants";

const _checkResponse = (res) => {
    if (!res.ok) {
		return res.json().then((data) => {
			return Promise.reject({ status: `Ошибка : ${res.status}`, message: data.message });
		});
	}
	return res.json();
  }
  
  //Регистрация пользователя
  export const register = ({ name, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email, password }),
	}).then(_checkResponse);
  }
  
  //Авторизация пользователя
  export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	}).then(_checkResponse);
  }
  
  
  //Выход из профиля
  export const signOut = () => {
    return fetch(`${BASE_URL}/signout`, {
    method: "POST",
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(_checkResponse);
  }
  
  //Получение данных пользователя
  export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
      .then(_checkResponse);
  }
  
  //Сохранение (изменение) данных пользователя
  export const setUserInfo = ({ name, email }) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
    })
      .then(_checkResponse);
  }
  
  //Сохранение (лайк) фильмов
  export const saveMovies = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...movie
      })
    })
      .then(_checkResponse);
  }
  
  //Удаление сохраненных фильмов
  export const deleteMovies = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(_checkResponse);
  }
  
  export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(_checkResponse);
  }