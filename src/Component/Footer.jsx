import logo from "../Images/logo.png"
import youtube from "../Images/socialmedia/YouTube.png"
import twiter from "../Images/socialmedia/Twitter.png"
import Telegram from "../Images/socialmedia/Telegram App.png"
import Instagram from "../Images/socialmedia/Instagram.png"
import Medium from "../Images/socialmedia/Medium.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-[#101010] z-10 rounded-t-2xl">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                    <div className="md:flex md:justify-between tablet:justify-center z-10">
                        <div className="flex flex-col gap-5 mb-6 max-w-[40%] tablet:max-w-[100%] tablet:items-center md:mb-0">
                            <a href="" className="flex items-center">
                                <img src={logo} className="h-[50px] me-3" alt="FlowBite Logo" />
                            </a>
                            <p className="tablet:text-center text-white">
                                Stay updated with the latest developments by following us on social media and joining our community. For inquiries or support, reach out to our team via email.
                            </p>
                            <div className="flex gap-5">
                                <a target="blank" href=" ">
                                    <img className="hover:scale-[1.3] transform-scale duration-300" src={youtube} alt="" />
                                </a>
                                <a target="blank" href=" ">
                                    <img className="hover:scale-[1.3] transform-scale duration-300" src={twiter} alt="" />
                                </a>
                                <a target="blank" href=" ">
                                    <img className="hover:scale-[1.3] transform-scale duration-300" src={Telegram} alt="" />
                                </a>
                                <a target="blank" href=" ">
                                    <img className="hover:scale-[1.3] transform-scale duration-300" src={Instagram} alt="" />
                                </a>
                                <a target="blank" href=" ">
                                    <img className="hover:scale-[1.3] transform-scale duration-300" src={Medium} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="mt-16 flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">Home</li>
                                    <li className="tablet:text-center">Services</li>
                                </ul>
                            </div>
                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Important</h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a target="blank" href="https://smartbcconcept.net" className="hover:underline">Sign Up</a>
                                    </li>
                                    <li className="tablet:text-center">
                                        <a target="blank" href="https://smartbcconcept.net/MemberPanel/Login.aspx" className="hover:underline">Log In</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gradient sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm sm:text-center text-gray-400">© {currentYear} Smart BC Concept. All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
