import { Avatar,Typography } from "@mui/material";


function ContactMe(){

    return(
    
    <div className="w-3/6 h-4/6 border-solid border-2 flex flex-col justify-center items-start">
        <div className="flex flex-row items-baseline m-11">
        <Avatar  alt="Vincent Ferraro" src="" sx={{width:40, height:40,bgcolor: "red"}}>VF</Avatar>
        <Typography className="text-2xl m-5">Hi, I'm Vincent 👋</Typography>
        </div>

        <div className="border-solid border-red-400 border-2 m-11 ">
            <Typography>
                I'm full stack developper NodeJs, I can create amazing app with React and NodeJs, I use PostgresSQL.
                Don't hesitate to contact me for some question about my skills
            </Typography>
        </div>
        
    </div>
    )

}

export default ContactMe;