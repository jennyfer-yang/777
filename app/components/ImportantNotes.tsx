import { AlertCircle, BookCheck, Shield, Award, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";

export function ImportantNotes() {
  const importantPoints = [
    {
      icon: "📜",
      title: "Tujuan Kursus",
      titleCn: "課程目的",
      text: "Saya mengikuti kelas ini untuk mendapatkan sertifikat terkait layanan perawatan yang diakui oleh Kementerian Kesehatan Taiwan. Ini BUKAN untuk mengurus izin tinggal tetap.",
      textCn: "我清楚知道我上課是為了拿台灣衛福部認可，照顧服務相關證明，這不是幫我辦理永久居留，也不是幫我申請永久居留。"
    },
    {
      icon: "💻",
      title: "Kelas Online & Deposit",
      titleCn: "網路上課及保證金",
      text: "Kelas teori online GRATIS, tapi harus bayar deposit NT$1,000. Deposit dikembalikan jika menyelesaikan semua 92 jam teori + 41 jam praktik & magang.",
      textCn: "網路用手機上學科的上課是免費用，但要繳保證金1000元(NT)，必須要完成所有92小時的學科，及衛福部要求的實作加醫院實習（41小時），如果沒有全部完成，我不能拿回保證金。"
    },
    {
      icon: "🎓",
      title: "Dua Sertifikat Diperlukan",
      titleCn: "需要兩張證書",
      text: "Harus mendapat 2 sertifikat: (1) Sertifikat teori 56 jam + lulus ujian Mandarin, (2) Sertifikat praktik & magang 41 jam (NT$4,000). Kedua sertifikat diperlukan untuk mengajukan sertifikat resmi perawat.",
      textCn: "我明白上課拿到二張証書，才能申請照服員的證書。台灣照服員學科的証書，除了上課56小時之外，還要中文考試及格。另一張証書是現場實作和去醫院實習總共上完41小時，要繳4000元。"
    },
    {
      icon: "📚",
      title: "Kelas Penguatan (Jika Diperlukan)",
      titleCn: "加強訓練班",
      text: "Jika tidak bisa lulus ujian Mandarin sendiri dan membutuhkan kelas penguatan soal bahasa Mandarin (kelas jaminan), harus bayar biaya tambahan sendiri.",
      textCn: "如果我無法自己考試通過，如果需要中文考題加強訓練保證班，我必須自己另外繳錢。"
    },
    {
      icon: "✨",
      title: "Nilai & Manfaat",
      titleCn: "價值提升",
      text: "Kedua sertifikat harus lulus semuanya sebelum dapat mengajukan sertifikat resmi perawat. Ini dapat meningkatkan kemampuan serta nilai diri Anda.",
      textCn: "以上二張証書都合格，才能拿去申請照服員的証書。可以提升自己的能力和價值。"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-100 px-6 py-3 rounded-full mb-6">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <span className="font-semibold text-red-900 text-lg">Harap Dibaca dengan Seksama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Informasi Penting yang Harus Dipahami</h2>
          <p className="text-xl text-gray-600">
            重要說明事項
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 mb-12">
          {importantPoints.map((point, index) => (
            <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="text-3xl">{point.icon}</span>
                  <div>
                    <div className="text-gray-900">{point.title}</div>
                    <div className="text-sm font-normal text-gray-600 mt-1">{point.titleCn}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-800 mb-3 leading-relaxed">{point.text}</p>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {point.textCn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookCheck className="w-6 h-6 text-green-600" />
                Total Jam Kursus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Teori (學科)</p>
                  <p className="text-2xl font-bold text-green-600">92 Jam</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Praktik & Magang</p>
                  <p className="text-2xl font-bold text-green-600">41 Jam</p>
                </div>
                <div className="bg-green-600 text-white p-3 rounded-lg">
                  <p className="text-sm mb-1">Total</p>
                  <p className="text-3xl font-bold">133 Jam</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="w-6 h-6 text-purple-600" />
                Sertifikat yang Didapat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckSquare className="w-5 h-5 text-purple-600" />
                    <p className="font-semibold text-gray-900">Sertifikat 1</p>
                  </div>
                  <p className="text-sm text-gray-700">Teori 56 jam + Ujian Mandarin</p>
                  <p className="text-xs text-gray-500 mt-1">學科測驗證書</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckSquare className="w-5 h-5 text-purple-600" />
                    <p className="font-semibold text-gray-900">Sertifikat 2</p>
                  </div>
                  <p className="text-sm text-gray-700">Praktik & Magang 41 jam</p>
                  <p className="text-xs text-gray-500 mt-1">實作加醫院實習證書</p>
                </div>
                <Alert className="bg-purple-600 text-white border-0">
                  <AlertDescription className="text-center font-semibold">
                    = Sertifikat Resmi Perawat
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="w-6 h-6 text-blue-600" />
                Jaminan Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Bimbingan sampai lulus ujian teori</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Tanpa biaya tambahan untuk teori</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Bantuan daftar praktik & magang</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Bantuan pengajuan sertifikat resmi</p>
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-lg mt-4">
                  <p className="text-xs mb-1">Diakui oleh:</p>
                  <p className="text-sm font-semibold">Kementerian Kesehatan Taiwan</p>
                  <p className="text-xs mt-1">衛福部認可</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Siap Memulai Perjalanan Anda?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Daftar sekarang dan dapatkan promo Early Bird!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#pricing" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Lihat Paket & Harga
                </a>
                <a 
                  href="#payment" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Cara Pembayaran
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                ⚡ Kuota terbatas! Siapa cepat bayar, dapat tempat lebih dulu
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
