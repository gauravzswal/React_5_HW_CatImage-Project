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

      <div className="w-[80%] items-center justify-center mt-8 flex gap-6 m-auto">
        {images.map((ele) => {
          return (
            <>
              <img
                src={ele}
                alt=""
                className="w-[20%] object-cover border-1 h-[30vh] rounded-2xl shadow-2xl border-gray-200 hover:scale-[1.08] transition-all duration-300"
                onClick={() => {
                  setImage(ele);
                }}
              />
            </>
          );
        })}
      </div>

      <div className="w-[100%] mt-10 items-center flex justify-center flex-col overflow-x-hidden">
        {image.length > 0 && (
          <>
            <h1 className="pb-4 text-black font-bold">Selected Image</h1>
            <img
              src={image}
              alt=""
              className="w-[40%] object-cover border-1 h-[60vh] rounded-2xl shadow-2xl border-gray-200 hover:scale-[1.08] transition-all duration-300"
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
