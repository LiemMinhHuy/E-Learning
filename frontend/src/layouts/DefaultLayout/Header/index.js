'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Button from '../../../components/common/Button';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Lấy user từ localStorage (giả sử backend trả về user info và lưu vào localStorage sau khi đăng nhập)
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <header className="bg-white shadow-md border-b border-gray-200">
            <nav aria-label="Global" className="mx-[60px] flex max-w-full items-center justify-between p-6">
                {/* Logo section */}
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">E-Learning Platform</span>
                        <img
                            alt="E-Learning Logo"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-6 w-auto"
                        />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/* Main navigation */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-base  text-gray-900">
                        Home
                    </Link>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-base  text-gray-900">
                            Courses
                            <ChevronDownIcon aria-hidden="true" className="size-7 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <Link to="/courses/all" className="block text-lg  text-gray-900">
                                        All Courses
                                    </Link>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <Link to="/courses/my-learning" className="block text-lg  text-gray-900">
                                        My Learning
                                    </Link>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <Link to="/courses/categories" className="block text-lg  text-gray-900">
                                        Categories
                                    </Link>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link to="/instructors" className="text-base  text-gray-900">
                        Instructors
                    </Link>

                    <Link to="/about" className="text-base  text-gray-900">
                        About Us
                    </Link>
                </PopoverGroup>

                {/* Right side buttons */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
                    {user ? (
                        <Link to="/profile">
                            <img
                                src={user.avatar && user.avatar !== '' ? user.avatar : '/default-avatar.png'}
                                alt="avatar"
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary-600 shadow"
                            />
                        </Link>
                    ) : (
                        <Link to="/login">
                            <Button>
                                <span className="font-black px-8 py-2">Login</span>
                            </Button>
                        </Link>
                    )}
                </div>
            </nav>

            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">E-Learning Platform</span>
                            <img
                                alt="E-Learning Logo"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-6 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  text-gray-900 hover:bg-gray-50">
                                        Courses
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="size-5 flex-none group-data-open:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <Disclosure.Panel className="mt-2 space-y-2">
                                        <Link
                                            to="/courses/all"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm  text-gray-900 hover:bg-gray-50"
                                        >
                                            All Courses
                                        </Link>
                                        <Link
                                            to="/courses/my-learning"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm  text-gray-900 hover:bg-gray-50"
                                        >
                                            My Learning
                                        </Link>
                                        <Link
                                            to="/courses/categories"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm  text-gray-900 hover:bg-gray-50"
                                        >
                                            Categories
                                        </Link>
                                    </Disclosure.Panel>
                                </Disclosure>
                                <Link
                                    to="/instructors"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base  text-gray-900 hover:bg-gray-50"
                                >
                                    Instructors
                                </Link>
                                <Link
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base  text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/cart"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base  text-gray-900 hover:bg-gray-50"
                                >
                                    Cart
                                </Link>
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base  text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

export default Header;
