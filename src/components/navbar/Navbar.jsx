import { useState } from "react";
import logo from "../../assets/logo2.webp";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Palette,
  Layout,
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

// ✅ EXISTING MEGA MENU (unchanged)
const megaMenuItems = {
  sakthinathan: [
    {
      title: "Web Development",
      description: "Custom websites & web apps",
      icon: Code,
      href: "/services/web-development",
    },
    {
      title: "Mobile Apps",
      description: "iOS & Android applications",
      icon: Smartphone,
      href: "/services/app-development",
    },
    {
      title: "E-commerce",
      description: "Online store solutions",
      icon: Layout,
      href: "/services/ecommerce",
    },
    {
      title: "API Development",
      description: "REST & GraphQL APIs",
      icon: Database,
      href: "/services/api-development",
    },
  ],
  Design: [
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces",
      icon: Palette,
      href: "/services/ui-ux-design",
    },
    {
      title: "Brand Identity",
      description: "Logos & branding",
      icon: Globe,
      href: "/services/branding",
    },
    {
      title: "Prototyping",
      description: "Wireframes & prototypes",
      icon: Zap,
      href: "/services/prototyping",
    },
    {
      title: "Design Systems",
      description: "Consistent design",
      icon: Layout,
      href: "/services/design-systems",
    },
  ],
  "Cloud & Security": [
    {
      title: "Cloud Solutions",
      description: "AWS, Azure, GCP",
      icon: Cloud,
      href: "/services/cloud",
    },
    {
      title: "DevOps",
      description: "CI/CD & automation",
      icon: Zap,
      href: "/services/devops",
    },
    {
      title: "Cybersecurity",
      description: "Security audits",
      icon: Shield,
      href: "/services/security",
    },
    {
      title: "Consulting",
      description: "Tech strategy",
      icon: Code,
      href: "/services/consulting",
    },
  ],
};

// ✅ NEW MARKET SERVICES MEGA MENU (ADDED)
const marketMegaMenuItems = {
  "Digital Marketing": [
    {
      title: "SEO",
      description: "Improve Google ranking",
      icon: Globe,
      href: "/services/seo",
    },
    {
      title: "Social Media",
      description: "Grow on social platforms",
      icon: Smartphone,
      href: "/services/social",
    },
  ],
  Advertising: [
    {
      title: "Google Ads",
      description: "Run paid campaigns",
      icon: Zap,
      href: "/services/ads",
    },
    {
      title: "Meta Ads",
      description: "Facebook & Instagram ads",
      icon: Layout,
      href: "/services/meta-ads",
    },
  ],
  Analytics: [
    {
      title: "Analytics",
      description: "Track performance",
      icon: Database,
      href: "/services/analytics",
    },
  ],
};

const navItems = [
  { title: "Company", href: "/" },
  { title: "Services", hasMegaMenu: true },
  { title: "Market Services", hasMegaMenu: true },
  { title: "Products", href: "/products" },
  { title: "Mobile Apps", href: "/mobileapps" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Career", href: "/career" },
  { title: "Contact", href: "/contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMegaMenusOpen, setMobileMegaMenusOpen] = useState({});

  const toggleMobileMegaMenu = (title) => {
    setMobileMegaMenusOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-3 sm:px-4 md:px-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-16" />
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
                          <div className="mb-4">
                            <span className="text-lg font-semibold">
                              Our Services
                            </span>
                          </div>

                          <div className="grid gap-6 md:grid-cols-3">
                            {/* ✅ CONDITION ADDED */}
                            {Object.entries(
                              item.title === "Market Services"
                                ? marketMegaMenuItems
                                : megaMenuItems,
                            ).map(([category, items]) => (
                              <div key={category}>
                                <h3 className="text-sm font-semibold mb-3 text-primary">
                                  {category}
                                </h3>

                                <ul className="space-y-2">
                                  {items.map((item) => (
                                    <li key={item.title}>
                                      <a
                                        href={item.href}
                                        className="flex gap-2 p-2 hover:bg-muted rounded-md"
                                      >
                                        <item.icon className="h-4 w-4 mt-1" />
                                        <div>
                                          <span className="text-sm font-medium">
                                            {item.title}
                                          </span>
                                          <p className="text-xs text-muted-foreground">
                                            {item.description}
                                          </p>
                                        </div>
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
                  ) : (
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
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-3 sm:p-4 max-h-[calc(100vh-64px)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.title}>
              {item.hasMegaMenu ? (
                <>
                  <button
                    className="flex justify-between w-full py-2 text-left"
                    onClick={() => toggleMobileMegaMenu(item.title)}
                  >
                    {item.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileMegaMenusOpen[item.title] ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileMegaMenusOpen[item.title] && (
                    <div className="pl-4 mt-2">
                      {/* ✅ CONDITION ADDED */}
                      {Object.entries(
                        item.title === "Market Services"
                          ? marketMegaMenuItems
                          : megaMenuItems,
                      ).map(([category, items]) => (
                        <div key={category} className="mb-4">
                          <p className="text-sm font-semibold text-primary mb-2">
                            {category}
                          </p>

                          {items.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block py-2 pl-2 text-sm hover:bg-muted rounded"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className="block py-2">
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
