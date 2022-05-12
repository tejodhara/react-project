import  { createContext } from 'react';

const loginContext =createContext()
let LoginProvider=loginContext.Provider
let LoginConsumer=loginContext.Consumer

export default loginContext
export {LoginProvider,LoginConsumer}
