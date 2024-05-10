import LabeledTextField from '../../molecules/labeledtextfield'
import './index.css'

const Form = () => {
  return (
    <div>
      <form>
        <LabeledTextField label="Username" id="username" name="username" />
        <LabeledTextField label="Password" id="password" name="password" type="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Form