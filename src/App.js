import React from 'react';
  import Websocket from 'react-websocket';
 
  class App extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        count: 90
      };
    }
 
    handleData(data) {
      let result = JSON.parse(data);
      this.setState({count: this.state.count + result.movement});
    }
    handleopen(){

      console.log("open port")
    }
 
    render() {
      return (
        <div>
          Count: <strong>{this.state.count}</strong>
 
          <Websocket url='wss://k7txwwf30m.execute-api.ap-south-1.amazonaws.com/dev'
              onMessage={this.handleData.bind(this)} onOpen={this.handleopen.bind(this)}/>
        </div>
      );
    }
  }
 
  export default App;
