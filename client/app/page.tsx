// components Import
import FileUpload from "./components/FileUpload";

export default function Home() {
  return (
    <div>
      <div className="max-h-screen w-screen flex">
        {/* Left Section */}
        <section className="w-[20dvw] min-h-screen">
          <FileUpload />
        </section>
        {/* Right Section */}
        <section className="w-[80dvw] min-h-screen border-white border-l-2">
          Chat
        </section>
      </div>
    </div>
  );
}
