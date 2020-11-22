import Header from "../../../../component/header/Header";
import EditSideMenu from "../../../../component/editMenu/EditSideMenu";
import Link from "next/link";
import Styles from "../../../../styles/Edit.module.css";
import { useRouter } from "next/router";


const Plot = (props) => {
  const router = useRouter();
  console.log(router.query);
  const documentId = router.query.contentId;
  console.log("ドキュメントID", documentId);


  return (
    <>
      <Header></Header>
      <div className={Styles.template}>
        <div className={Styles.sideMenu}>
          <EditSideMenu id={documentId} />
        </div>

        <main className={Styles.main}>
          <div className={Styles.helper}>
            <span className={Styles.text}>物語のプロットを作成する</span>
          </div>
          <div>
            <div>
              <div>
                <div className={Styles.head}>
                  {/* <div className={Styles.title}>プロット一覧</div> */}
                </div>
                <div className={Styles.plotList}>
                  <div className={Styles.group}>
                    <div className={Styles.plotTitle}>
                      <div className={Styles.plotTitleThema}>
                        <span className={Styles.ellipsis}>起</span>
                        <p className={Styles.preLine}>起</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.group}>
                    <div className={Styles.plotTitle}>
                      <div className={Styles.plotTitleThema}>
                        <span className={Styles.ellipsis}>承</span>
                        <p className={Styles.preLine}>承</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.group}>
                    <div className={Styles.plotTitle}>
                      <div className={Styles.plotTitleThema}>
                        <span className={Styles.ellipsis}>転</span>
                        <p className={Styles.preLine}>転</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.group}>
                    <div className={Styles.plotTitle}>
                      <div className={Styles.plotTitleThema}>
                        <span className={Styles.ellipsis}>結</span>
                        <p className={Styles.preLine}>結</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link href="/mypage/edit/plot/PlotEdit">
                      <a>
                        <button className={Styles.btnAdd}>編集する</button>
                      </a>
                    </Link>
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

export default Plot;
