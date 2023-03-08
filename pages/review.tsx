import React, { useEffect, useState } from "react";
import reviewdata from "../pages/api/review.json";
import { ReviewType } from "@/pages/api/ReviewType";

const Review = () => {
  const [store, setStore] = useState<string | null>();
  const [review, setReview] = useState<ReviewType[]>(reviewdata);

  //   const storeNo: string =
  //     typeof window !== "undefined"
  //       ? JSON.parse(sessionStorage.getItem("store_code") || "")
  //       : null;

  //   if (typeof window !== "undefined") {
  //     const storeNo: string = JSON.parse(
  //       sessionStorage.getItem("store_code") || ""
  //     );
  //   }

  useEffect(() => {
    const storeNo = sessionStorage.getItem("store_code");
    if (storeNo) {
      setStore(storeNo);
    }
  }, []);

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       if (sessionStorage.getItem("store_code")) {
  //         setStore(sessionStorage.getItem("store_code"));
  //       } else {
  //         setStore("");
  //       }
  //     }
  //   }, []);
  console.log(store);
  console.log(review);

  return (
    <>
      {review &&
        // review.map((item) => {
        //   store.filter((e) => {
        //     item.store_code === e.babCode ? (
        //       <div className="babzip">
        //         <div className="title">{item.username}</div>
        //         <p>{item.review}</p>
        //         <img className="star" style={{ marginLeft: "80%" }} />
        //         <span>{item.star}</span>
        //       </div>
        //     ) : (
        //       <></>
        //     );
        //   });
        review
          .filter((val) => {
            if (store === null) {
              return val;
            } else if (val.store_code === store) {
              return val;
            }
          })
          .map((item) => {
            return (
              <div className="babzip">
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

export default Review;
