import { useEffect, useState } from "react";
import API from "../services/api";

export default function FileList() {

  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    try {
      const { data } = await API.get("/files");
      setFiles(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    loadFiles();
  }, []);


  return (
    <div className="mt-8 bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-bold mb-4">
        Uploaded Files
      </h2>


      {files.length === 0 && (
        <p>No files uploaded</p>
      )}


      {files.map((file)=>(
        <div 
          key={file.key}
          className="flex justify-between border-b py-3"
        >

          <span>
            {file.key}
          </span>

          <span>
            {Math.round(file.size / 1024)} KB
          </span>

        </div>
      ))}

    </div>
  );
}