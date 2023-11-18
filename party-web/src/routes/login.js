import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { authenticate } from '../lib/services/auth';
import { EmailField, PassField, SubmitButton } from '../components/form';

export default function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate()

  return (
    <div id="login-box">
      <form>
        <EmailField
          onChangeCallback={setEmail}
        />
        <PassField
          onChangeCallback={setPassword}
        />
        <SubmitButton
          onClickCallback={() => submitForm(email, password, props.loginCallback, navigate)}
        />
        <SignUpButton
          signUpCallback={(userEmail, userPassword) => submitForm(userEmail, userPassword, props.loginCallback)}
        />
      </form>
    </div>
  )
}

function SignUpButton(props) {
  return (
    <Link to="/signup">
      Sign Up
    </Link>
  )
}

function submitForm(email, password, loginCallback, navigate) {
  if (!email || !password) return;

  try {
    const token = authenticate(
      {
        email: email,
        password: password
      });

      loginCallback(token)
      navigate("/")
  } catch(e) {
    console.log(e.message)
  }
}
