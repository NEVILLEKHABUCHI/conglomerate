import ImageSlider from "./ImageSlider";

const Home=()=>{
    const images=[
        'Civil.jpg',
        'Architecture.jpg',
        'Electrical.jpg',
        'Mechanical.jpg',
        'Software.jpg'
    ]
    return (
        <div className="homeBody">
            <div className="bodyTop">
                <div className="left">
                    <div>
                       <h2>Welcome to Conglomerate Engineering</h2><br/>
                       <p>
                        Where innovation meets expertise. We connect you with the best engineers to bring your projects to life, 
                        no matter the scale or complexity. <br/><br/>
                        Explore our services and discover how we can engineer your success together.
                       </p><br/>
                      <div className="button">
                        <button>Explore Services</button>
                      </div>
                    </div>
                </div>
                <div>
                    <ImageSlider images={images} interval={4000}/>
                </div>
            </div>

            <div className="bodyBottom">
                <i class="fas fa-cogs"></i>
                <p>Engineering Connections, Building Excellence</p>
            </div>
        </div>
    )
};
export default Home;