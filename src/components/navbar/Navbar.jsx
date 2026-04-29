import { useState } from "react"
import logo from "../../assets/logo2.webp";
import { Menu, X, ChevronDown, Code, Smartphone, Palette, Layout, Database, Cloud, Shield, Zap, Globe } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: Code,
    href: "/services/web-development",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    href: "/services/app-development",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that delight users",
    icon: Palette,
    href: "/services/ui-ux-design",
  },
]

// ✅ EXISTING MEGA MENU (unchanged)
const megaMenuItems = {
  "Graphic Designing": [
    { title: "Logo Designing - Logo Revamping", icon: Palette, href: "/logo-design" },
    { title: "ID Card Designing", icon: Palette, href: "/id-card" },
    { title: "Visiting Card Designing", icon: Palette, href: "/visiting-card" },
    { title: "Envelope Designing", icon: Palette, href: "/envelope" },
    { title: "Letterhead Designing", icon: Palette, href: "/letterhead" },
    { title: "Corporate Gifts Designing", icon: Palette, href: "/corporate-gifts" },
    { title: "Corporate Stationery Designing", icon: Palette, href: "/stationery" },
    { title: "T-Shirt Designing", icon: Palette, href: "/tshirt" },
    { title: "Signs & Banners Designing", icon: Palette, href: "/banners" },
    { title: "Brochure Designing", icon: Palette, href: "/brochure" },
    { title: "Flyers Designing", icon: Palette, href: "/flyers" },
    { title: "Package Designing", icon: Palette, href: "/package" },
    { title: "Prepress Services", icon: Palette, href: "/prepress" },
  ],

   "Website Designing": [
    { title: "Basic Website Designing", icon: Layout, href: "/basic-website" },
    { title: "Responsive Website Designing", icon: Layout, href: "/responsive" },
    { title: "AMP", icon: Layout, href: "/amp" },
    { title: "Corporate Website Designing", icon: Layout, href: "/corporate" },
    { title: "CMS Website Designing", icon: Layout, href: "/cms" },
    { title: "Website Redesigning", icon: Layout, href: "/redesign" },
    { title: "UI/UX Frontend Designing", icon: Layout, href: "/ui-ux" },
    { title: "Website Updates & Maintenance", icon: Layout, href: "/maintenance" },
  ],

   "Website Development": [
    { title: "Custom Web Portal Development", icon: Code, href: "/web-portal" },
    { title: "ERP Business Solutions Development", icon: Database, href: "/erp" },
    { title: "Open Source Framework Development", icon: Code, href: "/framework" },
    { title: "Real Time Web Application Development", icon: Zap, href: "/realtime" },
  ],
  "Ecommerce Development": [
    { title: "Customized Ecommerce", icon: Layout, href: "/ecommerce-custom" },
    { title: "Ecommerce Using Framework", icon: Layout, href: "/ecommerce-framework" },
    { title: "SMS Gateway", icon: Zap, href: "/sms" },
    { title: "Payment Gateway", icon: Zap, href: "/payment" },
    { title: "Integration Services", icon: Database, href: "/integration" },
    { title: "Ecommerce Updates & Maintenance", icon: Layout, href: "/ecommerce-maintenance" },
    { title: "Photography Studio For Rent", icon: Globe, href: "/studio" },
    { title: "Product Photography", icon: Globe, href: "/product-photo" },
    { title: "Model Photography", icon: Globe, href: "/model-photo" },
  ],
  "Domain & Hosting": [
    { title: "Domain Services", icon: Globe, href: "/domain" },
    { title: "Hosting Services", icon: Cloud, href: "/hosting" },
    { title: "Business Emails", icon: Cloud, href: "/emails" },
    { title: "SSL Certificate", icon: Shield, href: "/ssl" },
  ],
}

// ✅ NEW MARKET SERVICES MEGA MENU (ADDED)
const marketMegaMenuItems = {
   "Digital Marketing Services": [
    { title: "Content Writing Services", icon: Globe, href: "/content-writing" },
    { title: "SEO - Search Engine Optimization", icon: Globe, href: "/seo" },
    { title: "SEM - Search Engine Marketing", icon: Zap, href: "/sem" },
    { title: "SMO - Social Media Optimization", icon: Smartphone, href: "/smo" },
    { title: "SMM - Social Media Marketing", icon: Smartphone, href: "/smm" },
    { title: "Link Building Services", icon: Globe, href: "/link-building" },
    { title: "Digital Presence Services", icon: Globe, href: "/digital-presence" },
    { title: "Email Marketing", icon: Database, href: "/email-marketing" },
    { title: "SMS Marketing", icon: Zap, href: "/sms-marketing" },
    { title: "Affiliate Marketing", icon: Globe, href: "/affiliate" },
    { title: "Other Google Services", icon: Globe, href: "/google-services" },
  ],
  "Offline Marketing Services": [
    { title: "Radio / FM Ads", icon: Zap, href: "/radio-ads" },
    { title: "Theater Ads", icon: Zap, href: "/theater-ads" },
    { title: "Bus Back Ads", icon: Layout, href: "/bus-ads" },
    { title: "Flyer / Pamphlet Ads", icon: Layout, href: "/flyer-ads" },
    { title: "TV Channel Ads", icon: Zap, href: "/tv-ads" },
    { title: "News Paper Ads", icon: Layout, href: "/newspaper" },
    { title: "Magazine Ads", icon: Layout, href: "/magazine" },
    { title: "Tele Calling Ads", icon: Smartphone, href: "/telecalling" },
  ],
 "Printing Services": [
    { title: "Offset Printing Services", icon: Layout, href: "/offset-printing" },
    { title: "Digital Printing Services", icon: Layout, href: "/digital-printing" },
    { title: "Screen Printing Services", icon: Layout, href: "/screen-printing" },
  ],
  "Media Services": [
    { title: "2D Animation", icon: Zap, href: "/2d-animation" },
    { title: "3D Walk Through & Animation", icon: Zap, href: "/3d-animation" },
    { title: "360 Panoramic View", icon: Globe, href: "/360-view" },
  ],
}

