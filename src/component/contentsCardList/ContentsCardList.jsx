import Styles from "./ContentsCard.module.css";
// import FavoriteButton from "../favoriteButton/FavoriteButton";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import firebase from "../../common/firebase";

const ContentsCardList = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [contentsList, setContentsList] = useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <ul>
        {contentsList?.map((x, index) => (
          <li key={index} id={x.id}>
            <div className={Styles.cardField}>
              <div type="illust" className={Styles.contentsCardLink}>
                <div className={Styles.contentsLink}>
                  <Link href="/">
                    <a>
                      <div className={Styles.cardBody}>
                        <div></div>
                      </div>
                      <div className={Styles.thumbnail}>
                        <img src="./iHub_logo.png" alt="" />
                      </div>
                    </a>
                  </Link>

                  <div className={Styles.favoriteButton}>
                    {/* <FavoriteButton></FavoriteButton> */}
                  </div>
                </div>
              </div>
              <div className={Styles.contentsTitle}>
                <a>{x.data.title}</a>
              </div>
              <div className={Styles.authorInformation}>
                <div className={Styles.authorImage}>
                  <div>
                    <a>
                      <div className={Styles.accountImge} size="24" role="img">
                        <img src="./iHub_logo.png" width="24" alt="" />
                      </div>
                    </a>
                  </div>
                  <a className={Styles.authorName}>{x.data.user}</a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentsCardList;
