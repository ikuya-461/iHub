import React, { useState, useEffect } from "react";
import Styles from "../styles/Home.module.css";
import Layout from "../component/layout";
// import firebase from "../common/firebase";
import ContentsCardList from "../component/contentsCardList/ContentsCardList";

const Home = (props) => {
  return (
    <>
      <Layout>
        <main>
          <div className={Styles.search}>
            <form action="https://" className={Styles.formText} method="GET">
              <input type="text" size="50px" placeholder="キーワード検索" />
              <input type="submit" value="検索" />
            </form>
            <select name="" id="" className={Styles.ideaSort}>
              <option>順番を選択</option>
              <option>更新の新しい順</option>
              <option>更新の古い順</option>
              <option>人気順</option>
            </select>
          </div>
          <div>
            {/* <nav>
                <ul className={Styles.ideaNav}>
                  <li>
                    <h2>ストーリー</h2>
                  </li>
                  <li>
                    <h2>プロット</h2>
                  </li>
                  <li>
                    <h2>キャラクター</h2>
                  </li>
                  <li>
                    <h2>世界設定</h2>
                  </li>
                  <li>
                    <select name="" id="" className={Styles.ideaSort}>
                      <option>順番を選択</option>
                      <option>更新の新しい順</option>
                      <option>更新の古い順</option>
                      <option>人気順</option>
                    </select>
                  </li>
                </ul>
              </nav> */}
          </div>
          <div>
            <div className={Styles.listField}>
              <section>
                <div>
                  <div className={Styles.list}>
                    <ContentsCardList />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
