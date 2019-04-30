import React,{Component} from 'react';
class App extends Component {
  constructor(){

super()
this.state={
Messages:["a","b"]
}

  }
  render(){
  return (
    <div>
      {
      this.state.Messages.length> 0 &&
        <h2><marquee>Hello Masood</marquee> You have {this.state.Messages.length}unread messages!</h2>
      }
    </div>
  );
}
}
export default App;
