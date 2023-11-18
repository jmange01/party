import { useState } from 'react';
import { EmailField, PassField, SubmitButton, UserNameField } from '../components/form';
import { ProfileForm, SignupForm, UserNameForm } from "../components/signup";

export default function Signup(props) {
  const flow = signupFlow(() => { })
  const step = flow.getNextStep(flow.steps.userNameStep)

  return <div>
    <flow.steps.start.screen
      loginCallback={props.loginCallback}
    />
  </div>
}

function userNameStep() {
  return <SignupForm

  />
}

function signupFlow(completionCallback) {
  return {
    steps: {
      start: {
        screen: SignupForm,
        transition: "userNameStep"
      },
      userNameStep: {
        screen: UserNameForm,
        transition: "profileStep"
      },
      profileStep: {
        screen: ProfileForm,
        transition: "end"
      }
    },

    getNextStep: function (step) {
      return this.steps[step.transition]
    }
  }
}

