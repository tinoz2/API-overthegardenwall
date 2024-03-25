import Brand from "./Brand"
import Characters from "./Characters"
import FetchApi from "./FetchApi"
import Soundtracks from "./Soundtracks"
import FetchApiSoundtracks from "./FetchApiSoundtracks"
import Features from "./Features"
import Footer from "./Footer"

const Home = () => {
    return (
        <>
            <main className="max-w-4xl m-auto main sm:max-w-sm">
                <Brand />
            </main>
            <div className="flex justify-center items-center bg-background">
                <div className="max-w-4xl sm:max-w-xs">
                    <FetchApi />
                    <Characters />
                    <FetchApiSoundtracks />
                    <Soundtracks />
                    <Features />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home