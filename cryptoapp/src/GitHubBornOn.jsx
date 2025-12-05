// Import React's useState and useEffect hooks
import { useState, useEffect } from 'react'

// Import the "get" function from Amplify's API module
import { get } from 'aws-amplify/api'

// Export the component so it can be used in App.js
export default function GitHubBornOn() {

  // Create a piece of state called "info" to store GitHub data (starts as null)
  const [info, setInfo] = useState(null)

  // useEffect runs once when the component loads
  useEffect(() => {

    // Define an async function (React useEffect cannot be async directly)
    async function load() {

      // Make a GET request to your Amplify API route /born
      const req = get({ apiName: 'cryptoapi', path: '/born' })

      // Wait for the full network response
      const res = await req.response

      // Parse the JSON body of the response
      const data = await res.body.json()

      // Store the GitHub data in state
      setInfo(data)
    }

    // Call 
    load()

  }, []) 

  // While data is loading, show a message
  if (!info) return <p>Loading GitHub info...</p>

  // Once data is loaded, display it
  return (
    <p>
      {/* Show the GitHub username */}
      The GitHub user {info.login} was born on{" "}

      {/* Format the created_at date into something readable */}
      {new Date(info.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}
    </p>
  )
}
