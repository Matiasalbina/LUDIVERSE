import React, { useState } from "react";
import { ShoppingCart, Search, Users, Menu, SquarePen } from "lucide-react";
import type { FC } from "react";
import {
  Menu as DropdownMenu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // relative para posicionar el panel mobile bajo el navbar
    <nav className="sticky top-0 z-40 w-full bg-white">
      {/* Fila principal */}
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:py-4 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-xl font-bold">LUDIVERSE</h2>
          </div>

          {/* Buscador */}
          <div className="flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-400 px-3 py-1 outline-none"
            />
            <button className="bg-purple-600 px-3 py-2">
              <Search size={20} color="white" />
            </button>
          </div>

          {/* Iconos + hamburguesa */}
          <div className="bg-purple-600 text-white lg:text-black py-2 w-full lg:w-auto lg:bg-white flex items-center justify-between lg:justify-end gap-6">
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-7 h-7 ml-2" />
            </button>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Users className="w-6 h-6" />
                <span className="hidden lg:inline text-sm">Login</span>
              </div>

              <div className="hidden lg:flex items-center gap-1">
                <SquarePen className="w-6 h-6" />
                <span className="text-sm">Register</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="hidden lg:inline text-sm">Item(s)</span>
                <ShoppingCart className="w-6 h-6 mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra morada: solo desktop */}
      <div className="hidden lg:flex bg-purple-600 w-full text-white justify-center">
        <div className="w-[80%] flex gap-4 ">
          <DropdownMenu as="div" className="relative inline-block">
            <MenuButton className="inline-flex items-center gap-x-1.5 bg-purple-600 px-3 py-2 text-md font-semibold text-white hover:bg-lime-600">
              Juegos De Mesa
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
            </MenuButton>
            <MenuItems className="absolute left-0 z-10 w-56 rounded-md bg-white shadow-lg outline-1 outline-black/5">
              <div className="py-1">
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Eurogames
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Familiares
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Party
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </DropdownMenu>

          <DropdownMenu as="div" className="relative inline-block">
            <MenuButton className="inline-flex items-center gap-x-1.5 bg-purple-600 px-3 py-2 text-md font-semibold text-white hover:bg-lime-600">
              Accesorios
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
            </MenuButton>
            <MenuItems className="absolute left-0 z-10 w-56 rounded-md bg-white shadow-lg outline-1 outline-black/5">
              <div className="py-1">
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Folders
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </DropdownMenu>
        </div>
      </div>

      {/* Panel mobile: full-width, debajo del navbar, con animación */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute inset-x-0 top-full z-50 bg-white border-t shadow-md
                    overflow-hidden transition-[max-height,opacity] duration-200
                    ${
                      mobileOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
      >
        <div className="px-4 py-3">
          {/* Grupo: Juegos de Mesa */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex items-center justify-between py-2">
                  <span className="font-medium">Juegos de Mesa</span>
                  <ChevronDownIcon
                    className={`size-5 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" bg-gray-200 pl-4 space-y-1 text-sm text-gray-700">
                  <a className="block py-1">Eurogames</a>
                  <a className="block py-1">Familiares</a>
                  <a className="block py-1">Party</a>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Grupo: Accesorios */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex items-center justify-between py-2">
                  <span className="font-medium">Accesorios</span>
                  <ChevronDownIcon
                    className={`size-5 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="bg-gray-200 pl-4 space-y-1 text-sm text-gray-700">
                  <a className="block py-1">Folders</a>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
