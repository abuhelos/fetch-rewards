import React, {useContext} from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form'
import {Context} from '../context/Context'

export default function FormPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {occupations, states} = useContext(Context);

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                    placeholder = 'First Name' 
                    type="text"
                    {...register("firstName", {required: true, maxLength: 20})}
                    />
                    {errors.firstName && <p>Please Enter First Name. Max Length: 20.</p>}
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                    placeholder = 'Last Name' 
                    type="text"
                    {...register("lastName", {required: true, maxLength: 20})}
                    />
                    {errors.lastName && <p>Please check the Last Name. Max Length: 20</p>}
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input 
                    placeholder = 'Email' 
                    type="email"
                    {...register("email", 
                    {
                        required: true, 
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
                    })} 
                    />
                    {errors.email && <p>Please enter an Email.</p>}
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input 
                    placeholder = 'Password' 
                    type="password" 
                    {...register("password", {required: true, maxLength: 20})}
                    />
                    {errors.password && <p>Please check the password. Max Length: 20</p>}
                </Form.Field>
                <Form.Field>
                    <label>Occupation</label>
                    <select {...register("occupation", {required: true})}>
                        <option value="" disabled selected hidden>Select Occupation</option>
                        {occupations && occupations.map((occupation,i)=>{
                            return (
                                <option key={i} value={occupation}>{occupation}</option>
                            )
                        })}
                    </select>
                    {errors.occupation && <p>Please Select an Occupation.</p>}
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <select {...register("state", {required: true})}>
                    <option value="" disabled selected hidden>Select Occupation</option>
                        {states && states.map((state,i)=>{
                            return(
                                <option key={i} value={state.name}>{state.name}</option>
                            )
                        })}
                    </select>
                    {errors.state && <p>Please Choose a State.</p>}
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}