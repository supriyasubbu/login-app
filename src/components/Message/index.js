// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  const mess = isLogin ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{mess}</h1>
}

export default Message
