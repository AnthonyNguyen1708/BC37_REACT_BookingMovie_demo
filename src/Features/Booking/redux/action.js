import requester from "app/api";
import API_PATH from "app/apiPath";
import action from "./type";

export const fetchBannerAction = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: API_PATH.BANNERS,
    });
    next({
      type: action.SET_BANNER,
      payload: res.data.content,
    });
  } catch (err) {
    console.log("err: ", err);
  }
};

export const fetchMovieAction = async (next) => {
  try {
    const res = await requester ({
        
    })
  } catch (error) {
    console.log("error: ", error);
  }
};
