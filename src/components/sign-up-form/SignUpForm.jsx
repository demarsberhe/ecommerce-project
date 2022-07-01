import {useState} from "react";
import FormInput from "../form-input/form-input";
import {Button} from "../button/button";
import "./SignUpForm.styles.scss";
import { createAuthUserWithEmailAndPassword, createUserFromAuth } from "../../firebase.utils";
const defaultFormFields={ //object is created when individual values are linked to a similiar logic
  //use case: form input values
  displayName:"",
  email:"",
  password:"",
  confirmPassword:""
}

const SignUpForm = ()=>{
  const[formFields, setFormFields]=useState(defaultFormFields);
  const{displayName, email, password, confirmPassword}=formFields;

  const handleChange=(event)=>{
    const{name, value}=event.target;
    setFormFields({...formFields,[name]:value})
  }
  const resetFormFields=()=>{
    setFormFields(defaultFormFields);
  }
  //generate user document within the Firestore database
  const handleSubmitForm= async(event)=>{
    event.preventDefault();
    //verify passwords match
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    //confirm if individual has been authenticated using email and password
    //create userDoc from what createUserWithEmailAndPassword returns
    try{
      const response = await createAuthUserWithEmailAndPassword(email, password);
      await createUserFromAuth(response.user, {displayName});
      resetFormFields();
    }
    catch(err){
      if(err.code === "auth/email-already-in-use"){
        alert("An Account already exists with the provided email")
      } else{
        console.log("user creation encountered an error", err);
      }
      
    }
  }
  return(
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmitForm}>
        <FormInput 
        label="Display Name"
        type="text" 
        required 
        name="displayName" 
        onChange={handleChange} 
        value={displayName}/>
        <FormInput
        label="Email" 
        type="email"
        required 
        name="email" 
        onChange={handleChange} 
        value={email}/>
        <FormInput
        label="Password" 
        type="password" 
        required 
        name="password" 
        onChange={handleChange} 
        value={password}/>
        <FormInput
          label="Confirm Password" 
          type="password" 
          required 
          name="confirmPassword" 
          onChange={handleChange} 
          value={confirmPassword}
        />
        <Button
          text="Sign Up" 
          type="submit"
        />
      </form>
    </div>
  )
}
export default SignUpForm;