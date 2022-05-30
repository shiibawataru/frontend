import React, { useContext, useRef } from "react";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";
import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"> MERN SNS</h3>
          <span className="loginDesc">SNSへようこそ</span>
        </div>
        <div className="loginRight">
          {/* <form action=""> */}
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMessage">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <input type="submit" value="ログイン" className="loginButton" />
            {/* <button
                type="button"
                className="loginButton"
                onClick={() => onLogin()}
              >
                ログイン
              </button> */}
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </form>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
