import React from "react";
import ReactDOM from "react-dom";
import App from './App';

ReactDOM.render(<App/>, document.getElementById("root"));


/* You can convert a function component like Clock to a class in five steps:
1 Create an ES6 class, with the same name, that extends React.Component.
2 Add a single empty method to it called render().
3 Move the body of the function into the render() method.
4 Replace props with this.props in the render() body.
5 Delete the remaining empty function declaration.*/

// clock class component:
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals