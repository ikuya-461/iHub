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
            <span className={Styles.text}>各シーンの登場人物を登録する</span>
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
                      <Link href="/mypage/edit/character/CharacterCreat">
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
                    <div className={Styles.characterDetail}>
                      <div className={Styles.headw}>
                        <div className={Styles.image}>
                          <img
                            data-v-53f172b9=""
                            src=""
                            alt="image"
                            className={Styles.imge}
                          />
                        </div>
                        <div className={Styles.summary}>
                          <div className={Styles.main}>
                            <div>
                              <span className={Styles.name}>役職:</span>
                              <span className={Styles.value}>-</span>
                            </div>
                            <div>
                              <span className={Styles.name}>名前:</span>
                              <span className={Styles.value}>あ</span>
                            </div>
                            <div>
                              <span className={Styles.name}>別名:</span>
                              <span className={Styles.value}>-</span>
                            </div>
                          </div>
                          <div className={Styles.main2}>
                            <div>
                              <div>
                                <span className={Styles.name}>年齢:</span>
                                <span className={Styles.value}>-</span>
                              </div>
                              <div>
                                <span className={Styles.name}>性別:</span>
                                <span className={Styles.value}>-</span>
                              </div>
                              <div>
                                <span className={Styles.name}>誕生日:</span>
                                <span className={Styles.value}>-</span>
                              </div>
                            </div>
                            <div>
                              <div>
                                <span className={Styles.name}>血液型:</span>
                                <span className={Styles.value}>-</span>
                              </div>
                              <div>
                                <span className={Styles.name}>身長:</span>
                                <span className={Styles.value}>-</span>
                              </div>
                              <div>
                                <span className={Styles.name}>体重:</span>
                                <span className={Styles.value}>-</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={Styles.main3}>
                        <div>
                          <div>
                            <span className={Styles.name}>年齢:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                          <div>
                            <span className={Styles.name}>性別:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                          <div>
                            <span className={Styles.name}>誕生日:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className={Styles.name}>血液型:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                          <div>
                            <span className={Styles.name}>身長:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                          <div>
                            <span className={Styles.name}>体重:</span>
                            <span className={Styles.value}>-</span>
                          </div>
                        </div>
                      </div>
                      <div className={Styles.attributeList}></div>
                      <div className={Styles.attributeList}></div>
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
