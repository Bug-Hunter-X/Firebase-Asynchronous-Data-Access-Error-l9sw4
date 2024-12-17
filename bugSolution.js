The solution uses promises to ensure that the data is loaded before accessing it. The `.then()` method is used to handle the resolved promise and extract data from the snapshot.

```javascript
// bugSolution.js
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const docRef = doc(db, "yourCollection", "yourDocument");

getDoc(docRef).then((docSnapshot) => {
  if (docSnapshot.exists()) {
    console.log("Document data:", docSnapshot.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```