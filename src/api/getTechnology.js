import axios from "../services/axios";

const getTechnology = async ({ query = "", page = 3, perPage = 10 }) => {
  let config = {
    method: "get",
    params: {
      method: "flickr.photos.search",
      tags: "technology",
      text: query,
      page,
      per_page: perPage,
    },
  };

  const { data } = await axios(config);
  return data.photos;
};

export default getTechnology;
