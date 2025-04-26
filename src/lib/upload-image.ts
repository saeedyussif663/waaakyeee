interface Image {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

const apiUrl = import.meta.env.VITE_BASE_URL;

export default async function uploadImage(image: Image) {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const response = await fetch(`${apiUrl}/uploads`, {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
      body: formData,
    });

    console.log(response.status);

    if (response.status === 201 || response.status === 200) {
      const data = await response.json();
      console.log({ data });
    }
  } catch (error) {
    console.log(error);
  }
}
