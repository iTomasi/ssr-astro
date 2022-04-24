import { AxiosCloudinary } from "requests/AxiosBase";

interface IFile {
  blob: Blob,
  folder?: string
};

interface IHandler {
  onUploadProgress?: (percentage: number) => void
}

const cloudinaryUpload = async (
  { blob, folder = "" }: IFile,
  handlers?: IHandler
) => {
  const { PUBLIC_CLOUDINARY_UPLOAD_PRESET } = import.meta.env;

  if (!PUBLIC_CLOUDINARY_UPLOAD_PRESET) {
    return { error: "We need your cloudinary upload preset for upload your file!" }
  }

  const formData = new FormData();

  formData.append("file", blob);
  formData.append("folder", folder);
  formData.append("upload_preset", PUBLIC_CLOUDINARY_UPLOAD_PRESET);

  try {
    const { data } = await AxiosCloudinary.post(
      "/image/upload",
      formData,
      {
        onUploadProgress: (e) => {
          if (typeof handlers?.onUploadProgress !== "function") return
          const percentage = (e.loaded * 100) / e.total;

          handlers.onUploadProgress(percentage)
        }
      }
    );

    return {
      data: data.secure_url as string
    }
  }

  catch(e) {
    console.error(e);
    console.error("cloudinaryUpload() Error");
    return { error: "Cloudinary Error" }
  }
}

export default cloudinaryUpload;