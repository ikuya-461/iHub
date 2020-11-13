import Styles from "./MypageContentsCard.module.css";
import React, { useState, useEffect } from "react";
import firebase from "../../common/firebase";
import Router from "next/router";
import Link from "next/link";

const mypageContentsCard = (props) => {
  const [contentsList, setContentsList] = useState(null);

  const getContentsList = async () => {
    const contentsArray = await firebase
      .firestore()
      .collection("contents")
      .get();
    const contentsList = contentsArray.docs.map((x) => {
      return {
        id: x.id,
        data: x.data(),
      };
    });

    setContentsList(contentsList);
    return contentsList;
  };

  

  useEffect(() => {
    const result = getContentsList();
  }, [props]);

  return (
    <div>
      <ul className={Styles.ideaField}>
        {contentsList?.map((x, index) => (
          <li key={index} id={x.id} className={Styles.contentsCard}>
            <div>
              <Link
                href={{
                  pathname: "/mypage/edit/Thema",
                  query: { Thema: `${x.id}` },
                }}
              >
                <a className={Styles.contentsLink}>
                  <img
                    src="/iHub_logo.png"
                    alt="image"
                    className={Styles.contentsImage}
                  />
                  <div className={Styles.contentsTitle}>
                    {x.data.title}
                    <div className={Styles.date}>{x.data.type}</div>
                  </div>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default mypageContentsCard;
