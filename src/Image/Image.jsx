import "./Image.css";

import {
  createCommentOnServer,
  deleteCommentFromServer,
  deleteImageFromServer,
  updateLikesOnServer
} from "../ServerFunctions";
import Comment from "./Comment/Comment";

function Image(props) {
  return (
    <article className="image-card">
      <div className="delete-section">
        <button
          className="delete-button"
          onClick={() => {
            const updatedImages = props.images.filter(
              (targetImage) => targetImage.id !== props.image.id
            );
            props.setImages(updatedImages);
            deleteImageFromServer(props.image.id);
          }}
        >
          Delete
        </button>
      </div>
      <h2 className="title">{props.image.title}</h2>
      <img src={props.image.image} className="image" />
      <div className="likes-section">
        <span className="likes">{props.image.likes} likes`</span>
        <button
          className="like-button"
          onClick={() => {
            const updatedImages = JSON.parse(JSON.stringify(props.images));
            const imageFound = updatedImages.find(
              (targetImage) => props.image.id === targetImage.id
            );
            imageFound.likes++;
            props.setImages(updatedImages);
            updateLikesOnServer(imageFound);
          }}
        >
          ♥
        </button>
      </div>
      <ul className="comments">
        {props.image.comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            image={props.image}
            images={props.images}
            setImages={props.setImages}
          />
        ))}
      </ul>
      <form
        className="comment-form"
        onSubmit={(e) => {
          e.preventDefault();
          const content = e.target.comment.value;
          createCommentOnServer(props.image.id, content).then(
            (commentFromServer) => {
              const updatedImages = JSON.parse(JSON.stringify(props.images));
              const imageFound = updatedImages.find(
                (targetImage) => props.image.id === targetImage.id
              );
              imageFound.comments.push(commentFromServer);
              props.setImages(updatedImages);
              e.target.reset();
            }
          );
        }}
      >
        <input
          className="comment-input"
          type="text"
          name="comment"
          placeholder="Add a comment..."
          required
        />
        <button className="comment-button" type="submit">
          Post
        </button>
      </form>
    </article>
  );
}
export default Image;
