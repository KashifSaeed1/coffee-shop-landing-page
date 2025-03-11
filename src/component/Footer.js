
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Coffee,
  Clock,
  Heart,
  ChevronRight,
} from "lucide-react";

import coffeefooter from '../assests/coffeefooter.jpg';
const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/#about" },
  { title: "Menu", link: "/#menu" },
  { title: "Reservations", link: "/#reservations" },
  { title: "Contact", link: "/#contact" },
];

const coffeeExplore = [
  { title: "Our Coffee Beans", link: "/#beans" },
  { title: "Brewing Methods", link: "/#brewing" },
  { title: "Coffee Origins", link: "/#origins" },
  { title: "Seasonal Specials", link: "/#seasonal" },
  { title: "Coffee Blog", link: "/#blog" },
];

const openingHours = [
  { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 9:00 PM" },
  { day: "Sunday", hours: "8:00 AM - 7:00 PM" },
];

const FooterSection = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="py-6 px-5"
  >
    <h3 className="text-xl font-serif font-medium mb-6 text-coffee-cream relative inline-block after:absolute after:w-1/2 after:h-[2px] after:bg-coffee-accent after:bottom-0 after:left-0">
      {title}
    </h3>
    {children}
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a href={href} aria-label={label} className="social-icon group">
    <Icon
      size={18}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>
);

export default function Footer() {
  const footerStyle = {
    backgroundImage: `url(${coffeefooter})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer style={footerStyle} className="relative text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
      <div className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="py-6 px-5"
            >
              <Link to="/" className="inline-block mb-6">
                <h2 className="text-3xl font-serif font-bold text-coffee-cream flex items-center">
                  <Coffee size={28} className="mr-2 text-coffee-accent" />
                  Brew Haven
                </h2>
              </Link>
              <p className="text-white/80 mb-6 leading-relaxed">
                Crafting exceptional coffee experiences with precision, passion,
                and a commitment to sustainability. Every cup tells a story.
              </p>
              <div className="flex space-x-3 mb-8">
                <SocialLink
                  href="https://instagram.com"
                  icon={Instagram}
                  label="Instagram"
                />
                <SocialLink
                  href="https://facebook.com"
                  icon={Facebook}
                  label="Facebook"
                />
                <SocialLink
                  href="https://twitter.com"
                  icon={Twitter}
                  label="Twitter"
                />
                <SocialLink
                  href="https://linkedin.com"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://youtube.com"
                  icon={Youtube}
                  label="YouTube"
                />
              </div>
            </motion.div>

            <FooterSection title="Quick Links" delay={0.1}>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.link}
                      className="inline-flex items-center text-white/80 hover:text-coffee-accent transition-all duration-300"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 text-coffee-accent"
                      />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>

            <FooterSection title="Explore Coffee" delay={0.2}>
              <ul className="space-y-3">
                {coffeeExplore.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.link}
                      className="inline-flex items-center text-white/80 hover:text-coffee-accent transition-all duration-300"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 text-coffee-accent"
                      />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>

            <FooterSection title="Visit Us" delay={0.3}>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start">
                  <MapPin
                    size={18}
                    className="mr-3 mt-1 text-coffee-accent flex-shrink-0"
                  />
                  <p>Bahawalpur, Punjab Pakistan</p>
                </div>
                <div className="flex items-center">
                  <Phone
                    size={18}
                    className="mr-3 text-coffee-accent flex-shrink-0"
                  />
                  <p>+92 302-7877556</p>
                </div>
                <div className="flex items-center">
                  <Mail
                    size={18}
                    className="mr-3 text-coffee-accent flex-shrink-0"
                  />
                  <p>kashifsaeedman@gmail.com</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <h4 className="flex items-center mb-3 font-medium">
                    <Clock size={18} className="mr-2 text-coffee-accent" />{" "}
                    Opening Hours
                  </h4>
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between mb-2">
                      <span>{item.day}</span>
                      <span className="text-coffee-accent">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FooterSection>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-6 border-t border-white/10 text-center sm:flex sm:justify-between sm:text-left text-sm text-white/70"
          >
            <p>© {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
            <div className="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
              <a
                href="#"
                className="hover:text-coffee-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-coffee-accent transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-coffee-accent transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>
            <div className="mt-4 sm:mt-4 text-center sm:text-right text-xs flex items-center justify-center sm:justify-end gap-1">
              <span>Made with</span>
              <Heart
                size={12}
                className="text-coffee-accent animate-pulse-subtle"
              />
              <span>for coffee lovers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
