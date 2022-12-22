export function getAuthForm() {
  return `
    <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
      <input
        type="email"
        id="email"
        required
      />
      <label for="email">Email</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
    <input
      type="password"
      id="password"
      required
    />
    <label for="password">Password</label>
  </div>
    <button
      type="submit"
      class="mui-btn mui-btn--raised mui-btn--primary"
    >
      Go it 
    </button>
  </form>
    `
}
export function authWithEmailAndPassword(email, password) {
  const API_KEY = 'AIzaSyBh65NObTsrOoE5OqnM97XnC56SDRkR_0k'
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.idToken)
}
