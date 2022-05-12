import Login from "./Login";
import { fireEvent, render } from '@testing-library/react';

describe("Login button",()=>{
    it("login button render",()=>{
        let {queryByTitle} = render(<Login />)
        let btn = queryByTitle("loginBtn")
        expect(btn).toBeTruthy()
    })

    it("onClick",()=>{
        let {queryByTitle} = render(<Login />)
        let btn = queryByTitle("loginBtn")
        fireEvent.click(btn) 
        
    })
})
describe("input field test",()=>{
    it("login render",()=>{
        let {queryByTitle}=render (<Login />)
        let input = queryByTitle("email")
        expect(input).toBeTruthy()
    })
    it("input onChange",()=>{
        let {queryByTitle}=render (<Login />)
        let input = queryByTitle("email")
        fireEvent.change(input,{target:{value:"testValue"}})
        expect(input.value).toBe("testValue")
    })
})