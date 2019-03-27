export const SET_REGISTER = 'SET_REGISTER'
export const DEFAULT_REGISTER = 'DEFAULT_REGISTER'
export const setRegister = payload => ({
  type: SET_REGISTER,
  payload,
})
export const defaultRegister = () => ({
  type: DEFAULT_REGISTER,
})