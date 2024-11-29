import './styles.css'
import CardCar from "../../components/CardCar"
import Header from "../../components/Header"
import TitleSection from "../../components/TitleSection"
import TitleSection2 from "../../components/TitleSection2"
import CommentCard from '../../components/CommentCard'

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
            <section id="ct-comments-section-container">
                <TitleSection2 />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </section>
        </main>
        </>
    )
}