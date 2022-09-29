import axios from '../services/axios';

const getTechnology = async ({ photoId }) => {
  let config = {
    method: 'get',
    params: {
      photo_id: photoId,
    },
  };

  const { data } = await axios(config);
  return data.photos;
};

export default getTechnology;
