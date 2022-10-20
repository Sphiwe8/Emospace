
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword} from "firebase/auth";

const handleSignUp =((auth, email, password)=>{

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    alert("Login successfully")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage) ;
      console.log(errorMessage);
      // ..
    });



}) 



const handleLogin =((auth, email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Login successfully")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });

})


export{handleSignUp,  handleLogin}