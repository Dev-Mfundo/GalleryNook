import { useState } from "react";

function AuthUser() {
  const [currentForm, setCurrentForm] = useState("signIn");

  const switchToSignUp = () => {
    setCurrentForm("signUp");
  };

  const switchToSignIn = () => {
    setCurrentForm("signIn");
  };

  const switchToForgotPassword = () => {
    setCurrentForm("forgotPassword");
  };
    //NB LOADER B4 DB-CONNECT
  return (
    <div className="auth-page">
      <div className="form-container">
        {currentForm === "signIn" && (
          <>
            <h2>Welcome Back</h2>
            <p id="form-phrase">Access your personalized gallery by signing in to GalleryNook today.</p>
            <p id="response"></p>
            <div id="loader" className="loader"></div>
            <form id="signInForm">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email" name="email" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" autoComplete="on" required />
                <a href="#" onClick={switchToForgotPassword}>Forgotten Password?</a>
              </div>
              <button type="submit" className="auth-btn">Sign in</button>
            </form>
            <p className="switch-auth">Don&apos;t have an account? <a href="#" onClick={switchToSignUp}>Sign up</a></p>
          </>
        )}

        {currentForm === "signUp" && (
          <>
            <h2>Create Your Account</h2>
            <p id="form-phrase">Join GalleryNook and start showcasing your creativity with stunning galleries.</p>
            <p id="response"></p>
            <div id="loader" className="loader"></div>
            <form id="signUpForm">
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="full-name" name="name" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email" name="email" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Create password" name="password" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm password" name="confirm-password" autoComplete="on" required />
              </div>
              <button type="submit" className="auth-btn">Sign up</button>
            </form>
            <p className="switch-auth">Already have an account? <a href="#" onClick={switchToSignIn}>Sign in</a></p>
          </>
        )}

        {currentForm === "forgotPassword" && (
          <>
            <h2>Forgot Your Password?</h2>
            <p id="form-phrase">Please input the email you signed up with so we can send you a link to reset your password.</p>
            <p id="response"></p>
            <div id="loader" className="loader"></div>
            <form id="forgotPasswordForm">
              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="email" name="email" required />
              </div>
              <button type="submit" className="auth-btn">Submit</button>
            </form>
            <p className="switch-auth"><a href="#" onClick={switchToSignIn}>Return to Sign In</a></p>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthUser;
