import Image from "next/image";
import { UploadCloud, Info } from "lucide-react"; // You can install lucide-react if not already
import Subscribe from "@/components/Subscribe";
import UseCases from "@/components/UseCases";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (<>
    <div className="relative overflow-hidden min-h-[115vh] bg-[#FBFBF9] text-[#2C2C2C] flex flex-col items-center justify-center px-4 py-20">
      {/* Background Blobs */}
      <div className="absolute w-[700px] h-[700px] bg-[#3ee8ff] rounded-full blur-[160px] opacity-40 top-[-250px] left-[-200px] z-[0]"></div>
      <div className="absolute w-[600px] h-[600px] bg-[#3ee8ff] rounded-full blur-[180px] opacity-40 bottom-[-200px] right-[-150px] z-[0]"></div>

      {/* Center Content */}
      <div className="relative mt-8 z-10 max-w-5xl text-center">
        <h1 className="text-5xl text-gray-700 font-bold leading-tight mb-4">
          Style meets Intelligence<br />
          with

          <span className="pl-3 text-5xl bg-gradient-to-r from-[#2da5b4] via-[#2da5b4] to-[#2da5b4] bg-clip-text text-transparent animate-ulse drop-shadow-lg">
            AI
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
              <button className="inline-flex items-center justify-center w-full py-3 px-4 bg-[#2da5b4] rounded-full text-white hover:bg-[#d4767e] transition h-[56px] text-lg font-semibold">
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
    <div className="container max-w-6xl mx-auto pt-12 pb-4">
      <p className="font-bold text-2xl leading-[22px] text-center mb-14 text-neutral-600">
        Trusted by fashion-forward platforms
      </p>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-11 [&_li]:mobile:mx-6 [&_img]:max-w-none animate-infinite-scroll">
          <li><img src="/logos/Asos.svg.png" className="opacity-65" height="48" width="120" alt="ASOS" /></li>
          <li><img src="/logos/zalando.png" height="48" width="140" alt="Zalando" /></li>
          <li><img src="/logos/shopify.webp" height="48" width="140" alt="Shopify" /></li>
          <li><img src="/logos/hm.png" height="30" width="100" alt="H&M" /></li>
          <li><img src="/logos/myntra.png" height="48" width="130" alt="Myntra" /></li>
          <li><img src="/logos/urbanoutfitters.png" height="48" className="opacity-65" width="160" alt="Urban Outfitters" /></li>
          <li><img src="/logos/pinterest.png" className="opacity-65" height="35" width="80" alt="Pinterest" /></li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_li]:mobile:mx-6 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          <li><img src="/logos/Asos.svg.png" className="opacity-65" height="48" width="120" alt="ASOS" /></li>
          <li><img src="/logos/zalando.png" height="48" width="140" alt="Zalando" /></li>
          <li><img src="/logos/shopify.webp" height="48" width="140" alt="Shopify" /></li>
          <li><img src="/logos/hm.png" height="30" width="100" alt="H&M" /></li>
          <li><img src="/logos/myntra.png" height="48" width="130" alt="Myntra" /></li>
          <li><img src="/logos/urbanoutfitters.png" height="48" className="opacity-65" width="160" alt="Urban Outfitters" /></li>
          <li><img src="/logos/pinterest.png" className="opacity-65" height="35" width="60" alt="Pinterest" /></li>
        </ul>
      </div>
    </div>
    <section className="relative w-full px-6 py-20 bg-[#FBFBF9] overflow-hidden">
      {/* Gradient background blur */}
      <div className="absolute w-[700px] h-[500px] bg-[#3ee8ff] rounded-full blur-3xl opacity-20 top-[-100px] right-[-150px] z-[0]"></div>
      <div className="absolute w-[700px] h-[500px] bg-[#3ee8ff] rounded-full blur-3xl opacity-20 bottom-[-100px] left-[-100px] z-[0]"></div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-16 z-10">
        {/* Text section */}
        <div>
          <div className="flex flex-col ">
            {/* Icon Circle */}
            <div className="w-14 h-14 p-2 rounded-full bg-[#EAFDFF] mb-4">
              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#D0F4FF]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2da5b4"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              How to{" "}
              <span className="bg-gradient-to-r from-[#2da5b4] via-[#3ee8ff] to-[#2da5b4] bg-clip-text text-transparent">
                Use
              </span>{" "}
              StyleSense
            </h3>
          </div>

          <p className="text-gray-700 text-lg mb-8">
            Using StyleSense is as easy as dressing up! Follow these simple steps to discover your perfect look:
          </p>
          <ul className="space-y-2 text-base md:text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 bg-[#2da5b4] rounded-full shrink-0"></span>
              Upload your photo showcasing your current outfit.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 bg-[#2da5b4] rounded-full shrink-0"></span>
              Our AI detects your fashion style using Deep Learning.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 bg-[#2da5b4] rounded-full shrink-0"></span>
              Get curated outfit recommendations tailored to your style.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2 bg-[#2da5b4] rounded-full shrink-0"></span>
              Explore similar styles and shop them instantly.
            </li>
          </ul>
        </div>

        {/* Illustration */}
        <div className="relative w-full flex justify-center">
          <img
            src="/use.webp"
            alt="How StyleSense works"
            className="w-full max-w-lg rounded-2xl"
          />
        </div>
      </div>
    </section>

    <section className="relative w-full px-6 py-20 bg-[#FBFBF9] overflow-hidden">
      {/* Gradient background blur */}
      <div className="absolute w-[700px] h-[500px] bg-[#3ee8ff] rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-150px] z-[0]"></div>
      <div className="absolute w-[700px] h-[500px] bg-[#3ee8ff] rounded-full blur-3xl opacity-20 top-[-100px] left-[-100px] z-[0]"></div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-16 z-10">
        {/* Left Side Image */}
        <div className="w-full">
          <img
            src="/feature_1.webp" // replace with your actual image
            alt="Virtual try-on"
            className="w-full max-w-2xl rounded-xl"
          />
        </div>

        {/* Right Side Text */}
        <div className="flex flex-col justify-center">
          {/* Icon Circle */}
          <div className="w-14 h-14 p-2 rounded-full bg-[#EAFDFF] mb-4">
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#D0F4FF]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2da5b4"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Try On Clothes Online with{" "}
            <span className="bg-gradient-to-r from-[#2da5b4] via-[#3ee8ff] to-[#2da5b4] bg-clip-text text-transparent">
              AI
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg max-w-xl">
            Experience the future of shopping! Upload your image and instantly try on new styles. No more guesswork — just personalized looks curated for your body, vibe, and personality. Powered by smart AI, styled by you.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-6 py-3 text-md text-white font-bold rounded-full bg-gradient-to-r from-[#2da5b4] to-[#3ee8ff] shadow-md hover:scale-105 transition-transform duration-200 w-max">
            Try it now
          </button>
        </div>
      </div>
    </section>
    <section className="container mx-auto max-w-6xl">
      <UseCases />
    </section>
    <section className="bg-[#FBFBF9]">
      <Subscribe />
    </section>

    <section className="">
      <FAQSection />
    </section>


  </>
  );
}
