import * as request from "./requester.js";

const baseUrl = "http://localhost:3030/jsonstore/reviews";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  const reviews = Object.values(result);

  return reviews;
};

export const create = async (reviewData) => {
  const result = await request.post(baseUrl, reviewData);

  console.log(result);

  return result;
};
