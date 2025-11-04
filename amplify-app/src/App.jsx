import './App.css'
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';


function App() {

   return (
    <Authenticator>
      {({signOut, user}) => (
        <main>
          <h1>Hello, {user.username}, from Aws Amplify</h1>
          <button onClick={signOut}>sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default withAuthenticator(App)
