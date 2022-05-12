import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// describe("button testing",()=>{
// // button is rendering or not
// it("button render testing", () => {
//     const { queryByTitle } = render(<Login />);
//     const btn = queryByTitle("dummyBtn");
//     expect(btn).toBeTruthy();
//   });

//   //function getting triggered
//   it("button onClick", () => {
//     const { queryByTitle } = render(<Login />);
//     const btn = queryByTitle("dummyBtn");
//     fireEvent.click(btn);
//   });
// })

// describe("input field testing", () => {
// // is input field rendering or not ?

//   it("input render test", () => {
//     const { queryByTitle } = render(<Login />);
//     const input = queryByTitle("email");
//     expect(input).toBeTruthy();
//   });

// // is the value in the input field changing or not ?

//   it("onChange", () => {
//     const { queryByTitle } = render(<Login />);
//     const input = queryByTitle("email");
//     fireEvent.change(input, { target: { value: "testValue" } });
//     expect(input.value).toBe("testValue");
//   });
// });
