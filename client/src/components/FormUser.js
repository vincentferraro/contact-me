import { Formik, Form, Field } from 'formik'

function FormUser(){

    return(
        <div>
            <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                message:''}}
                validate={values =>{
                    const errors = {};
                    if(!values.email | !values.firstName | !values.lastName ){
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
                        <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field id="firstName" name="firstName" placeholder="Jane" onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}/>
             {errors.email && touched.email && errors.email}
                        <label htmlFor='lastName'>Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Doe"/>
                        <label htmlFor='email'>Email</label>
                        <Field id="email" name="email" placeholder="email" type="email"/>
                        <button type="submit">Submit</button>
                    </Form>
                    )
                       

                    }
                    
            </Formik>
        </div>
    )
}

export default FormUser;