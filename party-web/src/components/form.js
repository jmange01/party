export function UserNameField(props) {
  return (
    <input className="form-field" type="text" placeholder="User Name" onChange={(e) => props.onChangeCallback(e.target.value)} />
  )
}

export function EmailField(props) {
  return (
    <input className="form-field" type="text" placeholder="Email" onChange={(e) => props.onChangeCallback(e.target.value)} />
  )
}
  
export function PassField(props) {
  return (
    <input className="form-field" type="password" placeholder="Password" onChange={(e) => props.onChangeCallback(e.target.value)} />
  )
}

export function SubmitButton(props) {
  return (
    <button className="form-button" type="button" onClick={() => props.onClickCallback()}>Submit</button>
  )
}
