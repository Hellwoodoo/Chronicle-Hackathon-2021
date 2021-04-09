import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors, useFormik } from 'formik';
import './Main.css';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6



export function Main(props) {

    const [name, setName] = useState('')
    const [work, setWork] = useState('')
    const [brk, setBrk] = useState('')

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('worktime', work);
        localStorage.setItem('breaktime', brk);
      }, [brk, work, name]);
     
    const onChange1 = event => setName(event.target.value);
    const onChange2 = event => setWork(event.target.value);
    const onChange3 = event => setBrk(event.target.value);


return (
    <Formik>
        {({ errors, touched, isSubmitting }) => (
            <Form>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
                </style>
                <div className="Main-background">   
                    <h1 className="Main">Mem5</h1>
                    <p className="Main-slogan">Memorise then rest for 5</p>
                    <div className="form-transitions">
                        <div>
                            
                            <label className="Main-label-one">Enter your name: </label>
                            <input className="label-one-form" type="text" onChange={onChange1} value={name}/>
                        </div>
                        <div>
                            <label className="Main-label-two">How long do you want your timer to be (mins)?</label>    
                            <input className="label-two-form" type="number" onChange={onChange2} value={work}/>
                        </div>
                        <div>
                            <label className="Main-label-three">How long do you want your break to be (mins)?</label>
                            <input className="label-three-form" type="number" onChange={onChange3} value={brk}/>
                        </div>
                    </div>
                    <div className="Main-square"></div>
                    <div className="Main-para">
                        <p>Mem5 is a productivity timer app that seeks to reward the user with media of their favourite interests </p>
                    </div>
                    <div className="Main-form">
                        <h2 className="form-transitions">Form</h2>
                    </div>
                    <div className="Main-rectangle"></div>
                    <div className="Main-time">
                        <p>25:00</p>
                    </div>
                    <div className="steps-para">
                        <p>Just follow these steps:</p>
                            <ol>
                                <li>Fill out the form below</li>
                                <li>Enter your name</li>
                                <li>Allocate the duration of your timer + break</li>
                                <li>Select your interests (be specific!)</li>
                                <li>Click submit and start working!</li>
                            </ol>
                    </div>
                    <div>
                        <Link to="/Time" className="mem5-timer">Submit</Link>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
)
}