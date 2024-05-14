    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { Firestore, getFirestore } from "firebase/firestore";
    import {getStorage,ref} from "firebase/storage";
    const firebaseConfig = {    
    // Your Firebase configuration
    apiKey: "AIzaSyC-342KDllpzBEwKyGEffmX5X77i43WqJs",
    authDomain: "nifty-yeti-387411.firebaseapp.com",
    projectId: "nifty-yeti-387411",
    storageBucket: "nifty-yeti-387411.appspot.com",
    messagingSenderId: "109954898526",
    appId: "1:109954898526:web:ff16fbbfa2e80c8ed4f2cf",
    measurementId: "G-KTSGVW7NBJ"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app); // Initialize Firebase Authentication
    const db = getFirestore(app);
    const storage = getStorage(app);
    const Ref=ref();
    export { app, auth ,db,firebaseConfig};
