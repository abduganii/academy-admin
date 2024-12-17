import axios from "axios";
import { Store } from "../utils/storage";

export const UploadFile = async (data: any, onProgress?: any) => {
  const isPublicApi = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM0NDA3MzgzLCJleHAiOjE3MzQ0OTM3ODN9._IIeKaAq18J6CPnjne6x0zGfd4UVcLlBJ3zHOBO0_ug';
  const response = await axios.post(
    `${import.meta.env.VITE_API_BACKEND_URL}files/upload`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${Store.getToken()}`
      },
      onUploadProgress: (progressEvent: any) => {
        if (onProgress && progressEvent.total) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    },
    
  );
  return response;
};

export const FileRemove = async (body: any) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_STORE_URL}/files`,
    { data: body }
  );
  return response;
};
