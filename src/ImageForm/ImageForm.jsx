import "./ImageForm.css";

import { createImageOnServer } from "../ServerFunctions";

function ImageForm(props) {
  return (
    <form
      className="comment-form image-card"
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const url = e.target.image.value;
        createImageOnServer(title, url).then((imageFromServer) => {
          imageFromServer.comments = [];
          const updatedImages = JSON.parse(JSON.stringify(props.images));
          updatedImages.unshift(imageFromServer);
          console.log(updatedImages);
          props.setImages(updatedImages);
        });
      }}
    >
      <h2 className="title">New Post</h2>
      <input
        className="comment-input"
        type="text"
        name="title"
        id="title"
        placeholder="Add a title..."
        required
      />
      <input
        className="comment-input"
        type="url"
        name="image"
        id="image"
        placeholder="Add an image url..."
        required
      />
      <button className="comment-button" type="submit">
        Post
      </button>
    </form>
  );
}
export default ImageForm;
