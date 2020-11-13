import Header from "../../../../component/header/Header";
import EditSideMenu from "../../../../component/editMenu/EditSideMenu";
import Link from "next/link";
import Styles from "../../../../styles/Edit.module.css";

const plotEdit = (props) => {
  return (
    <>
      <Header></Header>
      <div className={Styles.template}>
        <div className={Styles.sideMenu}>
          <EditSideMenu></EditSideMenu>
        </div>

        <main className={Styles.main}>
          <div className={Styles.helper}>
            <span className={Styles.text}>物語のプロットを作成する</span>
          </div>
          <div>
            <div className={Styles.plotLst}>
              <div className={Styles.containerFluid}>
                <div className={Styles.row}>
                  <div>
                    <div className={Styles.plotgroupHeader}>
                      <div className={Styles.boxTitle}>
                        <div className={Styles.kishotenketsu}>- 起 -</div>
                        <textarea
                          placeholder="ここに物語のテーマを入力してください。"
                          className={Styles.textareaTheme}
                        ></textarea>
                      </div>
                    </div>
                    <div className={Styles.grid}>
                      <div className={Styles.item}>
                        <div className={Styles.plotItemContent}>
                          <textarea
                            placeholder="プロットの内容をここに記入"
                            className={Styles.plotCard}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Styles.plotgroupHeader}>
                      <div className={Styles.boxTitle}>
                        <div className={Styles.kishotenketsu}>- 承 -</div>
                        <textarea
                          placeholder="ここに物語のテーマを入力してください。"
                          className={Styles.textareaTheme}
                        ></textarea>
                      </div>
                    </div>
                    <div className={Styles.grid}>
                      <div className={Styles.item}>
                        <div className={Styles.plotItemContent}>
                          <textarea
                            placeholder="プロットの内容をここに記入"
                            className={Styles.plotCard}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Styles.plotgroupHeader}>
                      <div className={Styles.boxTitle}>
                        <div className={Styles.kishotenketsu}>- 転 -</div>
                        <textarea
                          placeholder="ここに物語のテーマを入力してください。"
                          className={Styles.textareaTheme}
                        ></textarea>
                      </div>
                    </div>
                    <div className={Styles.grid}>
                      <div className={Styles.item}>
                        <div className={Styles.plotItemContent}>
                          <textarea
                            placeholder="プロットの内容をここに記入"
                            className={Styles.plotCard}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={Styles.plotgroupHeader}>
                      <div className={Styles.boxTitle}>
                        <div className={Styles.kishotenketsu}>- 結 -</div>
                        <textarea
                          placeholder="ここに物語のテーマを入力してください。"
                          className={Styles.textareaTheme}
                        ></textarea>
                      </div>
                    </div>
                    <div className={Styles.grid}>
                      <div className={Styles.item}>
                        <div className={Styles.plotItemContent}>
                          <textarea
                            placeholder="プロットの内容をここに記入"
                            className={Styles.plotCard}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={Styles.buttonArea}>
                    <button className={Styles.button}>
                      変更内容を保存する
                    </button>
                  </div>
                </div>
              </div>
              <div className={Styles.editorToast}>
                プロットグループが追加されました
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default plotEdit;
