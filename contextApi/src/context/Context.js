import  { createContext } from 'react';

const userContext =createContext()
let UserProvider=userContext.Provider
let UserConsumer=userContext.Consumer

export default userContext
export {UserProvider,UserConsumer}
