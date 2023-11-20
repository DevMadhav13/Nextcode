import { Button, Card, TextField } from "@mui/material"
import { useState } from 'react';

export function Signin(props :{onClick: (username: string, password: string) => void}){
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    
    return <div style={{display: 'flex', justifyContent: 'center', }}>  
            
            <Card style={{width: 400, padding : 20, margin:100}}>
                <div >
                    <h1 style={{display: 'flex', justifyContent: 'center', padding: 10}}>Welcome Back , Signin below</h1>
                </div>
                <div>
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                <br/><br/>        
                <TextField id="outlined-password-input" label="Password"  type="password" fullWidth 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                <br/><br/>
                <Button variant="contained" 
                    onClick={()=>{
                        props.onClick(username, password)                           
                }}
                                        
                >Signin Now</Button>
                </div>        
            </Card>


    </div>
}

