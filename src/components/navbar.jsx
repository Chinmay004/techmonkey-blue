export default function Navbar() {
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <nav className="hidden md:flex fixed right-0 top-0 h-screen w-20 bg-black/20 backdrop-blur-2xl flex-col items-center justify-center z-50">
      <ul className="space-y-12 flex flex-col gap-28 items-center justify-between">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <a
              href={item.href}
              className="text-white hover:text-blue-400 transition-color duration-300 transform rotate-90 inline-block text-xl font-medium tracking-wider"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
