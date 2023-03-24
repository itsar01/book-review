import { useState } from "react";

export const Create = ({ onCreateReviewSubmit }) => {
  const [values, setValues] = useState({
    title: "",
    author: "",
    year: "",
    imageUrl: "",
    rating: "",
    review: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (values.title == "") {
      console.log("yes");
    }
    onCreateReviewSubmit(values);
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="w-50" onSubmit={onSubmit} method="POST">
        <div className="form-group my-2">
          <label>Book title</label>
          <input
            value={values.title}
            onChange={onChangeHandler}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter book title..."
          />
        </div>
        <div className="form-group my-2">
          <label>Book author</label>
          <input
            value={values.author}
            onChange={onChangeHandler}
            type="text"
            className="form-control"
            id="author"
            name="author"
            placeholder="Enter book author..."
          />
        </div>
        <div className="form-group my-2">
          <label>Year</label>
          <input
            value={values.year}
            onChange={onChangeHandler}
            type="year"
            className="form-control"
            id="year"
            name="year"
            placeholder="Enter description..."
          />
        </div>
        <div className="form-group">
          <label>Image Url</label>
          <input
            value={values.imageUrl}
            onChange={onChangeHandler}
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter image url..."
          />
        </div>
        <div className="form-group my-2">
          <label>Rating</label>
          <input
            value={values.rating}
            onChange={onChangeHandler}
            type="text"
            className="form-control"
            id="rating"
            name="rating"
            placeholder="Enter your rating..."
          />
        </div>
        <div className="form-group my-2">
          <label>Review</label>
          <input
            value={values.review}
            onChange={onChangeHandler}
            type="text"
            className="form-control"
            id="review"
            name="review"
            placeholder="Enter your review..."
          />
        </div>
        <div className="d-flex justify-content-center my-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
