import type { AppProps } from 'next/app';
import { Button, Typography } from "@mui/material";


export function Appbar(props :{onClick: (message:string) => void}) {
    
  return (
    <div>
      <div  style={{display:"flex",justifyContent: "space-between"}}>
      <div style={{margin:10, marginLeft:10}} >
            <Typography variant="h4">Coursera</Typography>
      </div>
      <div  >
        <Button 
          variant="contained"style={{margin:10, marginLeft:10}}
          onClick={()=>{
            const message = "logedoutClicked"
            props.onClick(message);
        }}         
          >Log out 
        </Button>
        <Button 
          variant="contained"style={{margin:10, marginLeft:10}}
          onClick={()=>{
            const message = "logInClicked"
            props.onClick(message);
        }}         
          >Login
        </Button>
      </div>
      </div>
    </div>
  );
}
