
const SESSION_TOKEN_LS_KEY = "sessionToken"

export function authenticate(credentials) {
  const email = credentials.email
  const password = credentials.password
  var sessionToken = login(email, password)

  if(!sessionToken) throw new Error("failed login.")

  localStorage.setItem(SESSION_TOKEN_LS_KEY, sessionToken)

  return sessionToken
}

function login(email, password) {
  console.log(`submitting: ${email} | ${password}`)
  if (email === "foobar" && password === "baz") {
    return "foobarbaz"
  } else {
    return null
  }
}

export function logout(callback) {
  localStorage.removeItem(SESSION_TOKEN_LS_KEY)
  callback()
}
