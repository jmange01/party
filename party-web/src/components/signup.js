import { useState } from "react";
import { EmailField, PassField, SubmitButton, UserNameField } from "./form";

export function SignupForm(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return(
    <form>
      <EmailField
        onChangeCallback={setEmail}
      />
      <PassField
        onChangeCallback={setPassword}
      />
      <SubmitButton
        onClickCallback={() => signUp(email, password, props.submitCallback)}
      />
    </form>
  )
}

function signUp(email, password, submitCallback) {
  // alert(`you signed up, ${userName}!`);
  // save credentials
  submitCallback(email, password);
}


export function UserNameForm(props) {
  const [userName, setUserName] = useState(null);
  return (
    <div id="user-name-input">
      <UserNameField
        onChangeCallback={setUserName}
      />
    </div>
  )
}

export function ProfileForm(props) {
  return (
    <div id="profile-form">
      <textarea></textarea>
    </div>
  )
}

export function PreferencesForm(props) {
  return (
    <div>

    </div>
  )
}

export function InterestsForm(props) {
  return (
    <div>

    </div>
  )
}
