// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  statusChange = () => {
    this.setState(previousState => ({isLogin: !previousState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="login-container">
        <div className="login-card">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.statusChange} />
          ) : (
            <Login login={this.statusChange} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
