//file is used to config and control how the application interfaces with the Firebase service
//create separation between UI and app services being utilized

//initializeApp is used to set-up a firebase application instance to
import {initializeApp} from "firebase/app"; 
import{
  getAuth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider} from "firebase/auth";

  import {
  getFirestore, //initialize firestore database
  doc, //retrieve instance of documents inside firestore database
  getDoc, //get documents data
  setDoc // set documents data
  } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlN9EjqZmKdxTskCKJzyX3UQEnyusJYlw",
  authDomain: "e-commerce-project-1ed4c.firebaseapp.com",
  projectId: "e-commerce-project-1ed4c",
  storageBucket: "e-commerce-project-1ed4c.appspot.com",
  messagingSenderId: "105869427180",
  appId: "1:105869427180:web:7174ef822490eb66d040c9"
};

// initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//identifies the SDK that will be used to interact with the firebase application instance

const provider= new GoogleAuthProvider(); //initializes the authentication provider for the application
provider.setCustomParameters({
  prompt: "select_account" //whenever a user interacts with the authentication provider, the user is presented with the option to select which Google account to login with
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> {
  return signInWithPopup(auth, provider); //function returns the sign in as a popup to the user
}
export const signInWithGoogleRedirect =()=>{
  return signInWithRedirect(auth, provider); //function redirects the user to sign-in page
}
//create firestore database
export const db = getFirestore(); //pointer to database
export const createUserFromAuth = async(userAuth, additionalInfo={})=>{
  //identify an existing document reference 
  const userDocRef = doc(db, "users", userAuth.uid);
  //database, name of collection in firestore, document id value (uid is a unique value in the authorization object)
  const userSnapshot = await getDoc(userDocRef); //this returns an object that reads the document
  if(!userSnapshot.exists()){
    //if document reference does not exist in the database, set document to store in the firestore database using setDoc()
    const {displayName, email} = userAuth; //destructure data from userAuth() object generated on account creation
    const dateCreated = new Date();
    //creates a date of when the account was created
    try{
      //set the user data to the current document reference of the collection using the newly collected data (name, email, date created)
      await setDoc(userDocRef, {
        displayName,
        email,
        dateCreated,
        ...additionalInfo
      });
      //this creates a reference to the user in the firestore database
    }
    catch (err){
      //if there was an error while storing data, print error message
      console.log(err.message)
    }
    return userDocRef;

  }
}
export const createAuthUserWithEmailAndPassword=async (email, password)=>{
  if(!email || !password) return;
  //this will only call the createUserWithEmailAndPassword Firebase method if it receives an email OR password
  return await createUserWithEmailAndPassword(auth, email, password);

}
export const signInAuthUserWithEmailAndPassword = async(auth, email, password)=>{
  if(!email || !password) return;
  //this will only call the createUserWithEmailAndPassword Firebase method if it receives an email OR password
  return await signInWithEmailAndPassword(auth, email, password);
}
