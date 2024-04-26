import { Formik, Form, Field } from 'formik'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function FormUser(){

    return(
        <div className='flex justify-center w-3/6 h-4/6 '>
            <Formik
            initialValues={{
                userName:'',
                email:'',
                message:''}}
                validate={values =>{
                    const errors = {};
                    if(!values.email | !values.userName){
                        errors.email = 'Required';
                    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur
                    })=>(
                        <Form  className="flex flex-col h-[100%] w-5/6 justify-center items-center ">
                        
                        <TextField id="userName" className="inline-block m-6 p-6 " name="userName" label="Username" margin="normal" error helperText="Incorrect entry." onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}/>
  
                        <TextField  id="email" className="block m-6" name="email" label="Email"  error helperText="Incorrect entry." type="email" margin="normal"/>   
             
                        <TextField id="message" className="block m-6" name="message" label="Message" error helperText="Incorrect entry." multiline fullWidth rows={6} minRows={4} maxRows={6} margin="normal" />

                        <Button className="bg-slate-500" type="submit" variant="contained">Submit</Button>

                        
                    </Form>
                    )
                       

                    }
                    
            </Formik>
        </div>
    )
}

export default FormUser;