import { UploadFile } from "../service/upload"

export async function ImageUpload(file:any) {
    const formData = new FormData()
    formData.append("file", file)
    return await UploadFile(formData)
        .then((data) => {
            return data
        })
        .catch((errr) => console.log(errr))
    

  }

