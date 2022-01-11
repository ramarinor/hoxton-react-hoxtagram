export function createImageOnServer(title, url) {
  return fetch("http://localhost:3000/images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      image: url,
      likes: 0
    })
  }).then(function (resp) {
    return resp.json();
  });
}

export function updateLikesOnServer(image) {
  return fetch(`http://localhost:3000/images/${image.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      likes: image.likes
    })
  }).then((resp) => resp.json());
}

export function createCommentOnServer(imageId, content) {
  return fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      imageId: imageId,
      content: content
    })
  }).then(function (resp) {
    return resp.json();
  });
}
export function deleteImageFromServer(id) {
  return fetch(`http://localhost:3000/images/${id}`, {
    method: "DELETE"
  });
}

export function deleteCommentFromServer(id) {
  return fetch(`http://localhost:3000/comments/${id}`, {
    method: "DELETE"
  });
}
