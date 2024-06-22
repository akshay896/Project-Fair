import commonAPI from "./commonAPI";
import SERVERURL from "./serverurl";

export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/register`, reqBody);
};

export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/login`, reqBody);
};

export const addProjectAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "POST",
    `${SERVERURL}/project/add`,
    reqBody,
    reqHeader
  );
};
// Home project
export const homeProjectAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/get-home-projects`, "");
};

// User project
export const userProjectAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/user-projects`, "", reqHeader);
};

// All project
export const allProjectAPI = async (searchKey,reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/all-projects?search=${searchKey}`, "", reqHeader);
};

// project/:pid/edit
export const editProjectAPI = async (pid, reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVERURL}/project/${pid}/edit`,
    reqBody,
    reqHeader
  );
};

// project/:pid/remove
export const removeProjectAPI = async (pid, reqHeader) => {
  return await commonAPI(
    "DELETE",
    `${SERVERURL}/project/${pid}/remove`,
    {},
    reqHeader
  );
};

// user/edit
export const editUserAPI = async (reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVERURL}/user/edit`, reqBody, reqHeader);
};
