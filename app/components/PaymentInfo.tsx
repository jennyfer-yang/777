import { CreditCard, Phone, Building2, Hash, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function PaymentInfo() {
  return (
    <section id="payment" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cara Pembayaran
          </h2>
          <p className="text-xl text-gray-600">
            繳費方式
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Instruksi Pembayaran */}
          <Card className="border-2 border-blue-500 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CreditCard className="w-7 h-7 text-blue-600" />
                <div>
                  <div>Informasi Rekening</div>
                  <div className="text-sm font-normal text-gray-600 mt-1">匯款帳戶資訊</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Nama Perusahaan / 戶名</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 leading-relaxed">
                    YADA INNOVATION MANAGEMENT CONSULTANT CO., LTD.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    亞大創新企管顧問有限公司
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <Hash className="w-5 h-5" />
                    <span className="text-sm font-medium">Kode Bank / 銀行代碼</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">807</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Hash className="w-6 h-6" />
                  <span className="font-medium">Nomor Rekening / 帳號</span>
                </div>
                <p className="text-3xl sm:text-4xl font-bold tracking-wider">
                  003-018-0013123-2
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Langkah-langkah */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Clock className="w-6 h-6 text-green-600" />
                <div>
                  <div>Langkah-langkah Pembayaran</div>
                  <div className="text-sm font-normal text-gray-600 mt-1">繳費流程</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      Transfer atau Remitansi
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Lakukan transfer bank atau remitansi ke rekening yang tertera di atas
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 inline-block">
                      <p className="text-sm text-yellow-900 font-medium">
                        ⏰ Selesaikan dalam 3 hari
                      </p>
                      <p className="text-xs text-yellow-700">請於三天內協助完成銀行轉帳或匯款</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      Konfirmasi Pembayaran
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Hubungi kami untuk konfirmasi pembayaran
                    </p>
                    <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-semibold text-blue-900 text-lg">04-22215555 ext. 11</p>
                          <p className="text-xs text-blue-600">電話確認</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-sm text-gray-900 font-medium mb-2">
                          📞 Yang perlu Anda sampaikan:
                        </p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Nama lengkap</li>
                          <li>• <strong>5 digit terakhir nomor rekening</strong> pengirim</li>
                          <li>• Jumlah yang ditransfer</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-3">
                          請致電協會告知帳號末五碼方便行政人員作業謝謝
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      Mulai Kursus
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Setelah pembayaran dikonfirmasi, Anda bisa langsung mulai kursus
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">Pembayaran hari ini = Kursus hari ini</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">報名當天繳費完成者，即可上課</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Catatan Penting */}
          <Card className="border-2 border-orange-300 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center">
                  <span className="text-xl">⚠️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                    Catatan Penting tentang Pembayaran
                  </h4>
                  <ul className="space-y-2 text-sm text-orange-900">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Siapa cepat bayar, dapat tempat lebih dulu (先繳費先卡位)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Simpan bukti transfer untuk keperluan konfirmasi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Pastikan jumlah transfer sesuai dengan paket yang dipilih</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Biaya praktik (NT$4,000) dibayar terpisah setelah lulus ujian teori</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontak */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ada Pertanyaan?</h3>
            <p className="text-blue-100 mb-6">Hubungi kami untuk informasi lebih lanjut</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:04-22215555" 
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                04-22215555 ext. 11
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
