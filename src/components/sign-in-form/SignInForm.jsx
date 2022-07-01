import FormInput from "../form-input/form-input";
import {Button} from "../button/button";
import {useState} from "react";
import "./SignInForm.styles.scss";
import { signInAuthUserWithEmailAndPassword, createUserFromAuth, signInWithGooglePopup } from "../../firebase.utils";

const defaultFormFields={ //object is created when individual values are linked to a similiar logic
  //use case: form input values
  email:"",
  password:""
}
const SignInForm=()=>{
  const[formFields, setFormFields]=useState(defaultFormFields);
  const{email, password}=formFields;

  const resetFormFields=()=>{
    setFormFields(defaultFormFields);
  }
  const signInWithGoogle=async()=>{
    const{user}=await signInWithGooglePopup();
    await createUserFromAuth(user);
  }
  const handleChange=(event)=>{
    const{name, value}=event.target;
    setFormFields({...formFields,[name]:value});
  };
  //generate user document within the Firestore database
  const handleSubmitForm= async(event)=>{
    event.preventDefault();
    try{
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    }
    catch(err){
      console.log(err);
     
    };
  }
  
  return(
  <div className="sign-in-container">
    <h2>Already have an account</h2>
    <span>Sign in with your email and password</span>
    <FormInput
      label="Email"
      type="email"
      required
      onChange={handleChange} 
      name="email"
      value={email}
    />
    <FormInput
      label="Password"
      type="password"
      required
      onChange={handleChange}
      name="password" 
      value={password}
    />
    <div className="buttons-container">
      <Button
        type="submit"
        text="Sign In"
        onClick={handleSubmitForm}
      />
      <Button
        text="Google Sign In"
        onClick={signInWithGoogle}
        buttonType="google"
      />
    </div>
  </div>
  )}

export default SignInForm;
