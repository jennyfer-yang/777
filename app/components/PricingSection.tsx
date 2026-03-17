import { Check, Star, Sparkles, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Biaya Kursus & Promo Spesial
          </h2>
          <p className="text-xl text-gray-600">
            學費及優惠辦法
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Paket Utama */}
          <Card className="border-2 border-blue-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold">
              UTAMA
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Paket Standar</CardTitle>
              <CardDescription className="text-base">照顧服務員中文學科一對一輔導保證班</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">NT$36,000</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Harga normal</p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="font-bold text-yellow-900">Early Bird Promo!</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-yellow-900">NT$34,000</span>
                  <span className="text-sm text-yellow-700">(Hemat NT$2,000)</span>
                </div>
                <p className="text-xs text-yellow-700 mt-2">
                  ✨ Bayar lunas langsung, diskon NT$2,000
                </p>
                <p className="text-xs text-yellow-600">
                  早鳥學費一次付清優惠2000元
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Jaminan lulus ujian teori</p>
                    <p className="text-gray-500 text-xs">保證通過學科測驗</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Bimbingan 1-on-1 personal</p>
                    <p className="text-gray-500 text-xs">一對一個人化輔導</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Modul Mandarin-Indonesia</p>
                    <p className="text-gray-500 text-xs">中印尼文課程教學講義</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Tanpa biaya tambahan sampai lulus</p>
                    <p className="text-gray-500 text-xs">不再加收任何額外費用</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Paket Bundle */}
          <Card className="border-2 border-purple-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-semibold">
              BEST VALUE 🔥
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Paket Bundle</CardTitle>
              <CardDescription className="text-base">+ Kursus Online Mandarin 36 Jam</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl line-through text-gray-400">NT$70,000</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-purple-600">NT$46,000</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Paket Early Bird + Kursus Online</p>
              </div>

              <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-purple-900">Bonus Spesial!</span>
                </div>
                <p className="text-sm text-purple-900 font-semibold mb-2">
                  Kursus Online Mandarin 36 Jam
                </p>
                <p className="text-xs text-purple-700">
                  Harga normal: NT$36,000 → Hanya NT$12,000
                </p>
                <p className="text-xs text-purple-600 mt-1">
                  大學中文真人線上課程36小時證書
                </p>
                <Badge className="mt-3 bg-red-500">Kuota terbatas: 12 orang</Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Semua benefit Paket Standar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Sertifikat Mandarin 36 jam</p>
                    <p className="text-gray-500 text-xs">可申請PTTM，永久有效</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Tanpa ujian tambahan</p>
                    <p className="text-gray-500 text-xs">免考試</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Berlaku seumur hidup</p>
                    <p className="text-gray-500 text-xs">永久有效</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Paket Murid Lama */}
          <Card className="border-2 border-green-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold">
              MURID LAMA
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Harga Spesial</CardTitle>
              <CardDescription className="text-base">Untuk Alumni LUCKY Laoshi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl line-through text-gray-400">NT$36,000</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-green-600">NT$26,000</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Diskon khusus murid lama</p>
              </div>

              <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-900">Hemat NT$10,000!</span>
                </div>
                <p className="text-sm text-green-700">
                  Khusus untuk yang pernah mengikuti kursus Mandarin LUCKY Laoshi
                </p>
                <p className="text-xs text-green-600 mt-2">
                  LUCKY老師中文課程的舊學生優惠價
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Semua benefit Paket Standar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Prioritas jadwal kelas</p>
                    <p className="text-gray-500 text-xs">優先安排上課時間</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-gray-700">Support berkelanjutan</p>
                    <p className="text-gray-500 text-xs">持續學習支持</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Biaya Tambahan */}
        <Card className="bg-gray-50 border-2 border-gray-300">
          <CardHeader>
            <CardTitle className="text-xl">Biaya Praktik & Magang (術科及實習費用)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-lg mb-3 text-gray-900">🏥 Praktik + Magang di Rumah Sakit</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-blue-600">NT$4,000</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">Total 41 jam (實作加醫院實習41小時)</p>
                <p className="text-sm text-gray-600">Jadwal: 2 hari per bulan, tidak boleh absen</p>
                <p className="text-xs text-gray-500">每個月安排上課2天（不能缺課）</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-lg mb-3 text-gray-900">💰 Uang Jaminan (Deposit)</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-yellow-600">NT$1,000</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">Untuk kelas online (保證金)</p>
                <p className="text-sm text-gray-600">✅ Dikembalikan jika selesai semua kursus</p>
                <p className="text-xs text-gray-500">完成所有課程後退還</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-blue-900">
                <strong>📝 Catatan Penting:</strong> Biaya praktik (NT$4,000) dibayar terpisah setelah lulus ujian teori. 
                Peserta wajib menyelesaikan praktik dalam 6 bulan setelah lulus teori.
              </p>
              <p className="text-xs text-blue-700 mt-2">
                術科學費按規定4000元，學員應於6個月內配合完成術科課程
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
