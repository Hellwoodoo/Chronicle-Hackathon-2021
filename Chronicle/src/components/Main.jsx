import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors, useFormik } from 'formik';

export function Main(props) {

return (
    <Formik>
        {({ errors, touched, isSubmitting }) => (
            <Form>
                <div>   
                    <div>
                        <h1>Easy DD</h1>
                    </div>
                    <div>
                        <Link to="/Result">
                            <button>
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
)
}