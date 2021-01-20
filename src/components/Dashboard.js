import React, { useState } from "react"
import { Card, Button, Alert ,FormControl,InputGroup} from "react-bootstrap"
import { useAuth } from "../firebase/contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
 

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  const handleSubmit =(e)=>{
    e.preventdeafult()
    setNickname(e)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <InputGroup className="mb-3" onSubmit={()=>{handleSubmit()}}>
            <FormControl 
              placeholder="name"              
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button  variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>

        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
