import { NextApiRequest, NextApiResponse } from "next";
import reviewData from "./review.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(reviewData);
}
