import { TextField, Typography,Card, Button, useThemeProps} from '@mui/material';
import { useState } from 'react';

export function AddCourse(props: { onClick: (arg0: string, arg1: string, arg2: string) => void; }) {

    const [title, settitle] = useState<string>("");
    const [description , setdescription]=useState<string>("")
    const [image , setImage] = useState<string>("")
    
        return <div style={{display: 'flex', justifyContent: 'center', }}>  
            
            <Card style={{width: 400, padding : 20, margin:100}}>
                <div >                 
                    <h1 style={{display: 'flex', justifyContent: 'center', padding: 10}}>Add course here, put down details</h1>
                </div>
                <div>
                <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth 
                        onChange={(e)=>{
                            settitle(e.target.value) 
                         }}  />
                <br/><br/>        
                <TextField id="outlined-basic"  label="Discription"  fullWidth
                         onChange={(e)=>{
                            setdescription(e.target.value);
                        }}/>
                         <br/><br/>        
                <TextField id="outlined-basic"  label="Image link"  fullWidth
                    onChange={(e)=>{
                    setImage(e.target.value);
                }}/>
                <br/><br/>
                <Button 
                    variant="contained"
                    onClick={()=>{
                        props.onClick(title,description,image)                                                     
                    }}
                    >Add course</Button>
                </div>        
            </Card>


    </div>

                }