import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border max-w-(--breakpoint-xl) mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
