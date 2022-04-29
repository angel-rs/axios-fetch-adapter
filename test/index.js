import axios from "axios";
import fetchAdapter, { createCancelToken } from "..";

window.onload = async function () {
  try {
    const cancelTokenSource = createCancelToken();
    const ax = axios.create({
      adapter: fetchAdapter,
    });

    const request = ax.get("/package.json", {
      cancelToken: cancelTokenSource.token,
    });

    cancelTokenSource.cancel("Canceled!");

    const data = await request;

    document.getElementById("app").append(JSON.stringify(data, null, 4));
  } catch (e) {
    console.log(e);
  }
};
