import React from "react";

const CommentList = ({ comments }) => {
  

  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "aprobado") {
      content = comment.contenido;
    }

    if (comment.status === "pendiente") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rechazado") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
