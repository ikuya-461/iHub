import Link from "next/link";
import Styles from "../styles/Signin.module.css"

export default function login(props) {
  return (
    <>
      <div className={Styles.signin}>
        <div className={Styles.center}>
          <Link href="/">
            <a>
              <img src="/iHub_logo.png" height="60px" alt="logo" />
            </a>
          </Link>
          <hr />
          <div className={Styles.signupform}>
            <form action="">
              <div>
                <label htmlFor="">メールアドレス</label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div>
                <label htmlFor="">パスワード</label>
                <div>
                  <input type="password" />
                </div>
              </div>

              <button className={Styles.submit}>SignIn</button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}
