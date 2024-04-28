import { Formik, Form } from 'formik'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import * as yup from 'yup'

const validationSchema = yup.object({
    username: yup.string('Enter your username').required('username is required'),
    email: yup.string('Enter your email').required('email is required'),
    message: yup.string('Enter your message').required('message is required'),
})



function FormUser(){

    
    return(
        <div className='flex justify-center w-3/6 h-4/6 '>
            <Formik
            initialValues={{
                username:'',
                email:'',
                message:''}}
            validationSchema={validationSchema}
            validate={values =>{
                    const errors = {};
                    if(!values.email | !values.username){
                        errors.email = 'Required';
                    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        errors.email = 'Invalid email address';
                    }
                    console.log(errors)
                    return errors;
                }}
            onSubmit={(values) => {
               console.log('Submitting...',values)
                  }}>
                    {(props)=>(
                        
                        <Form  className="flex flex-col h-[100%] w-5/6 justify-center items-center " onSubmit={props.handleSubmit}>
                        
                        <TextField id="username" className="inline-block m-6 p-6 " name="username" label="username" margin="normal" 
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.username}/>
  
                        <TextField  id="email" className="block m-6" name="email" label="Email"   type="email" margin="normal" 
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}/>   
             
                        <TextField id="message" className="block m-6" name="message" label="Message" multiline fullWidth minRows={4} maxRows={6} margin="normal"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.message} />

                        <Button className="bg-slate-500" type="submit" variant="contained">Submit</Button>

                        
                    </Form>
                    )
                       

                    }
                    
            </Formik>
        </div>
    )
}

export default FormUser;