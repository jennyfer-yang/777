import { CheckCircle, BookOpen, Users, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function CourseInfo() {
  const features = [
    {
      icon: CheckCircle,
      title: "Jaminan Lulus",
      titleCn: "保證通過",
      description: "Bimbingan sampai lulus ujian teori tanpa biaya tambahan",
      descriptionCn: "保證輔導您直到通過「學科測驗」為止，不再加收任何額外費用"
    },
    {
      icon: BookOpen,
      title: "Materi Lengkap",
      titleCn: "完整教材",
      description: "92 jam teori + 41 jam praktik & magang",
      descriptionCn: "92小時學科 + 41小時實作加醫院實習"
    },
    {
      icon: Users,
      title: "Bimbingan 1-on-1",
      titleCn: "一對一輔導",
      description: "Pembelajaran personal dengan instruktur berpengalaman",
      descriptionCn: "經驗豐富的講師一對一個人化教學"
    },
    {
      icon: MapPin,
      title: "Lokasi Strategis",
      titleCn: "地點方便",
      description: "Teori: Distrik Barat Taichung | Praktik: Distrik Daya Taichung",
      descriptionCn: "學科：台中市西區 | 術科：台中市大雅區"
    }
  ];

  const targetAudience = [
    { id: "家庭看護", text: "Caregiver rumah tangga (家庭看護)" },
    { id: "機構看護工", text: "Caregiver di institusi/panti jompo (機構看護工)" },
    { id: "做過家庭看護的廠工", text: "Pekerja pabrik yang pernah jadi caregiver (做過家庭看護的廠工)" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tentang Kursus Ini
          </h2>
          <p className="text-xl text-gray-600">
            關於本課程
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-colors hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{feature.titleCn}</p>
                    <p className="text-sm text-gray-700 mb-2">{feature.description}</p>
                    <p className="text-xs text-gray-500">{feature.descriptionCn}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="w-7 h-7 text-blue-600" />
              <div>
                <div>Kursus Ini Cocok Untuk</div>
                <div className="text-lg text-gray-600 font-normal mt-1">本課程適合在台移工</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              {targetAudience.map((audience) => (
                <div key={audience.id} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{audience.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                Lokasi Kelas (上課地點)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📚 Kelas Teori (學科)</h4>
                <p className="text-gray-700">Distrik Barat, Kota Taichung</p>
                <p className="text-sm text-gray-500">台中市西區</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🏥 Kelas Praktik (術科)</h4>
                <p className="text-gray-700">Distrik Daya, Kota Taichung</p>
                <p className="text-sm text-gray-500">台中市大雅區</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-green-600" />
                Jadwal & Durasi (時間安排)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">⏱️ Total Durasi</h4>
                <p className="text-gray-700">92 jam teori + 41 jam praktik & magang</p>
                <p className="text-sm text-gray-500">92小時學科 + 41小時實作加醫院實習</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📅 Praktik</h4>
                <p className="text-gray-700">2 hari per bulan (tidak boleh absen)</p>
                <p className="text-sm text-gray-500">每個月安排上課2天（不能缺課）</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
