import React, { useEffect, useState } from "react";
import { ReviewType } from "@/pages/api/ReviewType";

const Review2 = () => {
  const [store, setStore] = useState<string | null>();
  const [review, setReview] = useState<ReviewType[]>([]);

  useEffect(() => {
    const storeNo = sessionStorage.getItem("store_code");
    if (storeNo) {
      setStore(storeNo);

      const fetchReviews = async () => {
        const res = await fetch("/api/review");
        const data = await res.json();
        setReview(data);
      };
      fetchReviews();
    }
  }, []);

  console.log(review);

  return (
    <>
      {review &&
        review
          .filter((val) => {
            if (store == "") {
              return val;
            } else if (val.store_code === store) {
              return val;
            }
          })
          .map((item) => {
            return (
              <div className="babzip" key={item.username}>
                <div className="title">{item.username}</div>
                <p>{item.review}</p>
                <img className="star" style={{ marginLeft: "80%" }} />
                <span>{item.star}</span>
              </div>
            );
          })}
    </>
  );
};

export default Review2;
