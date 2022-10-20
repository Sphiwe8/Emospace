
import { collection, getDocs } from "firebase/firestore"; 

let list = [ ] ;
  function getQuotes (db, quotes)  {


  return new Promise (async ()=>{
    const querySnapshot = await getDocs(collection(db, quotes));
    querySnapshot.forEach((doc) => {
      list.push(doc.data()) ;
    });
    return list
  
  })

   
    

}




export {getQuotes}