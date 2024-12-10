import React from "react";
import Home from "./Home";

export default function Board() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-600 to-blue-950 p-4">
      <div className="flex flex-wrap content-start h-screen w-[100vh] border border-black bg-white rounded-3xl">
        <div className="h-[40%] w-[40%] p-[3rem] bg-red-600 rounded-tl-3xl">
          <Home className={"  bg-red-500"} />
          {/* RED HOME */}
        </div>
        <div className="h-[40%] w-[20%] border border-gray-600 grid grid-cols-3 grid-rows-6">
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-green-600"></div>
          <div className="border border-gray-600 bg-green-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-green-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-green-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-green-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-green-600"></div>
          <div className="border border-gray-600"></div>
        </div>
        <div className="h-[40%] w-[40%] bg-green-600 rounded-tr-3xl p-[3rem]">
          <Home className={"  bg-green-500"} />{" "}
        </div>
        {/* RED AND GREENNN */}

        <div className="h-[20%] w-[40%] border border-gray-600 mt-0  grid grid-cols-6 grid-rows-3">
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-red-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-red-600"></div>
          <div className="border border-gray-600 bg-red-600"></div>
          <div className="border border-gray-600 bg-red-600"></div>
          <div className="border border-gray-600 bg-red-600"></div>
          <div className="border border-gray-600 bg-red-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
        </div>
        {/* HOME */}
        {/* <div className="h-[20%] w-[20%]  mt-0  ">5 </div> */}
        <div className="h-[20%] w-[20%] mt-0 relative bg-gray-200 border border-black">
          {/* Top triangle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4.375rem] border-l-transparent border-r-[4.375rem] border-r-transparent border-t-[4.375rem] border-t-green-600"></div>

          {/* Right triangle */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[4.375rem] border-t-transparent border-b-[4.375rem] border-b-transparent border-r-[4.375rem] border-r-yellow-400"></div>

          {/* Bottom triangle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4.375rem] border-l-transparent border-r-[4.375rem] border-r-transparent border-b-[4.375rem] border-b-blue-500"></div>

          {/* Left triangle */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-t-[4.375rem] border-t-transparent border-b-[4.375rem] border-b-transparent border-l-[4.375rem] border-l-red-600"></div>
        </div>

        <div className="h-[20%] w-[40%] border border-gray-600 mt-0  grid grid-cols-6 grid-rows-3">
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-yellow-400"></div>
          <div className="border border-gray-600 bg-yellow-400"></div>
          <div className="border border-gray-600 bg-yellow-400"></div>
          <div className="border border-gray-600 bg-yellow-400"></div>
          <div className="border border-gray-600 bg-yellow-400"></div>
          <div className="border border-gray-600 "></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-yellow-400    "></div>
          <div className="border border-gray-600"></div>
        </div>
        {/* MIDDDD / home */}

        <div className="h-[40%] w-[40%] bg-blue-600 rounded-bl-3xl p-[3rem]">
          <Home className={"  bg-blue-500"} />{" "}
        </div>
        <div className="h-[40%] w-[20%] border border-gray-600 grid grid-cols-3 grid-rows-6">
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-blue-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-blue-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-blue-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-blue-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600 bg-blue-600"></div>
          <div className="border border-gray-600 bg-blue-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
          <div className="border border-gray-600"></div>
        </div>
        <div className="h-[40%] w-[40%] bg-yellow-400 rounded-br-3xl p-[3rem]">
          <Home className={"  bg-yellow-500"} />{" "}
        </div>
      </div>
    </div>
  );
}