const navItems = [
    {
    title: "Company",
    hasDropdown: true,
    dropdownItems: [
      { title: "Company History", href: "/company-history" },
      { title: "Our Objective", href: "/objective" },
    ],
  },

  { title: "Services", hasMegaMenu: true },
  { title: "Market Services", hasMegaMenu: true},

  {
  title: "Products",
  hasDropdown: true,
  dropdownItems: [
    { title: "Office Management Software", href: "/office-management" },
    { title: "Website Live Chat", href: "/live-chat" },
    { title: "POS Software", href: "/pos" },
    { title: "Matrimonial Portal", href: "/matrimonial" },
    { title: "Classified Portal", href: "/classified" },
    { title: "HRM Portal", href: "/hrm" },
    { title: "CRM Portal", href: "/crm" },
  ],
},
  {
  title: "Mobile Apps",
  hasDropdown: true,
  dropdownItems: [
    { title: "Android App Development", href: "/android-app" },
    { title: "IOS App Development", href: "/ios-app" },
    { title: "Hybrid App Development", href: "/hybrid-app" },
  ],
},
  {
  title: "Portfolio",
  hasDropdown: true,
  dropdownItems: [
    { title: "Website Designing", href: "/portfolio/web-design" },
    { title: "Graphic Designing", href: "/portfolio/graphic-design" },
    { title: "Mobile Apps", href: "/portfolio/mobile-apps" },
    { title: "SEO", href: "/portfolio/seo" },
  ],
},
  {
  title: "Career",
  hasDropdown: true,
  dropdownItems: [
    { title: "Life at RD", href: "/career/life-at-rd" },
    { title: "Events & Celebration", href: "/career/events" },
    { title: "Join at RD", href: "/career/join" },
  ],
},

  { title: "Contact", href: "/contact" },
]

//function for navbar
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-16" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">

              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>

                  {item.hasMegaMenu ? (

  <>
    <NavigationMenuTrigger className="text-sm font-medium">
      {item.title}
    </NavigationMenuTrigger>

    <NavigationMenuContent>
      <div className="w-full p-6 md:w-[600px] lg:w-[800px]">

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(
            item.title === "Market Services"
              ? marketMegaMenuItems
              : megaMenuItems
          ).map(([category, items]) => (

            <div key={category}>
              <h3 className="text-sm font-semibold mb-3 text-primary">
                {category}
              </h3>

              <ul className="space-y-2">
                {items.map((sub) => (
                  <li key={sub.title}>
                    <a href={sub.href} className="flex gap-2 p-2 hover:bg-muted rounded-md">
                      <sub.icon className="h-4 w-4 mt-1" />
                      <span className="text-sm">{sub.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          ))}
        </div>

      </div>
    </NavigationMenuContent>
  </>

) : item.hasDropdown ? (

  <>
    <div className={`relative dropdown-container-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
      
      {/* Using button instead of NavigationMenuTrigger for custom dropdown control */}
      <button className="text-sm font-medium px-2.5 py-1.5 rounded-lg hover:bg-muted flex items-center gap-1">
        {item.title}
        <ChevronDown className="h-3 w-3" />
      </button>

      {/* ✅ CUSTOM DROPDOWN - Using unique class for each dropdown */}
      <div className={`absolute left-0 top-full mt-2 hidden ${item.title.toLowerCase().replace(/\s+/g, '-')}-dropdown z-50`}>
        <div className="w-[220px] p-2 bg-white shadow-md rounded-md border">

          <ul className="space-y-1">
            {item.dropdownItems.map((sub) => (
              <li key={sub.title}>
                <a
                  href={sub.href}
                  className="block p-2 rounded-md hover:bg-muted text-sm font-medium"
                >
                  {sub.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </div>
  </>

) : (

  // ✅ NORMAL LINK
  <a href={item.href} className="px-3 py-2 text-sm">
    {item.title}
  </a>

)}
                </NavigationMenuItem>
              ))}

            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4">

          {navItems.map((item) => (
            <div key={item.title}>

              {item.hasMegaMenu ? (
                <>
                  <button
                    className="flex justify-between w-full py-2"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {item.title}
                    <ChevronDown />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4">

                      {/* ✅ CONDITION ADDED */}
                      {Object.entries(
                        item.title === "Market Services"
                          ? marketMegaMenuItems
                          : megaMenuItems
                      ).map(([category, items]) => (

                        <div key={category}>
                          <p className="text-xs font-semibold">{category}</p>

                          {items.map((item) => (
                            <a key={item.title} href={item.href} className="block py-1 text-sm">
                              {item.title}
                            </a>
                          ))}
                        </div>

                      ))}

                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className="block py-2">{item.title}</a>
              )}

            </div>
          ))}

        </div>
      )}
    </header>
  )
}

export default Navbar