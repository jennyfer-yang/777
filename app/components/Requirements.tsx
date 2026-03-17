import { FileText, Calendar, AlertCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Requirements() {
  const documents = [
    { id: 1, text: "Formulir pendaftaran (yang daftar online tidak perlu kirim ulang)", cn: "報名表(網路報名者，毋需再檢附此報名表)" },
    { id: 2, text: "Fotokopi depan & belakang ARC (Kartu Izin Tinggal)", cn: "居留證、反面影本一份" },
    { id: 3, text: "4 lembar foto ukuran 1 inci", cn: "一吋照片4張" }
  ];

  const refundPolicy = [
    {
      title: "Akun dibuat & ada penjelasan",
      titleCn: "上課帳號設定及完成上課說明",
      fee: "NT$6,000",
      description: "Biaya administrasi"
    },
    {
      title: "Sudah mulai kelas & terima modul/video",
      titleCn: "開始上課後，領取中印尼文課程教學講義或影片",
      fee: "NT$10,000",
      description: "Biaya materi"
    },
    {
      title: "Ujian dimulai tapi peserta mundur",
      titleCn: "學科測驗開始後學員放棄完成測驗",
      fee: "NT$2,000",
      description: "Pengembalian hanya"
    },
    {
      title: "Sudah lulus & dapat sertifikat",
      titleCn: "完成學科測驗通過證書",
      fee: "NT$0",
      description: "Tidak ada pengembalian"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan
          </h2>
          <p className="text-xl text-gray-600">
            報名條件及規定
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Dokumen yang Diperlukan */}
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-3 text-xl">
                <FileText className="w-6 h-6 text-blue-600" />
                <div>
                  <div>Dokumen yang Diperlukan</div>
                  <div className="text-sm font-normal text-gray-600 mt-1">術科學員應配合提供下列文件</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      {doc.id}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 font-medium">{doc.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{doc.cn}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-900">
                  <strong>⚕️ Info Tes Medis:</strong> Peserta wajib memahami detail tes medis, rumah sakit rujukan, dan jadwal tes. 
                  Tidak perlu puasa sebelum tes.
                </p>
                <p className="text-xs text-yellow-700 mt-2">
                  學員需完整了解體檢項目/特約醫院及體檢時間 - 體檢前不需空腹喔
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Jadwal Pendaftaran */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Calendar className="w-6 h-6 text-green-600" />
                <div>
                  <div>Batas Pendaftaran</div>
                  <div className="text-sm font-normal text-gray-600 mt-1">最後報名截止時間</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">📅 Kapan Bisa Mulai?</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Peserta yang menyelesaikan pembayaran pada hari pendaftaran bisa langsung mengikuti kelas
                </p>
                <p className="text-xs text-gray-500">
                  報名當天繳費完成者，即可上課
                </p>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">⚠️ Kuota Minimum</h4>
                    <p className="text-sm text-red-800 mb-2">
                      Jika jumlah pendaftar kurang dari 15 orang, kelas tidak akan dibuka dan biaya akan dikembalikan 100%
                    </p>
                    <p className="text-xs text-red-600">
                      名額有限，未滿15人報名者，全額退費，不予開課
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">📋 Kewajiban Peserta</h4>
                <p className="text-sm text-blue-800">
                  Peserta setuju mengikuti jadwal & lokasi yang ditentukan, menyelesaikan kursus teori dan praktik sesuai waktu yang ditetapkan
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  學員同意配合於甲方指定上課時間、地點，並於指定日期前配合完成指定學科課程
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Kebijakan Pengembalian Dana */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-orange-50">
            <CardTitle className="flex items-center gap-3 text-xl">
              <XCircle className="w-6 h-6 text-orange-600" />
              <div>
                <div>Kebijakan Pengembalian Dana</div>
                <div className="text-sm font-normal text-gray-600 mt-1">退費政策（繳費完成後三個月內未完成學科課程）</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-sm text-orange-900">
                <strong>📌 Ketentuan:</strong> Jika dalam 3 bulan setelah bayar, peserta tidak menyelesaikan kursus teori, 
                maka akan diproses sesuai tahapan berikut:
              </p>
              <p className="text-xs text-orange-700 mt-2">
                確認三個月內學員未配合完成學科課程時，則以下列方式處理，其餘退還學費
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {refundPolicy.map((policy, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border-2 border-gray-200 hover:border-orange-400 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm flex-1">{policy.title}</h4>
                    <span className="text-lg font-bold text-orange-600 ml-2">{policy.fee}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{policy.titleCn}</p>
                  <p className="text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p className="text-sm text-red-900">
                <strong>⏰ Penting:</strong> Peserta wajib menyelesaikan praktik dalam 6 bulan setelah lulus teori. 
                Jika sudah lulus dan mendapat sertifikat, tidak ada pengembalian dana.
              </p>
              <p className="text-xs text-red-700 mt-2">
                學員應於6個月內配合完成術科課程。完成學科測驗通過證書，甲方已保證責任完成，不予退費
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Manfaat Sertifikat */}
        <Card className="mt-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
          <CardHeader className="bg-purple-100">
            <CardTitle className="text-xl">
              💼 Manfaat Setelah Lulus Kursus
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">本課程的優勢與價值</p>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="benefit-1" className="border-b-0 mb-3">
                <AccordionTrigger className="bg-white px-4 py-3 rounded-lg hover:bg-purple-50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    <div className="text-left">
                      <div className="font-semibold">Peluang Kerja & Gaji Lebih Tinggi</div>
                      <div className="text-sm text-gray-500">提高薪水的機會</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-white mt-2 px-4 py-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">
                    Setelah mendapat izin tinggal permanen, Anda bisa pakai sertifikat ini untuk bekerja mandiri di rumah sakit 
                    sebagai pendamping 1-on-1
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-green-900 mb-2">💵 Gaji Harian:</p>
                    <p className="text-2xl font-bold text-green-600">NT$2,800 - NT$3,500</p>
                    <p className="text-xs text-green-700 mt-2">
                      可以用證書，自己找雇主到醫院做1對1照服員工作，薪水每天2800~3500元
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="benefit-2" className="border-b-0 mb-3">
                <AccordionTrigger className="bg-white px-4 py-3 rounded-lg hover:bg-purple-50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎓</span>
                    <div className="text-left">
                      <div className="font-semibold">Meningkatkan Kemampuan & Pengetahuan</div>
                      <div className="text-sm text-gray-500">提高照護能力技術、知識</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-white mt-2 px-4 py-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">
                    Kursus ini tidak hanya untuk mendapat sertifikat, tapi juga meningkatkan kemampuan professional Anda dalam merawat lansia dan pasien
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Teknik perawatan profesional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Pengetahuan medis dasar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Komunikasi dengan pasien & keluarga</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="benefit-3" className="border-b-0">
                <AccordionTrigger className="bg-white px-4 py-3 rounded-lg hover:bg-purple-50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏥</span>
                    <div className="text-left">
                      <div className="font-semibold">Bantuan Lengkap Sampai Dapat Sertifikat</div>
                      <div className="text-sm text-gray-500">協助申請取得衛福部認可證書</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-white mt-2 px-4 py-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">
                    Kami akan membantu Anda dari awal sampai mendapatkan sertifikat resmi dari Kementerian Kesehatan Taiwan
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">
                        1
                      </div>
                      <p className="text-sm text-gray-700">Bantuan daftar praktik & magang di rumah sakit</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">
                        2
                      </div>
                      <p className="text-sm text-gray-700">Jadwal kelas praktik teratur (2 hari/bulan)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">
                        3
                      </div>
                      <p className="text-sm text-gray-700">Bantuan pengajuan sertifikat resmi ke Kementerian Kesehatan</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    協助您申請取得衛福部認可「照顧服務員證書」
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
