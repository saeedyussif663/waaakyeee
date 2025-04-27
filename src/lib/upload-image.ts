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
    // @ts-expect-error - "escape callback types"
    formData.append("file", image);

    const response = await fetch(`${apiUrl}/api/v1/uploads`, {
      method: "POST",
      body: formData,
    });

    if (response.status === 201 || response.status === 200) {
      const data = await response.json();
      return data.data.file_url;
    }
  } catch (error) {
    console.log(error);
  }
}
