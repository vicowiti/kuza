"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeroImg from "../assets/kuza.jpeg"
import Image from 'next/image'
import Logo from "../assets/logo2.png"

const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Team', href: '#team' },
    { name: 'Contacts', href: '#footer' },
]

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div id="hero" className="relative bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 lg:w-full lg:max-w-2xl">
                    <svg
                        className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>

                    <div className="relative px-6 pt-6 lg:pl-8 lg:pr-0">
                        <nav className="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                    alt="Your Company"
                                    className="h-8 w-auto"
                                    src={Logo}
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <div className="hidden lg:ml-12 lg:block lg:space-x-14">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="text-sm font-bold leading-6 text-gray-900 hover:scale-105 hover-text-[#4f46e5] duration-300">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </nav>
                        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                                <div className="flex flex-row-reverse items-center justify-between">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <Image
                                            className="h-8"
                                            src={Logo}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="mt-6 space-y-2">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:scale-105 hover-text-[#4f46e5] duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Dialog>
                    </div>

                    {/* <Image src={Logo} /> */}
                    <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            {/* <div className="hidden sm:mb-10 sm:flex">
                                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                                    <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div> */}
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Welcome To Kuza Trust.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We are a non-profit organization that exists to address challenges of Health equity, Gender Justice, and Poverty through policy advocacy and narrative change in Kenya and East Africa.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Make Donation
                                </a>
                                <a href="#faqs" className="text-base font-semibold leading-7 text-gray-900">
                                    FAQ's <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image
                    className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                    src={HeroImg}
                    alt="Hero Image"
                />
            </div>
        </div>
    )
}
