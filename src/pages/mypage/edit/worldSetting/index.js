import Header from "../../../../component/header/Header";
import EditSideMenu from "../../../../component/editMenu/EditSideMenu";
import Link from "next/link";
import Styles from "../../../../styles/Edit.module.css";

const Character = (props) => {
  return (
    <>
      <Header></Header>
      <div className={Styles.template}>
        <div className={Styles.sideMenu}>
          <EditSideMenu></EditSideMenu>
        </div>

        <main className={Styles.main}>
          <div className={Styles.helper}>
            <span className={Styles.text}>すべての世界観</span>
          </div>
          <div>
            <div className={Styles.listTemplate}>
              <div className={Styles.side}>
                <div className={Styles.inside}>
                  <div>
                    <div className={Styles.listRoot} slot="side">
                      <div className={Styles.head}>
                        <div className={Styles.folder}>
                          <img src="" />
                        </div>
                        <div className={Styles.titleEllips}>
                          すべての登場人物
                        </div>
                      </div>
                      <div className={Styles.draggable}>
                        <span>
                          <div>
                            <li className={Styles.listItem}>
                              <img src="" alt="image" className={Styles.icon} />
                              <span className={Styles.label}>あ</span>
                            </li>
                          </div>
                        </span>
                      </div>
                      <Link href="/mypage/edit/worldSetting/RuleCreat">
                        <button className={Styles.buttonSolid}>
                          +新しい登場人物を追加する
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.main}>
                <div className={Styles.mainScroll}>
                  <div className={Styles.inside}>
                    <div className={Styles.worldviewDetail}>
                      <div>
                        <img alt="image" className={Styles.image} src="" />
                      </div>
                      <div className={Styles.detailContent}>
                        <div className={Styles.attributeList}>
                          <div>
                            <span className={Styles.name}>名前:</span>
                            <span className={Styles.value}>aaaa</span>
                          </div>
                          <div>
                            <span className={Styles.name}>時代:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                          <div>
                            <span className={Styles.name}>法律:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                        </div>
                        <div className={Styles.attributeList}></div>
                      </div>
                      <div>
                        <div>
                          <a>
                            <button className={Styles.floatingBtnAdd}>
                              <center>
                                <img src="" className={Styles.dNone} />
                              </center>
                              編集する
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Character;
