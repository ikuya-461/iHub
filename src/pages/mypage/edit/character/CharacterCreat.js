import Header from "../../../../component/header/Header";
import EditSideMenu from "../../../../component/editMenu/EditSideMenu";
import Link from "next/link";
import Styles from "../../../../styles/Edit.module.css";

const CharacterCreat = (props) => {
  return (
    <>
      <Header></Header>
      <div className={Styles.template}>
        <div className={Styles.sideMenu}>
          <EditSideMenu></EditSideMenu>
        </div>
        <main className={Styles.main}>
          <div className={Styles.helper}>
            <span className={Styles.text}>新しい登場人物を登録する</span>
          </div>
          <div className={Styles.createpage}>
            <div className={Styles.view}>
              <div className={Styles.title}>イメージ画像</div>
              <div className={Styles.imageSelector}>
                <div className={Styles.previewCell}>
                  <img
                    src="/mypage_ico.png"
                    alt="image"
                    className={Styles.preview}
                  />
                  <canvas
                    width="1000"
                    height="1000"
                    className={Styles.preset}
                  ></canvas>
                </div>
                <div className={Styles.buttonLocal}>
                  <label className={Styles.buttonL}>
                    ローカルから選択
                    <input id="" type="file" className={Styles.C}/>
                  </label>
                </div>
                <div className={Styles.buttonPreset}>
                  <button className={Styles.buttonR}>プリセットから選択</button>
                </div>
              </div>
            </div>
            <div className={Styles.characterForm}>
              <div className={Styles.form}>
                <div className={Styles.textField}>
                  <label className={Styles.label}>名前 ※必須</label>
                  <div className={Styles.inputTextGroup}>
                    <input
                      type="text"
                      placeholder="登場人物の名前を入力してください。"
                      className={Styles.C}                      id="input-名前 ※必須"
                    />
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>別名・あだ名</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="登場人物のあだ名や別名を入力してください。"
                      className={Styles.C}                      id="input-別名・あだ名"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>役職</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="作品内での役職を入力してください。"
                      className={Styles.C}                      id="input-役職"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>性別</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="性別を入力してください。"
                      className={Styles.C}                      id="input-性別"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>年齢</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="年齢を入力してください。"
                      className={Styles.C}                      id="input-年齢"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>誕生日</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="誕生日を入力してください。"
                      className={Styles.C}                      id="input-誕生日"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>血液型</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="血液型を入力してください。"
                      className={Styles.C}                      id="input-血液型"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>身長</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="身長を入力してください。"
                      className={Styles.C}                      id="input-身長"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>体重</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="1"
                      type="text"
                      placeholder="体重を入力してください。"
                      className={Styles.C}                      id="input-体重"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>性格</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="性格を入力してください。"
                      className={Styles.C}                      id="input-性格"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>個性</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="個性を入力してください。"
                      className={Styles.C}                      id="input-個性"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>特技</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="特技を入力してください。"
                      className={Styles.C}                      id="input-特技"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>能力・スキル</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="能力・スキルを入力してください。"
                      className={Styles.C}                      id="input-能力・スキル"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>見た目</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="見た目を入力してください。"
                      className={Styles.C}                      id="input-見た目"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>生い立ち</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="登場人物の歴史や生い立ちを入力してください。"
                      className={Styles.C}                      id="input-生い立ち"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>背景</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="作品に登場する背景を入力してください。"
                      className={Styles.C}                      id="input-背景"
                    ></textarea>
                  </div>
                </div>
                <div className={Styles.textField}>
                  <label className={Styles.label}>その他</label>
                  <div className={Styles.inputTextGroup}>
                    <textarea
                      rows="4"
                      type="text"
                      placeholder="その他のメモを入力してください。"
                      className={Styles.inputC}
                      id="input-その他"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button disabled="disabled" className={Styles.buttonC}>
              作成する
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default CharacterCreat;
