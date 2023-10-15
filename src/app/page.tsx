import AboutUs from "@/components/AboutUs"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Team from "@/components/Team"


const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Stats />
      <Faq />
      <Team />
      <Footer />
    </div>
  )
}

export default page