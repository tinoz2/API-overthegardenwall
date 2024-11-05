import { Navbar } from "keep-react";
import {
    GithubLogo,
} from "phosphor-react";
import logo from '../img/a.jpg'
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <Navbar className="bg-navbar shadow-md"
            fluid={true}
        >
            <Navbar.Container className="flex items-center justify-between p-4">
                <Navbar.Brand className="flex items-center">
                    <img className="w-24 rounded-full sm:w-20" src={logo} alt="" />
                    <h1 className="ml-6 text-3xl text-white font-medium sm:text-2xl"><Link to='/'>Garden API.</Link></h1>
                </Navbar.Brand>

                <Navbar.Container className="flex items-center gap-6">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex items-center justify-between gap-4"
                    >
                        <Navbar.Link
                            icon={<GithubLogo size={30} color="#fff" />}
                            iconAnimation={true}
                        />
                    </Navbar.Container>
                </Navbar.Container>
                <Navbar.Collapse
                    collapseType="sidebar"
                    className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
                >
                    <Navbar.Container tag="ul" className="flex flex-col gap-5">
                        <Navbar.Link
                            linkName="Github"
                            icon={<GithubLogo size={20} />}
                            className="!py-0"
                        />
                    </Navbar.Container>
                </Navbar.Collapse>
            </Navbar.Container>
        </Navbar>
    );
}

export default NavbarComponent;