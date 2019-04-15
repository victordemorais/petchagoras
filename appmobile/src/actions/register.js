export const SET_REGISTER = "SET_REGISTER";
export const DEFAULT_REGISTER = "DEFAULT_REGISTER";
export const setRegister = payload => ({
  type: SET_REGISTER,
  payload
});
export const defaultRegister = () => ({
  type: DEFAULT_REGISTER
});

//O ACTION VAI LA NO SERVIDOR http://www.google.com.br
//pega um resultado JSON

//user:{
// name:"Victor de Morais",
// idade:"12"
// }
