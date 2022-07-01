import {signInWithGooglePopup, createUserFromAuth, signInWithGoogleRedirect, auth} from "../../../firebase.utils";
import {useEffect} from "react";
import SignInForm from "../../sign-in-form/SignInForm";
import {getRedirectResult} from "firebase/auth";
import SignUpForm from "../../sign-up-form/SignUpForm";

const Authentication = ()=>{
  //when the user is redirected back to the sign-in page, the sign-in component is remounted with the authorization object (useEffect)
  //useEffect is executed on component mount
  useEffect(()=>{
    const googleUserRedirect = async () =>{
      const response = await getRedirectResult(auth); //this retrieves response from the redirect => the authorization object containing user info from the redirect
      //auth is tracking the authentication state and value 
      if(response){ //if response is not null
      const userDocRef = await createUserFromAuth(response.user); // create the document reference for the user 
      }
    }
    googleUserRedirect();
  }, [])

  const googleUser = async () =>{
    const response = await signInWithGooglePopup(); //this notifies the user to login user Google account
    const userDocRef = await createUserFromAuth(response.user) //if the user id does not exist in the firestore database, the user information is added to the database
  }
  
  return(
    <div className="auth">
      <h1>Sign In Page</h1>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}
export default Authentication;
