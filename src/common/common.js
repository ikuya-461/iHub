import firebase from "../common/firebase";

export const getContentsCardList = async () => {
  const querySnapshot = await firebase.firestore().collection("posts").get();

  if (querySnapshot.size === 0) {
    // ユーザが一人もいないタイミング

    const paths = [];
    return paths;
  }

  const contentsList = querySnapshot.docs.map((x) => {
    // 有効ユーザコレクションのすべてのユーザドキュメントからユーザネーム取り出し
    return {
      id: x.id,
      title: x.data().title,
      body: x.data().body,
    };
  });

  return contentsList;
};


