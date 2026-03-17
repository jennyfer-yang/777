import { Phone, MapPin, Mail, Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Kursus Pendamping Perawatan
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              照顧服務員中文學科一對一輔導保證班
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Program bimbingan profesional untuk mendapatkan sertifikat pendamping perawatan resmi di Taiwan
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">04-22215555 ext. 11</p>
                  <p className="text-xs text-gray-500">電話諮詢</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">YADA Innovation</p>
                  <p className="text-xs text-gray-500">亞大創新企管顧問有限公司</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Lokasi Kelas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Kelas Teori</p>
                  <p className="text-xs text-gray-400">Distrik Barat, Kota Taichung</p>
                  <p className="text-xs text-gray-500">台中市西區</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Kelas Praktik</p>
                  <p className="text-xs text-gray-400">Distrik Daya, Kota Taichung</p>
                  <p className="text-xs text-gray-500">台中市大雅區</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-sm hover:text-blue-400 transition-colors">
                  Harga & Promo
                </a>
              </li>
              <li>
                <a href="#payment" className="text-sm hover:text-blue-400 transition-colors">
                  Cara Pembayaran
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm hover:text-blue-400 transition-colors">
                  Paket Kursus
                </a>
              </li>
              <li>
                <a href="tel:04-22215555" className="text-sm hover:text-blue-400 transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2026 YADA Innovation Management Consultant Co., Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Diakui oleh:</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-semibold">
                衛福部 - Kementerian Kesehatan Taiwan
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
