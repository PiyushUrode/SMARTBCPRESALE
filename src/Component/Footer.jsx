import logo from "../Images/logo.png"
import Insta from "../Images/headericon/Logo-01.svg"
import Facebook from "../Images/headericon/Logo-02.svg"
import X from "../Images/headericon/Logo-03.svg"
import Telegram from "../Images/headericon/Logo-04.svg"


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
                            <p className="tablet:text-center text-white w-[60%]" >
                            SMART BC Token (SMBC) is a versatile BEP-20 token empowering staking, e-commerce, NFTs, and metaverse applications with future integration on its own Blitz Blockchain for scalability and transparency.
                            </p>
                            <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm sm:text-center text-[#88FADE]">© {currentYear} Smart BC Concept. All Rights Reserved.</span>
                    </div>

                        </div>
                        <div className="mt-16 flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Important Link</h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">About Us</li>
                                    <li className="tablet:text-center">White Paper</li>
                                    <li className="tablet:text-center">Roadmap</li>
                                    <li className="tablet:text-center">Tokenomics</li>
                                </ul>
                            </div>

                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">About us</h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">Token</li>
                                    <li className="tablet:text-center">Team</li>
                                </ul>
                            </div>

                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Privacy</h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">Terms & condition</li>
                                    <li className="tablet:text-center">Privacy Policy</li>
                                </ul>
                            </div>

                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Important</h2>
                                <ul className="text-gray-400 font-medium">
  <li className="mb-4 flex items-center gap-2 tablet:text-center">
    <img src={Insta} alt="Terms & Conditions" className="w-6 h-6" />
    <span> Instagram </span>
  </li>
  <li className="flex items-center gap-2 tablet:text-center">
    <img src={Facebook} alt="Privacy Policy" className="w-6 h-6" />
    <span>Facebook</span>
  </li>
  <li className="flex items-center gap-2 tablet:text-center">
    <img src={X} alt="Privacy Policy" className="w-6 h-6" />
    <span>X</span>
  </li>

  <li className="flex items-center gap-2 tablet:text-center">
    <img src={Telegram} alt="Privacy Policy" className="w-6 h-6" />
    <span>Telegram</span>
  </li>





</ul>

                            </div>
                        </div>
                    </div>
                   
                </div>
            </footer>
        </>
    )
}

export default Footer;
