import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors, useFormik } from 'formik';

import './main.css';
export function Main(props) {

return (
    <body  style={{ backgroundImage: "url(/background.jpg)" }}>    
        <Formik>
    {({ errors, touched, isSubmitting }) => (
        <Form>
            <div>   
                <div>
                    <h1 class="main_h1">Welcome! </h1>
                        <h1 class="main_h1">Easy DD got all you need for investing</h1>
                </div>
                <div id="btn">
                    <Link to="/Result">
                        <button class="big-button">
                            Check out the market
                        </button>
                    </Link>
                </div>
                <div>
                </div>
            </div>
        </Form>
    )}
</Formik>
</body>


)
}