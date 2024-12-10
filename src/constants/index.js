const getAccessToken = () => {
  try {
    const accessTokenString = sessionStorage.getItem("accessToken");

    if (!accessTokenString) {
      return null;
    }

    return JSON.parse(accessTokenString);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const sendError = (error) => {
  if (error.response) {
    const errMsg = error.response.message.data;
    throw new Error(errMsg);
  }
};

const liveServer = ``;
const devServer = ``;

export { getAccessToken, sendError, liveServer, devServer };
