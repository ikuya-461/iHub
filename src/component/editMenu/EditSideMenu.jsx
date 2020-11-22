import React from "react";
import Styles from "./EditSideMenu.module.css";
import Link from "next/link";

class EditSideMenu extends React.Component {
  render() {
    const documentId = this.props.id;

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
            <Link
              href={{
                pathname: "/mypage/edit/Thema",
                query: { contentId: `${documentId}` },
              }}
            >
              <a className={Styles.link}>
                <span className={Styles.text}>
                  <p>テーマ</p>
                </span>
              </a>
            </Link>
          </div>
          <div className={Styles.link}>
            <Link
              href={{
                pathname: "/mypage/edit/plot",
                query: { contentId: `${documentId}`},              
              }}
            >
              <a className={Styles.link}>
                <span className={Styles.text}>
                  <p>プロット</p>
                </span>
              </a>
            </Link>
          </div>
          <div className={Styles.link}>
            <Link
              href={{
                pathname: "/mypage/edit/character",
                query: { contentId:  `${documentId}` },              
              }}
            >
              <a className={Styles.link}>
                <span className={Styles.text}>
                  <p>キャラクター</p>
                </span>
              </a>
            </Link>
          </div>
          <div className={Styles.link}>
            <Link
              href={{
                pathname: "/mypage/edit/worldSetting",
                query: { contentId:  `${documentId}` },             
              }}
            >
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
}

export default EditSideMenu;
