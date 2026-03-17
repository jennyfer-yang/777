import { Hero } from "./components/Hero";
import { CourseInfo } from "./components/CourseInfo";
import { PricingSection } from "./components/PricingSection";
import { Requirements } from "./components/Requirements";
import { PaymentInfo } from "./components/PaymentInfo";
import { ImportantNotes } from "./components/ImportantNotes";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <CourseInfo />
      <PricingSection />
      <Requirements />
      <PaymentInfo />
      <ImportantNotes />
      <Footer />
    </div>
  );
}