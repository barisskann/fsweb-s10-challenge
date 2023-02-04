import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const PostList = () => {
  const { notlar } = useSelector(({notlar}) => {
    return {notlar}
  })

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not,sayac) => (
        <Post item={not} key={sayac} />
      ))}
    </div>
  );
};

export default PostList;
