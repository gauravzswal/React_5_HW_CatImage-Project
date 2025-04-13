import { useState } from "react";
import cat1 from "./assets/cat1.png";
import cat2 from "./assets/cat2.png";
import cat3 from "./assets/cat3.png";
import cat4 from "./assets/cat4.png";

function App() {
  const [image, setImage] = useState("");

  const images = [cat1, cat2, cat3, cat4];

  return (
    <>
      <div>
        <h1 className="text-center p-6 text-3xl font-bold bg-blue-950 text-amber-600 border-b-2 border-black shadow-2xl ">
          Image Gallery
        </h1>

        <h4 className="text-center underline mt-4">Click On the image!</h4>
      </div>

      <div className="w-[90%] flex flex-wrap items-center justify-center gap-6 mt-8 m-auto">
        {images.map((ele, index) => (
          <img
            key={index}
            src={ele}
            alt={`cat-${index}`}
            className="w-[45%] sm:w-[40%] md:w-[30%] lg:w-[20%] h-[25vh] sm:h-[30vh] object-cover rounded-2xl shadow-2xl border border-gray-200 hover:scale-[1.08] transition-all duration-300"
            onClick={() => setImage(ele)}
          />
        ))}
      </div>

      <div className="w-full mt-10 flex items-center justify-center flex-col overflow-x-hidden">
        {image.length > 0 && (
          <>
            <h1 className="pb-4 text-black font-bold text-xl sm:text-2xl">
              Selected Image
            </h1>
            <img
              src={image}
              alt="selected"
              className="w-[90%] sm:w-[70%] md:w-[50%]  h-[50vh] md:h-[60vh] object-cover rounded-2xl shadow-2xl border border-gray-200 hover:scale-[1.08] transition-all duration-300"
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
