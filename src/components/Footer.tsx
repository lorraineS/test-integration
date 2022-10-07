import type { FC } from 'react';
import React from 'react';
import Slider from './Slider';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-[color:#130F0F] w-full">
      <div className="max-w-7xl mx-auto px-9 pb-12 sm:pb-11 pt-11 sm:pt-20">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-4">
          <div className="pb-6 sm-pb0 sm:col-span-2 text-center">
            <h2 className="mb-6 text-2xl font-title font-medium text-white">Témoignages</h2>
            <Slider />
          </div>
          <div className="">
            <h2 className="mb-6 text-2xl font-title font-medium text-white">Menu</h2>
            <ul className="pl-[10px] leading-[2.2rem] text-white">
              <li>
                <a href="#!" className="hover:underline">
                  Menu 1
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Menu 2
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Menu 3
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Menu 4
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-title font-medium text-white">Adresse</h2>
            <address className="pl-[10px] leading-[2.2rem] not-italic">
              <p>
                Rue de Paris, 10 <br />
                75000 Toulouse <br />
                France
              </p>
              <a href="tel:+33665566556">+33 (0) 6 65 56 65 65</a>
            </address>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-9 pt-6 sm:pt-11 pb-11">
          <div className="gap-7 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
            <div className="flex justify-center space-x-6">
              <Link href="https://www.facebook.com/">
                <a className="text-white hover:text-gray-200">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                    <path
                      d="M5.833 8.333v3.334h2.5V17.5h3.334v-5.833h2.5L15 8.333h-3.333V6.667a.834.834 0 0 1 .833-.834H15V2.5h-2.5a4.167 4.167 0 0 0-4.167 4.167v1.666h-2.5Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>

              <Link href="https://twitter.com">
                <a className="text-wxhite hover:text-gray-200">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                    <path
                      d="M18.333 3.342c-.833.408-1.65.574-2.5.825-.934-1.054-2.319-1.113-3.65-.614-1.33.498-2.202 1.716-2.183 3.114V7.5c-2.704.07-5.112-1.162-6.667-3.333 0 0-3.485 6.194 3.334 9.166-1.56 1.04-3.116 1.74-5 1.667 2.756 1.503 5.76 2.02 8.361 1.264 2.984-.866 5.435-3.102 6.376-6.451.28-1.02.42-2.071.414-3.128-.001-.207 1.259-2.31 1.515-3.344v0Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="https://instagram.com/">
                <a href="#" className="text-wxhite hover:text-gray-200">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                    <path
                      d="M13.333 3.333H6.667a3.333 3.333 0 0 0-3.334 3.334v6.666a3.333 3.333 0 0 0 3.334 3.334h6.666a3.333 3.333 0 0 0 3.334-3.334V6.667a3.333 3.333 0 0 0-3.334-3.334Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM13.75 6.25v0"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <span className="space-x-6 md:text-right text-xs text-white">
              <a href="#!" className="hover:underline">
                Mentions légales
              </a>
              <a href="#!" className="hover:underline">
                À Propos
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
