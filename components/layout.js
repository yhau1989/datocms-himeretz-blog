import Alert from '../components/alert'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <div className="container grid justify-items-center">
          <Image src="/Himeretz_Logo_transparencia1.png" alt="Himeretz logo" width={200}  height={185} />
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
