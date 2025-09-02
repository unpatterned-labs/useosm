import { APP_CONFIG } from "@/config/Content";
import UseOSMLogo from "@/assets/useosm_logo.svg";
import { APP_ROUTES } from "@/config/Routes";
import { Button } from "@/components/ui/react/button";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const NavBar = () => {
  return (
    <nav
      className="flex px-14 py-4 justify-between items-center"
      aria-label="Main navigation"
    >
      <div className="flex gap-x-40 items-center">
    
        <a href={APP_ROUTES.HOME}>
          <img
            src={UseOSMLogo.src}
            alt="useOSM home"
            loading="lazy"
            decoding="async"
          />
        </a>

       
        <ul className="flex gap-x-10" role="menubar">
          {Object.keys(APP_CONFIG.NAVBAR).map((route) => {
            const config = APP_CONFIG.NAVBAR[route];
            const hasChildren = config.children.length > 0;

            return (
              <li key={`route-${route}`} role="none" className="relative">
                {hasChildren ? (
                  <Menu as="div" className="relative inline-block text-left">
                    {({ open}) => (
                      <div
                        onMouseEnter={(e) => {
                          // simulate click to open on hover
                         (e.currentTarget.querySelector("button") as HTMLButtonElement)?.click();
                        }}
                        onMouseLeave={(e) => {
                         if (open) { (e.currentTarget.querySelector("button") as HTMLButtonElement)?.click(); }
                        }}
                       
                      >
                        <MenuButton
                          as={Button}
                          size="lg"
                          variant={open ? "navlinkHovered" : "navlink"}
                          role="menuitem"
                          id={`nav-link-${route}`}
                          autoFocus={false}
                         
                      
                        >
                          {route}
                        </MenuButton>
                        
                        <MenuItems
                          className="absolute z-10 w-3xl origin-top-right bg-white border border-grey-50 rounded-2xl shadow-2xl focus:outline-none grid grid-cols-2 gap-x-2 p-4"
                          aria-labelledby={`nav-link-${route}`}
                          anchor='bottom'
                        >

                          {config.children.map((child) => (
                            <MenuItem key={child.title}>
                              {({ focus }) => (
                                <a
                                  href={child.route}
                                  className={`${
                                    focus ? "bg-white-2" : ""
                                  } transition-colors duration-300 p-4 flex flex-col gap-2 rounded-2xl focus:outline-none`}
                                >
                                  <h2 className="text-grey-400 font-semibold text-sm">
                                    {child.title}
                                  </h2>
                                  <p className="text-xs text-grey-200">
                                    {child.description}
                                  </p>
                                </a>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </div>
                    )}
                  </Menu>
                ) : (
             
                  <Button
                    href={config.route}
                    size="lg"
                    variant="navlink"
                    role="menuitem"
                    id={`nav-link-${route}`}
                  >
                    {route}
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Button
          id="nav-cta-button"
          size="lg"
          href="https://openstreetmap.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};
