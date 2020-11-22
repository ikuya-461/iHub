import Header from "../../../../component/header/Header";
import EditSideMenu from "../../../../component/editMenu/EditSideMenu";
import Link from "next/link";
import Styles from "../../../../styles/Edit.module.css";
import React, { useState, useEffect } from "react";
import firebase from "../../../../common/firebase";
import { useRouter } from "next/router";

const Character = (props) => {
  const [characterList, setCharacterList] = useState(null);

  const router = useRouter();
  console.log(router.query);
  const documentId = router.query.contentId;
  console.log("ドキュメントID", documentId);

  const getCharacterList = async () => {
    const db = firebase.firestore().collection("contents").doc(documentId);

    const characterFech = await db.collection("character").get();
    const characterArray = characterFech.docs.map((x) => {
      return {
        id: x.id,
        data: x.data(),
      };
    });
    setCharacterList(characterArray);
    return characterArray;
  };

  useEffect(() => {
    const result = getCharacterList();
  }, [props]);

  return (
    <>
      <Header></Header>
      <div className={Styles.template}>
        <div className={Styles.sideMenu}>
          <EditSideMenu id={documentId} />
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
                            <ul>
                              {characterList?.map((x, index) => (
                                <li
                                  key={index}
                                  id={x.id}
                                  className={Styles.listItem}
                                >
                                  <img
                                    src=""
                                    alt="image"
                                    className={Styles.icon}
                                  />
                                  <span className={Styles.label}>
                                    {x.data.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </span>
                      </div>
                      <Link
                        href={{
                          pathname: "/mypage/edit/character/CharacterCreat",
                          query: { contentId: `${documentId}` },
                        }}
                      >
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
                      <ul>
                        {characterList?.map((x, index) => (
                          <li
                            className={Styles.characterData}
                            key={index}
                            id={x.id}
                          >
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
                                    <span className={Styles.value}>
                                      {x.data.position}
                                    </span>
                                  </div>
                                  <div>
                                    <span className={Styles.name}>名前:</span>
                                    <span className={Styles.value}>
                                      {x.data.name}
                                    </span>
                                  </div>
                                  <div>
                                    <span className={Styles.name}>別名:</span>
                                    <span className={Styles.value}>
                                      {x.data.nickName}
                                    </span>
                                  </div>
                                </div>
                                <div className={Styles.main2}>
                                  <div>
                                    <div>
                                      <span className={Styles.name}>年齢:</span>
                                      <span className={Styles.value}>
                                        {x.data.age}
                                      </span>
                                    </div>
                                    <div>
                                      <span className={Styles.name}>性別:</span>
                                      <span className={Styles.value}>
                                        {x.data.sex}
                                      </span>
                                    </div>
                                    <div>
                                      <span className={Styles.name}>
                                        誕生日:
                                      </span>
                                      <span className={Styles.value}>
                                        {x.data.birthday}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <span className={Styles.name}>
                                        血液型:
                                      </span>
                                      <span className={Styles.value}>
                                        {x.data.bloodType}
                                      </span>
                                    </div>
                                    <div>
                                      <span className={Styles.name}>身長:</span>
                                      <span className={Styles.value}>
                                        {x.data.height},cm
                                      </span>
                                    </div>
                                    <div>
                                      <span className={Styles.name}>体重:</span>
                                      <span className={Styles.value}>
                                        {x.data.weight},kg
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
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
