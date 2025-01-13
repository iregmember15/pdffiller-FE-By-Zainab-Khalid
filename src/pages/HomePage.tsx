import Footer from "../components/Footer"
import Navbar from "../components/Home/Navbar"
import PDFTools from "../components/Home/PDFTools"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <PDFTools />
            <Footer />
            <div className="bg-[#182B57] h-10"></div>
        </>
    )
}

export default HomePage