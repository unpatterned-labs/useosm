import { APP_CONTENT } from "@/config/Content";
import { APP_ROUTES } from "@/config/Routes";
import { Button } from "@/components/ui/react/button";
import { useState, useRef, useEffect } from "react";
import type { NavItem } from "src/types/content";
import { HamburgerIcon } from "@/assets/icons/react/HamburgerIcon";
import { XIcon } from "@/assets/icons/react/XIcon";
import cn from "@/utils/cn";
import { UseOSMLogoIcon } from "@/assets/icons/react/UseOSMLogoIcon";

export const NavBar = () => {
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and toggle blur background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5); // adjust threshold if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuIsOpened) {
        setMobileMenuIsOpened(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuIsOpened]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuIsOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuIsOpened]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-transform duration-150 ease-in-out lg:px-14",
          isScrolled ? "shadow-dialog bg-white" : "",
        )}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-x-40">
          <a href={APP_ROUTES.HOME}>
            <UseOSMLogoIcon className="h-[24px] w-[97.64px] text-green-500 duration-150 ease-in-out hover:text-green-400 md:h-[31px] md:w-[161px]" />
          </a>
          <ul className="hidden gap-x-10 lg:flex" role="menubar">
            {[APP_CONTENT.USECASES, APP_CONTENT.RESOURCES].map((config) => {
              const hasRoute = config.route.length > 0;
              return (
                <li
                  key={`route-${config.title}`}
                  role="none"
                  className="relative"
                >
                  {!hasRoute ? (
                    <DropdownMenu config={config} />
                  ) : (
                    <Button
                      href={config.route}
                      size="lg"
                      variant="navlink"
                      role="menuitem"
                      id={`nav-link-${config.route}`}
                    >
                      {config.title}
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-x-4">
          <div>
            {/* This is a hack to show different button sizes on mobile and desktop. Another alternative is to use javascript to get the screen width, but I decided to go with this for now. */}
            <Button
              id="nav-cta-button-mobile"
              size="md"
              href="https://openstreetmap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex rounded-4xl text-sm md:hidden"
            >
              Get Started
            </Button>
            <Button
              id="nav-cta-button-desktop"
              size="lg"
              href="https://openstreetmap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              Get Started
            </Button>
          </div>
          <button
            className="relative z-50 inline-flex cursor-pointer lg:hidden"
            onClick={() => setMobileMenuIsOpened(!mobileMenuIsOpened)}
            aria-label={mobileMenuIsOpened ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuIsOpened}
          >
            {mobileMenuIsOpened ? (
              <XIcon className="h-8 w-8 text-black" />
            ) : (
              <HamburgerIcon className="h-8 w-8 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-full transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuIsOpened ? "translate-x-0" : "hidden translate-x-full"
        }`}
      >
        <div className="px-4 pt-36">
          <nav aria-label="Mobile navigation">
            <ul role="menubar" className="flex flex-col gap-y-6">
              {[APP_CONTENT.USECASES, APP_CONTENT.RESOURCES].map((config) => {
                const hasRoute = config.route.length > 0;
                return (
                  <li key={`mobile-route-${config.title}`} role="none">
                    {!hasRoute ? (
                      <MobileDropdownMenu
                        route={config.title}
                        config={config}
                        onItemClick={() => setMobileMenuIsOpened(false)}
                      />
                    ) : (
                      <Button
                        href={config.route}
                        size="lg"
                        variant="navlink"
                        role="menuitem"
                        id={`mobile-nav-link-${config.title}`}
                        className="!text-grey-300 w-full justify-start px-2 py-2 text-left !text-base !font-semibold"
                        onClick={() => setMobileMenuIsOpened(false)}
                      >
                        {config.title}
                      </Button>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

const MobileDropdownMenu = ({
  route,
  config,
  onItemClick,
}: {
  route: string;
  config: NavItem;
  onItemClick: () => void;
}) => {
  return (
    <div className="space-y-3">
      <button
        className="text-grey-300 w-full px-2 py-2 text-left text-base font-semibold"
        aria-controls={`mobile-menu-${route}`}
      >
        <span>{route}</span>
      </button>
      <div
        id={`mobile-menu-${route}`}
        className="flex flex-col items-start justify-start space-y-1"
      >
        {config.children
          .filter((e) => e.active)
          .map((child) => (
            <Button
              variant="navlink"
              key={child.title}
              href={child.route}
              id={child.title}
              onClick={onItemClick}
              className="text-grey-200 w-full justify-start px-2 py-2 text-base font-medium text-wrap"
            >
              <h3>{child.title}</h3>
            </Button>
          ))}
      </div>
    </div>
  );
};

// Desktop Dropdown Menu Component (unchanged)
const DropdownMenu = ({ config }: { config: NavItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Mouse hover handlers
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setFocusedIndex(-1);
    }, 150);
  };

  // Keyboard handlers
  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
        break;
      case "ArrowUp":
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(config.children.length - 1);
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev < config.children.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : config.children.length - 1,
        );
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
          itemRefs.current[focusedIndex]?.click();
        }
        break;
      case "Escape":
      case "Tab":
        setIsOpen(false);
        setFocusedIndex(-1);
        if (e.key === "Escape") {
          e.preventDefault();
          buttonRef.current?.focus();
        }
        break;
    }
  };

  // Focus management
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("focusin", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("focusin", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        ref={buttonRef}
        size="lg"
        variant={isOpen ? "navlinkHovered" : "navlink"}
        role="button"
        id={`nav-link-${config.title}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`menu-${config.title}`}
        onKeyDown={handleButtonKeyDown}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          e.stopPropagation();
          // Do nothing for mouse clicks - let hover handle it
        }}
      >
        {config.title}
      </Button>

      {isOpen && (
        <div
          id={`menu-${config.title}`}
          role="menu"
          aria-labelledby={`nav-link-${config.title}`}
          className="border-grey-50 absolute z-10 grid w-3xl origin-top-right -translate-x-1/3 grid-cols-2 gap-x-2 rounded-2xl border bg-white p-4 shadow-2xl focus:outline-none"
          style={{ top: "100%" }}
          onKeyDown={handleMenuKeyDown}
        >
          {config.children
            .filter((e) => e.active)
            .map((child, index) => (
              <a
                key={child.title}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                href={child.route}
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
                className={`${
                  focusedIndex === index ? "bg-white-2" : ""
                } hover:bg-white-2 focus:bg-white-2 flex flex-col gap-2 rounded-2xl p-4 transition-colors duration-300 focus:outline-none`}
                onMouseEnter={() => setFocusedIndex(index)}
                onClick={() => {
                  setIsOpen(false);
                  setFocusedIndex(-1);
                }}
              >
                <h2 className="text-grey-200 text-sm font-semibold">
                  {child.title}
                </h2>
                <p className="text-grey-100 text-xs">{child.description}</p>
              </a>
            ))}
        </div>
      )}
    </div>
  );
};
