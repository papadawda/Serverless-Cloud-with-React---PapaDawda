/* src/Profile.js */
import { useState, useEffect } from 'react'
import { fetchUserAttributes } from 'aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Container from './Container'

function Profile({signOut, user}) {

  useEffect(() => {
    checkUser()
  }, [])

  const [currentUser, setCurrentUser] = useState({user})

  async function checkUser() {
    try {
      const userAttributes = await fetchUserAttributes();
      setCurrentUser({...userAttributes,...user})
    } catch (err) { console.log('error: ', err) }
  }
  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {currentUser.username}</h2>
      <h3>Email: {currentUser.email}</h3>
      <h4>Phone: {currentUser.phone_number ?? '608-520-5742'}</h4>
     <button onClick={signOut}>sign Out</button>
    </Container>
  );
}

export default withAuthenticator(Profile)