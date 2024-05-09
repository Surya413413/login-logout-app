
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLogin: true}

onLogin = () =>{
  this.setState((preve) => ({isLogin: !preve.isLogin}))
}
onLogout = () =>{
  this.setState((preve) => ({isLogin: !preve.isLogin}))
}

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="second-bg">
        {isLogin ? <h1>Please Login</h1> : <h1>"Welcome User"</h1>}
          <div>
            {isLogin ? <button className="button-style" onClick={this.onLogin}>Login</button> : <button className="button-style" onClick={this.onLogout}>Logout</button>}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
