import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export function ReviewCard({ review }) {
  return (
    <div className="card m-3" style={{ width: "15rem" }}>
      <img
        className="card-img-top"
        src={review.imageUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{review.title}</h5>
        <h5 className="card-author">{review.author}</h5>
        <h5 className="card-year">{review.year}</h5>
        <p className="card-text">Rating: {review.rating}</p>
        <p className="card-text">Review by: username</p>
        <a href="#" className="btn btn-primary">
          Go to review
        </a>
      </div>
    </div>
  );
}
