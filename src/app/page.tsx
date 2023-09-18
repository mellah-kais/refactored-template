import styles from './page.module.css'

import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import 'boxicons/css/boxicons.min.css'
import 'public/scss/style.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core";
import Topbar from './components/home/topbar'
import Hero from './components/home/hero'
import Header from './components/home/header'
import Footer from './components/home/footer'
import Whyus from './components/home/whyus'
import AboutUs from './components/home/aboutUs'
import Counts from './components/home/counts'
import Service from './components/home/service'
import Appointment from './components/home/appointement'
import Departement from './components/home/departement'
import Doctors from './components/home/doctors'
import Testimonial from './components/home/testimonial'
import Contact from './components/home/contact'
import Faq from './components/home/faq'
import Gallerie from './components/home/gallerie'

config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Topbar/>
      <Header/>
      <Hero/>
      <main>
        <Whyus/>
        <AboutUs/>
        <Counts/>
        <Service/>
        <Appointment/>
        <Departement/>
        <Doctors/>
        <Faq/>
        <Testimonial/>
        <Gallerie/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
