import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const DownloadLink = ({ name }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg cursor-pointer transition-transform duration-200 ease-in-out flex flex-col gap-1 justify-center items-center py-4 px-5 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 active:bg-gray-100 active:shadow-inner">
      <div className="flex justify-center items-center">
        <ArrowDownTrayIcon className="w-6 h-6 text-parklane-green mr-2" />
        <div className="font-semibold">{name}</div>
      </div>
      <p className="text-xs text-gray-500">V 12.0.0</p>
    </div>
  );
};

export default DownloadLink;

// <div className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg cursor-pointer transition-transform duration-200 ease-in-out flex flex-col gap-1 justify-center items-center py-3 px-5 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 active:bg-gray-100 active:shadow-inner">
//   <div className="flex justify-center items-center">
//     <ArrowDownTrayIcon className="w-6 h-6 text-green-400 mr-2" />
//     <div className="font-semibold">{name}</div>
//   </div>
//   <p className="text-xs text-gray-500">V.12.0.9</p>
// </div>

// <div className="overflow-hidden text-xl rounded-lg bg-white shadow-lg hover:scale-130 cursor-pointer transition-transform duration-300 ease-in-out flex flex-col gap-2 justify-center items-center py-4">
//       <div className="flex justify-center items-center">
//         <div className="px-4 text-center font-bold">{name}</div>
//         <ArrowDownTrayIcon className="w-[30] h-[30] text-green-500 mr-3" />
//       </div>
//       <p className="text-xs text-gray-500">V.12.0.9</p>
//     </div>
