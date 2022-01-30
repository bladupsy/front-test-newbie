import logo from './../../assets/images/logo.svg'
import women from './../../assets/images/hero-desktop.jpg'
import "./home.css"
import Footer from '../../components/footer/footer';


function Home() {
    return (
        <>
        <div className="container-flex">
        
            <div className="flex-container-section">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <section className="">
                    <div>
                        <h1>We're coming soon</h1>
                    </div>
                    <div>
                        <p>
                            Hello fellow shoppers! We're currently building our new fashion store.
                            Add your email below to stay up-to-date with announcements and our launch deals.
                        </p>
                    </div>
                    <div>
                        <form>
                            <div>
                                <label></label>
                                <input placeholder="Email Address" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <div className="flex-container-item-desktop">
                <img src={women} alt='girl women' />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home