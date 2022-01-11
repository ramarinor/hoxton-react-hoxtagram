import { useEffect, useState } from "react";
import "./App.css";
import Image from "./Image/Image";
import ImageForm from "./ImageForm/ImageForm";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((resp) => resp.json())
      .then((images) => setImages(images));
  }, []);

  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />
      <section className="image-container">
        <ImageForm images={images} setImages={setImages} />
        {images.map((image) => (
          <Image
            key={image.id}
            image={image}
            images={images}
            setImages={setImages}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
