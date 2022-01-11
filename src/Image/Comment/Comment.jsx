import { deleteCommentFromServer } from "../../ServerFunctions";
import "./Comment.css";
function Comment(props) {
  return (
    <li>
      {props.comment.content}
      <button
        className="delete-button"
        onClick={(e) => {
          const updatedImages = JSON.parse(JSON.stringify(props.images));
          const imageFound = updatedImages.find(
            (targetImage) => targetImage.id === props.image.id
          );
          imageFound.comments = imageFound.comments.filter(
            (targetComment) => targetComment.id !== props.comment.id
          );
          props.setImages(updatedImages);
          deleteCommentFromServer(props.comment.id);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default Comment;
