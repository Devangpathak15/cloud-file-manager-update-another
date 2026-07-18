import Upload from "../components/Upload";
import FileList from "../components/FileList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8">
          Cloud File Manager
        </h1>

        <Upload />
        <FileList />
      </div>
    </div>
  );
}