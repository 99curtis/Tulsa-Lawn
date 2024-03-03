import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";

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

      <div className="mt-2 flex items-center justify-between px-1">
        <a href="/privacy-policy" target="_blank" className="text-xs hover:underline">
          Privacy Policy
        </a>
        <div className="font-logo text-3xl">
          <a href="/" className="text-current">
            TULSA LAWN
          </a>
        </div>
        <a href="/terms-of-use" target="_blank" className="text-xs hover:underline">
          Terms of Use
        </a>
      </div>
    </div>
  );
}

export default Footer;
