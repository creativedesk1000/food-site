import { Hero } from "@/components/shared/Hero";
import { CategorySlider } from "@/components/shared/CategorySlider";
import { PopularItems } from "@/components/shared/PopularItems";
import { DealBanner } from "@/components/shared/DealBanner";

export default function Home() {
  return (
    <div className="space-y-4">
      <Hero />
      <CategorySlider />
      <PopularItems />
      <DealBanner />

      {/* App Download Section Placeholder */}
      <section className="py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Order Your Favorite <br />
              Food On The Go
            </h2>
            <p className="text-slate-400 text-lg">
              Download our mobile app to get faster delivery, exclusive deals, and real-time order tracking.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <div className="bg-white/10 px-8 py-3 rounded-2xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-white/50 rounded-full" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-400">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </div>
              <div className="bg-white/10 px-8 py-3 rounded-2xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-white/50 rounded-full" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-400">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-8">
            <div className="w-full h-full bg-slate-800 rounded-2xl shadow-2xl relative overflow-hidden max-w-[300px] border-4 border-slate-700">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-700 rounded-full" />
              <div className="mt-12 p-4 space-y-4">
                <div className="w-full h-32 bg-slate-700 rounded-xl animate-pulse" />
                <div className="w-full h-10 bg-accent rounded-xl" />
                <div className="w-2/3 h-4 bg-slate-600 rounded-lg" />
                <div className="w-full h-4 bg-slate-600 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
