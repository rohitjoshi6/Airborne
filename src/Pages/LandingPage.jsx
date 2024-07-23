import { useNavigate } from "react-router-dom";

function LandingPage () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/airplanes");
    }

    return(
        <section className="h-screen">
            <div className="bg-hero-image sm:bg-cover bg-center bg-no-repeat h-screen relative bg-fill">
                <div className="flex flex-col items-center justify-center h-full w-full bg-black bg-opacity-50 ">
                    <h1 className="sm:text-7xl text-white font-bold text-2xl">Airborne</h1>
                    <p className="sm:text-3xl text-white text-xl text-center">Detailed insights into airplane models, technical specifications, and their unique stories.</p>
                    <button className="bg-white text-black text-2xl font-bold py-2 px-4 mt-4 rounded-md hover:bg-sky-400 hover:text-white" onClick={handleClick}>Explore</button>
                </div>
            </div>
        </section> 
    )
}

export default LandingPage;