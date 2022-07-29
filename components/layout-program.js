import Footer from "./footer";
import Header from "./header";

export default function ProgramLayout({children}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}