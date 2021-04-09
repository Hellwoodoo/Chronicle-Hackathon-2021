import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors, useFormik } from 'formik';
import { Route, Switch, BrowserRouter, Redirect, useLocation } from 'react-router-dom';
import SearchPage from './SearchPage'

export function Result(props) {

    return (
        <div>
            <SearchPage /> 
        </div>
    )
}

