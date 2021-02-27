import React, { useState } from "react";
import Ratings from "./Ratings";
import { Button, Card, Collapse } from "react-bootstrap";
function Review({ items }) {
  const [show, setShow] = useState(false);

  console.log(items);
  const showcomponent = () => {
    setShow(true);
    console.log(true);
  };
  return (
    <div className="review_container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div>
            <p>
              <strong>Title:</strong> {items.title}
            </p>
            {items.friend ? (
              <p>
                {" "}
                <strong>Name: </strong> {items.reviewer.name}
              </p>
            ) : null}
            <p>
              {" "}
              <strong>Comment:</strong> {items.comment}
            </p>
            <p>
              {" "}
              <strong>Usfullness:</strong> {items.usefulness}
            </p>

            <p>
              <strong>Connection level:</strong>{" "}
              {items.reviewer.connection_level}
            </p>

            <Ratings rating={items.ratings.Overall} />
            <Button className="showMorebtb" onClick={showcomponent}>
              Show more
            </Button>

            {show ? (
              <div className="rating">
                <p>
                  Overall: <Ratings rating={items.ratings.Overall} />
                </p>
                <p>
                  delivery_time <Ratings rating={items.ratings.delivery_time} />
                </p>
                <p>
                  discounts_and_offers{" "}
                  <Ratings rating={items.ratings.discounts_and_offers} />
                </p>
                <p>
                  price <Ratings rating={items.ratings.price} />
                </p>
              </div>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Review;
