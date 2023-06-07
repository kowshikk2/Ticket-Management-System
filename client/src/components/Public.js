import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Kowshik Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Mugappair, Kowshik Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Kowshik Repairs<br />
                    Venky street<br />
                    Mugappair 600037<br />
                    <a href="tel:+9876543210">(+91) 9876543210</a>
                </address>
                <br />
                <p>Owner: Kowshik</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public