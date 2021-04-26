import Alert from "../components/alert";
import Footer from "../components/footer";
// import Image from "next/image";
import LogoHimeretzNegro from "./logo-himeretz-negro";


export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <div className="mt-4 flex justify-center">
          <div className="container p-0 m-0 flex flex-col sm:flex-row items-center justify-center space-x-5">
            <LogoHimeretzNegro className="h-48"></LogoHimeretzNegro>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
              Himeretz blog 🌿
            </h1>
          </div>
          {/* <Image src="/Himeretz_Logo_transparencia1.png" alt="Himeretz logo" width={200}  height={185} /> */}
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
