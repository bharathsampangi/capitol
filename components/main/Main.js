import React from "react"
import Hero from "../hero/Hero"
import Location from "../location/Location"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import About from "../about/About"
import Enquire from "../enquire/Enquire"
import Project from "../project/Project"
import Amenities from "../Amenities/Amenities"
import Pricing from "../Pricing/Pricing"
import EnquireModal from "../EnquireModal/EnquireModal"
import FloatingHeader from "../floating/FloatingHeader"
import Preview from "../preview/Preview"

const Main = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <main>
            <Navbar />
            <Hero {...{
                openModal
            }}
            />
            <EnquireModal {...{
                isOpen,
                setIsOpen
            }} />
            <About />
            <Project {...{
                openModal
            }}/>
            <Amenities />
            <Pricing {...{
                openModal
            }}/>
            <Preview />
            <Location />
            <Enquire />
            <Footer />
            <FloatingHeader />
        </main>
    )
}

export default Main