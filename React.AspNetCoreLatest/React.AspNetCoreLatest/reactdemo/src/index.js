import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import './index.css';


////------------Understanding FORMS validation in React(using "yup" library)--------//////////



const EmployeeComponent = () => {
    const formik = useFormik({
        initialValues: {
            Id: '',
            Name: '',
            Location: '',
            Salary: '',
            EmailId: ''
        },
        validationSchema: yup.object({
            Name: yup.string().max(20, 'Employee name should not exceed 20 characters.').required('Please enter employee name.'),
            Location: yup.string().required('Please enter employee location.'),
            EmailId: yup.string().email('Invalid email address.').required('Please enter email id.')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div>
            <h2>New Employee Form..</h2>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id">Employee Id:</label>
                    <input type="text" name="Id" {...formik.getFieldProps("Id")}></input>
                </p>
                <p>
                    <label htmlFor="Name">Employee Name:</label>
                    <input type="text" name="Name" {...formik.getFieldProps("Name")}></input>
                    {formik.touched.Name && formik.errors.Name ? <span style={{ color: 'red' }}>{formik.errors.Name}</span> : null}
                </p>
                <p>
                    <label htmlFor="Location">Employee Location:</label>
                    <input type="text" name="Location" {...formik.getFieldProps("Location")}></input>
                    {formik.touched.Location && formik.errors.Location ? <span style={{ color: 'red' }}>{formik.errors.Location}</span> : null}
                </p>
                <p>
                    <label htmlFor="Salary">Employee Salary:</label>
                    <input type="text" name="Salary" {...formik.getFieldProps("Salary")}></input>
                </p>
                <p>
                    <label htmlFor="EmailId">Employee Email Id:</label>
                    <input type="text" name="EmailId" {...formik.getFieldProps("EmailId")}></input>
                    {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById("root"));
