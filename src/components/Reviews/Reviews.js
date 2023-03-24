import { ReviewCard } from "./ReviewCard.js";

export const Reviews = ({ reviews }) => {
  return (
    <div className="card-deck" style={{ padding: "10px", margin: "10px" }}>
      {reviews.length > 0 ? (
        <div className="row d-flex justify-content-center">
          {reviews.map((x) => (
            <ReviewCard key={x._id} review={x} />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <p className="no-pets">No songs in database!</p>
        </div>
      )}
    </div>
  );
};
