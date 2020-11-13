import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import EditSideMenu from "../../../component/editMenu/EditSideMenu";
import Styles from "../../../styles/Edit.module.css";
import firebase from "../../../common/firebase";
import { useRouter } from "next/router";

const Thema = (props) => {
  const [themaList, setThemaList] = useState(null);

  const router = useRouter();
  console.log(router.query);
  const documentId = router.query.Thema;
  console.log("ドキュメントID", documentId);

  const getThemaList = async () => {
    const themaListArray = await firebase
      .firestore()
      .collection("contents")
      .doc(documentId)
      .get();
    console.log("JSON", themaListArray.data());

    const themaArray = themaListArray.docs.map((x) => {
      return {
        id: x.id,
        data: x.data(),
      };
    });
    setThemaList(themaArray);
    return themaArray;
  };

  useEffect(() => {
    const result = getThemaList();
  }, [props]);

  return (
    <>
      <Header></Header>
      <div className={Styles.template}>
        <div className={Styles.sideMenu}>
          <EditSideMenu></EditSideMenu>
        </div>
        <main className={Styles.main}>
          <div className={Styles.helper}>
            <span className={Styles.text}>物語のテーマを設定する</span>
            <img src="" width="16px" height="16px" className={Styles.image} />
          </div>
          <div className={Styles.contentsMain}>
            <div slot="main" className={Styles.contentMain}>
              {themaList?.map((x, index) => (
                <form action="" key={index} id={documentId}>
                  <h2 className={Styles.h2}>この作品のテーマ</h2>
                  <div>
                    <p className={Styles.label}>
                      ◎ 執筆する小説のテーマを記入しましょう。
                    </p>
                    <div className={Styles.input}>
                      <textarea
                        className={Styles.textarea}
                        rows="5"
                        type="text"
                        name="thema"
                        value={x.data().thema}
                      ></textarea>
                    </div>
                  </div>
                  <h2 className={Styles.h2}>この作品の終着点</h2>
                  <div>
                    <p className={Styles.label}>
                      ◎ その小説の物語のゴールを明確にしましょう。
                    </p>
                    <div className={Styles.input}>
                      <textarea
                        className={Styles.textarea}
                        rows="5"
                        type="text"
                        name="goal"
                        // defaultValue={x.data.goal}
                      ></textarea>
                    </div>
                  </div>
                  <h2 className={Styles.h2}>この作品のターゲット層</h2>
                  <div>
                    <p className={Styles.label}>
                      {" "}
                      ◎ どんな人に読んで欲しいのか明確にしましょう。
                    </p>
                    <p className={Styles.subLabel}> ① 年齢層・性別</p>
                    <div className={Styles.input}>
                      <textarea
                        className={Styles.textarea}
                        rows="5"
                        type="text"
                        name="target"
                        // defaultValue={x.data.target}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <p className={Styles.label}> </p>
                    <p className={Styles.subLabel}> ② 趣味・嗜好</p>
                    <div className={Styles.input}>
                      <textarea
                        className={Styles.textarea}
                        rows="5"
                        type="text"
                        name="janle"
                        // defaultValue={x.data.janle}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <p className={Styles.label}> </p>
                    <p className={Styles.subLabel}>
                      {" "}
                      ③ その人が他に読みそうな小説
                    </p>
                    <div className={Styles.input}>
                      {" "}
                      <textarea
                        className={Styles.textarea}
                        rows="5"
                        type="text"
                        name="other"
                        // defaultValue={x.data.other}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button className={Styles.button}>
                      変更内容を保存する
                    </button>
                  </div>
                  <span className={Styles.editorToast}> 保存しました</span>
                </form>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Thema;
