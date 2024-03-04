import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-text font-text text-background">
      <div className="flex justify-between">
        <div className="ml-1 ">
          <div className="pt-4 text-2xl font-bold">Contact Us</div>
          <div className="text-sm">
            <a href="tel:999-999-9999" className="hover:underline">
              999-999-9999
            </a>
            <a
              href="mailto:buisness@tulsalawn.com"
              className="block hover:underline"
            >
              buisness@tulsalawn.com
            </a>
          </div>
        </div>

        <div className="h-30 mt-4 w-[1px] bg-background"></div>

        <div className="mr-1 text-end ">
          <div className="pt-4 text-2xl font-bold">Connect</div>
          <div className="flex justify-end gap-3 pt-1 text-4xl">
            <div>
              <a href="http://www.facebook.com" target="_blank" aria-label="Tulsa Lawn Facebook">
                <FaSquareFacebook />
              </a>
            </div>
            <div>
              <a href="http://www.instagram.com" target="_blank" aria-label="Tulsa Lawn Instagram">
                <FaSquareInstagram />
              </a>
            </div>
            <div>
              <a href="http://www.twitter.com" target="_blank" aria-label="Tulsa Lawn Twitter">
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[5%] mt-2 h-[1px] w-[90%] bg-background"></div>

      <div className="flex items-center justify-around p-4">
        <Link to="/Tulsa-Lawn/privacy-policy" target="_blank" className="text-xs hover:underline">
          Privacy Policy
        </Link>
        <Link to="/Tulsa-Lawn/terms-of-use" target="_blank" className="text-xs hover:underline">
          Terms of Use
        </Link>
      </div>
    </div>
  );
}

export default Footer;
