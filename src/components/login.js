import React ,{useState} from 'react'
import { Form , Button , Card} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase'

const Login = () => {

    const login = (username,password)  =>{
return auth.signInWithEmailAndPassword(username,password)
    }
    const logout = (username,password)  =>{
        return auth.logout
            }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form>
                       <Form.Group id="email">
                        
                            <Form.Label>E-mail</Form.Label>
                             <Form.Control type="email"  required /> 
                         </Form.Group> 
                    </Form> 
                    <Form>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  required />
                        </Form.Group>
                       <Link to={"/home"}> <Button className="w-100" type="submit" >Login Up</Button></Link>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Do not have an account?<Link to={"/features"} >Sign In</Link>
            </div>
        </>
    )
}
export default Login