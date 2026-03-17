import { GraduationCap, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-[#1b365d00]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">
                Sertifikat Resmi Kementerian Kesehatan Taiwan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Kursus Pendamping Perawatan Taiwan</h1>

            <h2 className="text-xl sm:text-2xl text-blue-100">
              照顧服務員中文學科一對一輔導保證班
            </h2>

            <p className="text-lg sm:text-xl text-blue-50 leading-relaxed">
              Program bimbingan khusus untuk pekerja migran
              Indonesia yang ingin mendapatkan sertifikat
              pendamping perawatan resmi di Taiwan
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-200" />
                <div>
                  <div className="text-sm text-blue-100">
                    Total Jam
                  </div>
                  <div className="font-bold text-lg">
                    133 Jam
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Heart className="w-6 h-6 text-blue-200" />
                <div>
                  <div className="text-sm text-blue-100">
                    Bimbingan
                  </div>
                  <div className="font-bold text-lg">
                    1-on-1
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Lihat Harga & Promo
              </a>
              <a
                href="#payment"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500/30 backdrop-blur-sm border-2 border-white rounded-lg font-semibold text-lg hover:bg-blue-500/40 transition-colors"
              >
                Cara Pembayaran
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770822788455-f14be32b0d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2FyZWdpdmVyJTIwaGVscGluZyUyMGVsZGVybHl8ZW58MXx8fHwxNzczNjc2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Caregiver"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl shadow-xl transform rotate-3">
              <div className="text-sm font-medium">
                Early Bird Diskon
              </div>
              <div className="text-2xl font-bold">NT$2,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}