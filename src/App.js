import React, { Component } from "react";
// import Form from "./Form/Form";
// import TodoEditor from "./TodoEditor";
// import shortid from "short-uuid";
// import LoginForm from "./Form/LoginForm";
import FormFormik from "./Form-Formik";
// class App extends Component {
//   state = {};
//   formSubmitHandler = (data) => {
//     console.log(data);
//   };
//   addToDo = (text) => {
//     const todo = {
//       id: shortid.generate(),
//       text,
//       complited: false,
//     };
//     this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
//   };
//   render() {
//     const { todos } = this.state;
//     return (
//       <>
//         <Form onSubmit={this.formSubmitHandler} />
//         <TodoEditor onSubmit={this.addToDo} />
//       </>
//     );
//   }
// }
class App extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <LoginForm /> */}
        <FormFormik />
      </>
    );
  }
}
export default App;
