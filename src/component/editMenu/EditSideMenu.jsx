import Styles from "./EditSideMenu.module.css";
import Link from "next/link";

export default function editSideMenu() {
  return (
    <>
      <div className={Styles.pc}>
        <div className={Styles.sideMenuContentInfometion}>
          <div>
            <img src="/iHub_logo.png" alt="" className={Styles.image} />
            <div className={Styles.text}>知らぬが仏、見ぬ破秘事</div>
            <div className={Styles.band}>編集する</div>
          </div>
        </div>
        <div className={Styles.link}>
          <Link href="/mypage/edit/Thema">
            <a className={Styles.link}>
              <span className={Styles.text}>
                <p>テーマ</p>
              </span>
            </a>
          </Link>
        </div>
        <div className={Styles.link}>
          <Link href="/mypage/edit/plot">
            <a className={Styles.link}>
              <span className={Styles.text}>
                <p>プロット</p>
              </span>
            </a>
          </Link>
        </div>
        <div className={Styles.link}>
          <Link href="/mypage/edit/character">
            <a className={Styles.link}>
              <span className={Styles.text}>
                <p>キャラクター</p>
              </span>
            </a>
          </Link>
        </div>
        <div className={Styles.link}>
          <Link href="/mypage/edit/worldSetting">
            <a className={Styles.link}>
              <span className={Styles.text}>
                <p>世界設定</p>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
