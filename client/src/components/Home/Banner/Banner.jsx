import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";


const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Experience audio like never before with our top-rated headsets.Get lost in your favorite tunes with our noise-cancelling headsets.Hear every beat, every note with our premium headset selection.</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src ={BannerImg} alt=""/>
        </div>
    </div>
    )
};

export default Banner;
