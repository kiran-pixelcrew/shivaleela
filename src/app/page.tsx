
import Navbar from "./components/Navbar";

function page() {
  
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar/>
      <div className="bg-red-600 size-32 w-full h-screen mx-auto"></div>
      <div className="bg-blue-600 size-32 w-11/12 h-screen mx-auto"></div>
    </div>
  );
}

export default page;
