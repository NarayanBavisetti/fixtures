import React ,{useState} from 'react'
import { Form , Button , Card} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { db } from '../firebase'

const Signup = () => {

    const [username, setUsername] = useState('');
    const handleOnChange = (e) => {
        setUsername(e.target.value);
    };

    const [password, setPassword] = useState('');
    const pass = (e) => {
        setPassword(e.target.value);
    };
    const firestoremaisave = (e) => {
        if (username !== '' && password !== '' ) {
            e.preventDefault();
            db.collection("Users").add({
                username: username,
                password: password,

            })
                .then(() => {
                    alert("Account Created!");
                })
                .catch((error) => {
                    alert(error.message);
                });

        }
        else {
            alert("Please fill in all the details!");
        }

    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                       <Form.Group id="email">
                        
                            <Form.Label>E-mail</Form.Label>
                             <Form.Control type="email" onChange={handleOnChange} value={username} required /> 
                         </Form.Group> 
                    </Form> 
                    <Form>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={pass} value={password} required />
                        </Form.Group>
                    </Form>
                    <Form>
                        {/* <Form.Group id="password">
                            <Form.Label>password confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordconfirmRef} required />
                        </Form.Group> */}
                        <Button className="w-100" type="submit" onClick={firestoremaisave}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to={"/Login"} >Log in</Link>
            </div>
        </>
    )
}
export default Signup