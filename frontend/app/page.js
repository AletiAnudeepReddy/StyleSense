import Image from "next/image";
import { UploadCloud, Info } from "lucide-react"; // You can install lucide-react if not already

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-[115vh] bg-[#FBFBF9] text-[#2C2C2C] flex flex-col items-center justify-center px-4 py-20">
      {/* Background Blobs */}
      <div className="absolute w-[800px] h-[800px] bg-[#FADADD] rounded-full blur-3xl opacity-70 top-[-300px] right-[-150px] z-0"></div>
      <div className="absolute w-[700px] h-[700px] bg-[#E0D7F8] rounded-full blur-2xl opacity-60 bottom-[-200px] left-[-100px] z-0"></div>

      {/* Center Content */}
      <div className="relative mt-8 z-10 max-w-5xl text-center">
        <h1 className="text-6xl text-gray-700 font-bold leading-tight mb-4">
  Style meets Intelligence<br />
  with
  <br />
  <span className="text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
    StyleSense
  </span>
</h1>

        <p className="text-lg text-[#3b3b3b] max-w-2xl mx-auto">
          Upload a photo and let our intelligent stylist suggest outfits that match your vibe.
        </p>
      </div>


      {/* Upload Section */}
      <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-5 gap-5 items-center w-full max-w-6xl mx-auto">
        {/* Left Upload Area (2/5) */}
        <div className="col-span-2 bg-white rounded-3xl p-4 text-center border border-[#f3f3f3]">
          <div className="px-6 sm:px-12 py-6 sm:py-10 border border-dashed border-[#d8d8db] rounded-2xl">
            <div className="text-center max-w-md mx-auto space-y-4">
              <button className="inline-flex items-center justify-center w-full py-3 px-4 bg-[#937ecd] rounded-full text-white hover:bg-[#d4767e] transition h-[56px] text-lg font-semibold">
                <UploadCloud className="mr-2" size={20} />
                Upload your clothes
              </button>
              <p className="hidden sm:block text-sm font-medium text-[#5c5d6b]">
                Or just drop them here
              </p>
            </div>

            {/* Divider */}
            <div className="my-5 w-full border-t border-dashed border-[#D8D8DB]"></div>

            {/* Samples */}
            <div className="text-center">
              <p className="text-base text-[#5c5d6b] mb-3">No image? Try one of these</p>
              <ul className="flex justify-center space-x-3">
                {[
                  "https://assets.fitroom.app/assets/clothes/686be0c8c1ac61333d6ccd83/thumbnailOTu5awAqyfrA2XsIFtZci.jpeg",
                  "https://assets.fitroom.app/assets/clothes/686be094c1ac61333d6ccbc3/thumbnail867qFb3JRes72higdQiTt.jpg",
                  "https://assets.fitroom.app/assets/clothes/686be05ac1ac61333d6cca06/thumbnaileKNN79ujTWPxJjS587sgg.jpg",
                  "https://assets.fitroom.app/assets/clothes/686be025c1ac61333d6cc893/thumbnail9gGBfK9qi7aMoqXyj2seR.jpg",
                ].map((src, idx) => (
                  <li key={idx} className="inline-block">
                    <button className="w-12 h-12 rounded overflow-hidden hover:opacity-80 transition">
                      <img src={src} alt={`sample-${idx}`} className="w-full h-full object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="mt-6 inline-flex items-center justify-center text-[#5c5d6b] gap-1 cursor-pointer hover:text-[#2C2C2C] transition">
              <Info size={14} />
              <p className="text-xs font-semibold">Upload tips</p>
            </div>
          </div>
        </div>

        {/* Right Banner Image (3/5) */}
        <div className="col-span-3 flex justify-center">
          <Image
            src="/banner.webp"
            alt="Fashion Banner"
            width={630}
            height={420}
            className="rounded-2xl shadow-xl shadow-white"
          />
        </div>
      </div>

    </div>
  );
}
