import * as actionTypes from './../../actionTypes.jsx';

export const handleLogin = () => {
  window.localStorage.setItem("token", "12345678910")
  return {
    type: actionTypes.SET_LOGIN,
  }
}