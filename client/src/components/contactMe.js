import { Avatar,Typography } from "@mui/material";


function ContactMe(){

    return(
    
    <div className="w-3/6 h-4/6 flex flex-col justify-center items-start">
        <div className=" flex flex-row justify-center w-[100%]">

        <Avatar alt="Vincent Ferraro" src="" sx={{width:110, height:110,bgcolor: "red"}}>VF</Avatar>  
        </div>
        <div className="flex flex-row items-baseline m-11 mt-5 ">
                
        <Typography className="text-2xl" fontSize={30}>Hi, I'm Vincent 👋</Typography>
        </div>

        <div className="border-solid  m-11">
            <Typography fontSize={30} >
                Full stack developper <b>NodeJs</b>, I can create amazing app with <b>React</b>, <b>PostgresSQL</b> and <b>MongoDB</b> .
    
            </Typography>
        </div>
        
    </div>
    )

}

export default ContactMe;