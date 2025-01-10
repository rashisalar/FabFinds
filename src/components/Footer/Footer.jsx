import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const footerLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container mx-auto py-8 px-6">
        {/* Footer Main Section */}
        <div data-aos="zoom-in" className="flex flex-col md:flex-row justify-between items-start text-left gap-8">
          {/* Company Details (Left) */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="FabFinds Logo" className="w-12 h-12" />
              <h1 className="sm:text-3xl text-xl font-bold">FabFinds</h1>
            </div>
            <p>
              Your one-stop destination for the latest trends, curated
              collections, and unbeatable deals. Experience shopping like never
              before with FabFinds!
            </p>
          </div>

          {/* Quick Links (Center) */}
          <div className="flex-1 text-center">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Right) */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">123 Fashion Street</p>
            <p className="mb-2">New York, NY 10001</p>
            <p className="mb-2">Email: support@fabfinds.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center py-2 border-t border-gray-600 mt-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FabFinds. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
