import axios from "axios";

const commonAPI = async (httpMethode, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpMethode,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };

  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonAPI;
