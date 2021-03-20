import React, { useContext, useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../config.firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF, faGoogle,

} from "@fortawesome/free-brands-svg-icons"
import './Login.css'
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";



if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
  });
 
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const isSignedIn = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };

        setLoggedInUser(isSignedIn)
        setUser(isSignedIn);
        history.replace(from);
        // console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  const handlefbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const isSignedIn = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(isSignedIn)
        setUser(isSignedIn);
        history.replace(from);
        console.log(displayName, email, photoURL);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        console.log(errorCode, errorMessage, email);
      });
  };

  const handleGoogleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignIn: false,
          name: "",
          email: "",
          password: "",
          photo: "",
          success: false,
        };
        setUser(signOutUser);
      });
    console.log((err) => {});
  };

  const handleBlur = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)

    let isFromValid = true;

    if (e.target.name === "email") {
      isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwoedHasNumber = /\d{1}/.test(e.target.value);
      isFromValid = isPasswordValid && passwoedHasNumber;
    }
    if (isFromValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    // console.log(user.email && user.password);
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;

          // console.log(res)
          setUser(newUserInfo);
          updateUsrInfo(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          console.log(error);
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;

          // console.log(res)
          setUser(newUserInfo);
          console.log("sign in user info ", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          console.log(error);
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  const updateUsrInfo = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
        photoURL: name,
      })
      .then(function () {
        // Update successful.
        console.log("user name update successfully");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>

      {user.isSignIn && (
        <div>
         <h1 style={{color:'green'}}>User Created Successfully</h1>
        </div>
      )}
      {/* login From creation */}

      <h1>Creat An Account </h1>
     

      <form onSubmit={handleSubmit} className="form-container">
        {newUser && (
          <input
          class="form-control" 
            type="text"
            name="name"
            onBlur={handleBlur}
            placeholder="Your name"
            id=""
          />
        )}

        <br />
        <input
        class="form-control" 
          type="email"
          onBlur={handleBlur}
          name="email"
          placeholder="Enter your Email"
          required
          id=""
        />
        <br />
        <input
        class="form-control" 
          type="password"
          onBlur={handleBlur}
          placeholder="Password"
          required
          name="password"
          id=""
        />
        <p style={{ color: "red"}}>{user.error}</p>
    
        <input type="submit" value={newUser ? "Sign Up " : "Sign In"} />
      </form>

      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
        id=""
      />
      <label htmlFor="newUser"> New User for Sign up</label>

      {user.success && (
        <p style={{ color: "green", fontSize: "20px" }}>
          User {newUser ? "created" : "Logged in"} Successfully
        </p>
      )}

            <br/>
      {/* G and F sign  */}

      {user.isSignIn ? (
        <button className="btn btn-primary" type="button"   onClick={handleGoogleSignOut}>  <FontAwesomeIcon className="icon-g"  icon={faGoogle} /> Google sign out</button>
      ) : (
        <button className="btn btn-primary" type="button"  onClick={handleGoogleSignIn}>  <FontAwesomeIcon className="icon-g"  icon={faGoogle} /> Google sign in</button>
      )}
      <br/>
      <br />
      <button className="btn btn-primary" type="button" onClick={handlefbSignIn}> <FontAwesomeIcon className="icon-f"  icon={faFacebookF} /> Sign in Facebook</button>
    </div>
  );
};

export default Login;
