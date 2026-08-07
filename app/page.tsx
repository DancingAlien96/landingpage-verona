import Distribucion from "@/components/Distribucion";
import Financiamiento from "@/components/Financiamiento";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Modelo from "@/components/Modelo";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main>
        <Hero />
        <Modelo />
        <Distribucion />
        <Financiamiento />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
