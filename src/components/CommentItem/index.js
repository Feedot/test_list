import React from "react";
const CommentItem = props => {
  let { data, delItem } = props,
    { img, id, text, user } = data;
  return (
    <figure className="item_wrapper">
      <div>
        <img src={img} />
      </div>
      <p>{text}</p>
      {user ? <button onClick={() => delItem(id)}>Delete</button> : null}
    </figure>
  );
};

export default CommentItem;
