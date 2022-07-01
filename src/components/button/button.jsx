import "./button.styles.scss";
//inverted button
//default button
//Google sign in
const button_type_classes={
  google: "google-sign-in",
  inverted: "inverted"
}
const Button=({text, buttonType, ...otherProps})=>{
  return (<> 
    <button className={`button-container ${button_type_classes[buttonType]}`} {...otherProps} >{text}</button>
  </>
  )
}
export {Button};