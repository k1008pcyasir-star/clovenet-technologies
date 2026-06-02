import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Products from "../components/sections/Products"
import Services from "../components/sections/Services"
import CallToAction from "../components/sections/CallToAction"
import Contact from "../components/sections/Contact"
import LegalPreview from "../components/sections/LegalPreview"

function HomePage({ t, lang }) {
  return (
    <>
      <Hero t={t} />
      <About t={t} />
      <Products t={t} lang={lang} />
      <Services t={t} lang={lang} />
      <CallToAction t={t} />
      <Contact t={t} />
      <LegalPreview t={t} />
    </>
  )
}

export default HomePage