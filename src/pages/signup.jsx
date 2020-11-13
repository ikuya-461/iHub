import Link from "next/link";
import Styles from "../styles/Signup.module.css";

export default function login(props) {
  return (
    <>
      <div className={Styles.signup}>
        <div className={Styles.center}>
          <Link href="/">
            <a>
              <img src="/iHub_logo.png" height="60px" alt="logo" />
            </a>
          </Link>
          <hr />
          <div className={Styles.signupform}>
            <form action="">
              <h1>新規会員登録</h1>
              <div>
                <label htmlFor="">登録メールアドレス</label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div>
                <label htmlFor="">登録メールアドレス(確認用)</label>
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
              <p className={Styles.attention}>
                ※ パスワードは7文字以上かつ大文字英字が1つ以上必須です
              </p>
              <button className={Styles.submit}>新規会員登録する</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
