import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/iHub_logo.png" alt="" height="40px"  />
          </div>
        </Link>
      </div>
      <div>
        <Link href="/mypage">
          <div className={styles.mypageIcon}>
            <img src="/mypage_ico.png" height="40px" alt="" />
          </div>
        </Link>
      </div>
    </header>
  );
}
