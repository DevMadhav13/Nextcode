import { TextField, Typography,Card, Button, } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Ecourse } from 'store';

export function EditcourseU(props: { onClick: (arg0: string, arg1: string, arg2: string , arg3: string) => void; }) {
    const editableCousrse = useRecoilValue(Ecourse)
    // console.log(editableCousrse.title);
    const ide = editableCousrse._id
    const [title, settitle] = useState<string>(editableCousrse.title);
    const [description , setdescription]=useState<string>(editableCousrse.description);
    const [image , setImage] = useState<string>(editableCousrse.imageLink)

    
    
        return <div style={{display: 'flex', justifyContent: 'center', }}>  
            
            <Card style={{width: 400, padding : 20, margin:100}}>
                <div >                 
                    <h1 style={{display: 'flex', justifyContent: 'center', padding: 10}}>edit course here</h1>
                </div>
                <div>
                <TextField id="outlined-basic"  variant="outlined" defaultValue= {title} fullWidth 
                        onChange={(e)=>{
                            settitle(e.target.value) 
                         }}  />
                <br/><br/>        
                <TextField id="outlined-basic"  label="Discription" defaultValue= {description}  fullWidth
                         onChange={(e)=>{
                            setdescription(e.target.value);
                        }}/>
                         <br/><br/>        
                <TextField id="outlined-basic"  label="Image link" defaultValue= {image}  fullWidth
                    onChange={(e)=>{
                    setImage(e.target.value);
                }}/>
                <br/><br/>
                <Button 
                    variant="contained"
                    onClick={()=>{
                        props.onClick(ide,title,description,image)                                                     
                    }}
                    >Add course</Button>
                </div>        
            </Card>


    </div>

}