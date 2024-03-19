import Link from "next/link";
import {Icons} from "@/components/Icons";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React from "react";

async function Navbar() {
    return (
        <div className="fixed inset-x-0 top-0">
            {/* Banner */}
            <div className="bg-green">
                <p className="text-center text-white lg:leading-none align-middle text-xl py-3 font-['TelegrafUltraBold']">
                    PARTNER WITH US - FREE FOR THE FIRST 6 MONTHS, NO TRANSACTION FEES
                </p>
            </div>

            {/* Navbar */}
            <div className="bg-navbar-white border py-2">
                <div className="container max-w-7xl mx-auto flex items-center justify-between gap-2">
                    {/* Logo */}
                    <Link href="/" className="flex gap-2 items-center">
                        <Icons.logo className="size-8"/>
                    </Link>

                    <div className="flex gap-3">
                        {/* Profile */}
                        <Link href="/" className="flex gap-2 items-center">
                            <p className="text-xl font-['TelegrafUltraBold']">Sign In</p>
                            <AccountCircleRoundedIcon className="size-8"/>
                        </Link>

                        {/* Favorites */}
                        <Link href="/" className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 512 512">
                                <path
                                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                            </svg>
                        </Link>

                        {/* Cart */}
                        <Link href="/" className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </Link>

                        {/* Sell Button */}
                        <button
                            className="btn bg-orange btn-sm px-4 leading:none hover:bg-orange-hover border-none text-black-pearl text-xl font-['TelegrafUltraBold']">Sell
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;