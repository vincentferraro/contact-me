import { Formik, Form, Field } from 'formik'

function FormUser(){

    return(
        <div className='w-3/6 h-4/6 border-solid border-2 border-black'>
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
                        <Form  className="flex flex-col justify-center items-center border-2">
                        {/* <label htmlFor='firstName'>First Name</label> */}
                        <Field id="userName" name="userName" placeholder="USERNAME" onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}/>
             {errors.email && touched.email && errors.email}
                        {/* <label htmlFor='email'>Email</label> */}
                        <Field id="email" name="email" placeholder="email" type="email"/>
                        <Field id="message" name="message" placeholder="Message" as="textarea"/>
                        
                        <button type="submit">Submit</button>
                    </Form>
                    )
                       

                    }
                    
            </Formik>
        </div>
    )
}

export default FormUser;