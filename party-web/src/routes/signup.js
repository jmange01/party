import { useState } from 'react';
import { EmailField, PassField, SubmitButton, UserNameField } from '../components/form';
import { ProfileForm, SignupForm, UserNameForm } from "../components/signup";
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../lib/services/auth';

export default function Signup(props) {
  const [flowState, setFlowState] = useState({})
  const flow = new Flow(setFlowState);
  const nav = useNavigate()

  return <div>
    { flow.enter(flowState, () => loginAndRedirect({email: flowState.email, password: flowState.password}, nav)) }
  </div>
}

function loginAndRedirect(credentials, redirect) {
  authenticate(credentials)
  redirect()
}

class Flow {
  flow
  currentStep
  setFlowState

  credentialsStep = { 
      component: SignupForm,
      isComplete: (flowState) => {
        return flowState.email
      },
  }

  userNameStep = {
    component: UserNameForm,
    isComplete: (flowState) => {
      return flowState.userName
    }
  }

  constructor(setFlowState) {
    this.addStep(this.credentialsStep)
    this.addStep(this.userNameStep)

    this.currentStep = this.flow.start
    this.setFlowState = setFlowState
  }

  addStep(step) {
    if(this.flow) {
      this.flow.last.next = step;
      this.flow.last = step;
    } else {
      this.flow = {};
      this.flow.start = step;
      this.flow.last = step;
    }
  }

  getIncompleteStep(flowState) {
    while(this.currentStep && this.currentStep.isComplete(flowState)) {
      this.currentStep = this.currentStep.next
    }

    return this.currentStep
  }

  enter(flowState, completeCallback) {
    const current = this.getIncompleteStep(flowState)

    if(!current) {
      completeCallback()
      return <div></div>
    }

    return <this.currentStep.component submitCallback={ (state) => this.setFlowState({ ...flowState, ...state, }) }/>
  }
}
