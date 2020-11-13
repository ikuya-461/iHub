import Header from "../../component/header/Header";
import Styles from "../../styles/Mypage.module.css";
import MypageContentsCard from "../../component/mypageContentsCardList/MypageContentsCard";

export default function Mypage(props) {
  return (
    <>
      <Header></Header>
      <div className={Styles.contents}>
        <main>
          <span className={Styles.ideaListField}>
            <div>
              <div className={Styles.selfIntroduction}>
                <img src="/mypage_ico.png" className={Styles.myImage} alt="" />
                <div className={Styles.selfText}>
                  <h1>自己紹介</h1>
                  <p>作品内容</p>
                </div>
              </div>
            </div>

            <nav className={Styles.mypageNav}>
              <ul>
                <div className={Styles.link}>
                  <a className={Styles.link} >
                    <span className={Styles.text}>
                      <p>テーマ</p>
                    </span>
                  </a>
                </div>
                <div className={Styles.link}>
                  <a className={Styles.link} >
                    <span className={Styles.text}>
                      <p>プロット</p>
                    </span>
                  </a>
                </div>
                <div className={Styles.link}>
                  <a className={Styles.link} >
                    <span className={Styles.text} >
                      <p>キャラクター</p>
                    </span>
                  </a>
                </div>
                <div className={Styles.link}>
                  <a className={Styles.link} >
                    <span className={Styles.text}>
                      <p>世界設定</p>
                    </span>
                  </a>
                </div>
              </ul>
            </nav>

            <div>
              <h2 className={Styles.listTitle}>作品設置一覧</h2>
              <div className={Styles.ideaList}>
                <div>
                  <MypageContentsCard></MypageContentsCard>
                </div>
              </div>
            </div>
          </span>
        </main>
      </div>
    </>
  );
}
