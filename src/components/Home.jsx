import skiImage from '../assets/img/ski.jpg'

const Home = (  ) => {
    return ( 
        <div className="container container-home">
            <div className="title">
                <h2> Bienvenido a Snow Rent</h2>
                <div>
                    <p>Nuestros productos son garantía de un equipo de calidad, con buen mantenimiento y adaptado a tu nivel y estilo. Te ayudamos a seleccionar el mejor equipo.</p>
                </div>
                <div>
                <a className='primary-button' href="/products">Ver Productos</a>
            </div>
            </div>
            <div>
                <img src={skiImage} alt="Esquiador" />
            </div>
        </div>
    )
    }
    export default Home