import { FaFacebook, FaLocationDot  } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin, FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div>
            <div className="bg-no-repeat h-screen bg-[url(https://i.ibb.co/2KjMNhv/13.jpg)] ">
                <div className="flex items-center justify-center gap-10 pt-20 m-10 ">
                    <div className="mt-20">
                        <img className="h-14 w-12" src="https://i.ibb.co/Q8r71kK/logo1.png" alt="" />
                        <h1 className="font-bold text-xl pt-4">Espresso Emporium</h1>
                        <p className="mt-4">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your <br />
                         best companion.</p>
                         <div className="flex mt-6 gap-4 text-3xl">
                          <FaFacebook />
                          <FaInstagramSquare />
                          <FaLinkedin />

                         </div>
                         <h1 className="font-bold text-xl pt-4 mb-4">Get in Touch</h1>
                         <div className="flex gap-6 pl-4">
                         <FaPhoneAlt />
                          +017***********
                         </div>
                         <div className="flex gap-6 pl-4 pt-2">
                         <MdEmail />
                            coffeshop123@gmail.com
                         </div>
                         <div className="flex gap-6 pl-4 pt-2">
                         <FaLocationDot />
                            Dhanmondi 27, Dhaka
                         </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl pt-4">Connect with Us</h1>
                        <form>
                            <input className="w-full p-2 mt-2" type="text" name="name" placeholder="Name" id=""/> <br />
                            <input className="w-full p-2 mt-2"  type="text" name="email" placeholder="Email" id=""/>
                            <textarea type="text" name="message" placeholder="Message" className="textarea textarea-lg w-full  mt-2" ></textarea> <br />
                            <button type="submit" className="btn border-black">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;