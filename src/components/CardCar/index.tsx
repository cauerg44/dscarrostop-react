import './styles.css'
import carImg from '../../assets/car-card.png'

export default function CardCar() {
    
    return (
        <div className="ct-card-car ct-container">
            <img src={carImg} alt="Carro" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    )
}