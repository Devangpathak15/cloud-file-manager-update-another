import { useState } from "react";
import API from "../services/api";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      setLoading(true);

      console.log("Getting upload URL...");

      const { data } = await API.post("/upload-url");

      console.log(data);

        const response = await fetch(data.uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type
      },
      body: file,
    });
     
     
     

      console.log(response.status);

      if (!response.ok) {
        throw new Error("S3 Upload Failed");
      }

      alert("File uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={uploadFile}
        className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}