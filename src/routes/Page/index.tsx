import CardCar from "../../components/CardCar"
import Header from "../../components/Header"
import TitleSection from "../../components/TitleSection"

export default function Page() {

    return (
        <>
        <Header />
        <main>
            <section id="ct-cars-section-container" className="ct-container">
                <TitleSection />
                <CardCar />
                <CardCar />
            </section>
        </main>
        </>
    )
}