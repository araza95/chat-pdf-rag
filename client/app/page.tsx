// components Import
import FileUpload from "./components/FileUpload";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex h-screen">
        {/* Left Section */}
        <aside className="w-1/3 p-6 flex items-center justify-center border-r border-white/20">
          <FileUpload />
        </aside>
        {/* Right Section */}
        <section className="w-2/3 p-6">Chat</section>
      </div>
    </main>
  );
}
