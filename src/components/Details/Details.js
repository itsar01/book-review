import { Link } from "react-router-dom";

export const Details = () => {
  return (
    <section
      id="details-page"
      className="d-flex flexbox text-bg-dark p-3"
      style={{ width: "40rem" }}
    >
      <div className="card m-3" style={{ width: "20rem" }}>
        <img
          className="justify-content-left"
          src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1479863624i/1618.jpg`}
          alt="Card image cap"
        />
      </div>
      <div className="flex justify-content-center">
        <h5 className="card-title">Title</h5>
        <h5 className="card-author">Author</h5>
        <h5 className="card-year">Year</h5>
        <p className="card-text">Rating: </p>
        <p className="card-text">Review by: username</p>
        <Link to={`...`} className="btn btn-primary" style={{ margin: "5px" }}>
          Edit
        </Link>
        <Link to={`...`} className="btn btn-primary" style={{ margin: "5px" }}>
          Delete
        </Link>
        <Link to={`...`} className="btn btn-primary" style={{ margin: "5px" }}>
          Like
        </Link>
      </div>
    </section>
  );
};
