import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export function ReviewCard({ review }) {
  return (
    <Card style={{ width: "18rem", padding: "1rem", margin: "1rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title></Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{review.title}</ListGroup.Item>
        <ListGroup.Item>{review.year}</ListGroup.Item>
        <ListGroup.Item>{review.author}</ListGroup.Item>
        <ListGroup.Item>Likes: 0</ListGroup.Item>
        <ListGroup.Item>Rating: {review.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Details</Card.Link>
      </Card.Body>
    </Card>
  );
}
