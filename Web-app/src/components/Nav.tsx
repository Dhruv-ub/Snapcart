"use client";
import {
  Boxes,
  ClipboardCheck,
  LogOut,
  Menu,
  Package,
  PlusCircle,
  Search,
  ShoppingCartIcon,
  User,
  X,
} from "lucide-react";

import Link from "next/link";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { signOut } from "next-auth/react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter, usePathname } from "next/navigation";

interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  mobile?: string;
  role: "user" | "deliveryBoy" | "admin";
  image?: string;
}

function Nav({ user }: { user: IUser }) {
  const [open, setOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const profileDropDown = useRef<HTMLDivElement>(null);

  const { cartData } = useSelector((state: RootState) => state.cart);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileDropDown.current &&
        !profileDropDown.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = search.trim();

    if (!query) {
      router.push("/");
      return;
    }

    router.push(`/?q=${encodeURIComponent(query)}`);
    setSearch("");
    setSearchBarOpen(false);
  };

  const sideBar = menuOpen
    ? createPortal(
        <AnimatePresence>
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 14 }}
            style={{ fontFamily: "Inter, sans-serif" }}
            className="fixed top-0 left-0 h-full w-[75%] sm:w-[60%] z-[9999] flex flex-col border-r border-green-400/20 bg-linear-to-b from-green-800/90 via-green-700/85 to-green-900/95 p-6 text-white shadow-[0_0_50px_-10px_rgba(0,255,100,0.3)] backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-extrabold tracking-wide text-white/95">
                  Admin Panel
                </h1>
                <p className="text-xs uppercase tracking-[0.3em] text-green-100/70">
                  Quick actions
                </p>
              </div>
              <button
                className="rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/15 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 shadow-inner backdrop-blur-sm">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-green-400/60 bg-white/10 shadow-lg">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt="user"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {user.name}
                </h2>
                <p className="text-xs capitalize tracking-wide text-green-100">
                  {user.role}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 font-medium">
              <Link
                href={"/admin/add-grocery"}
                className="flex items-center gap-3 rounded-xl bg-white/10 p-3 transition-all hover:bg-white/20 hover:pl-4"
              >
                <PlusCircle className="h-5 w-5" />
                Add Grocery
              </Link>
              <Link
                href={"/admin/view-grocery"}
                className="flex items-center gap-3 rounded-xl bg-white/10 p-3 transition-all hover:bg-white/20 hover:pl-4"
              >
                <Boxes className="h-5 w-5" />
                View Grocery
              </Link>
              <Link
                href={"/admin/manage-orders"}
                className="flex items-center gap-3 rounded-xl bg-white/10 p-3 transition-all hover:bg-white/20 hover:pl-4"
              >
                <ClipboardCheck className="h-5 w-5" />
                Manage Orders
              </Link>
            </div>

            <div className="my-5 border-t border-white/20" />

            <button
              className="mt-auto flex items-center gap-3 rounded-xl p-3 text-left font-semibold text-red-200 transition-all hover:bg-red-500/20"
              onClick={async () => await signOut({ callbackUrl: "/" })}
            >
              <LogOut className="h-5 w-5 text-red-200" />
              Logout
            </button>
          </motion.aside>
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full border-b border-[rgba(0,0,0,0.06)] bg-[rgba(255,255,255,0.7)] text-[16px] leading-6 shadow-sm backdrop-blur-xl"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 md:px-16 relative">
          <Link
            href="/"
            className="text-[24px] font-headline-md text-headline-md font-bold tracking-wide text-[#006e2e] transition-transform duration-200 hover:scale-105"
          >
            Snapcart
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center space-x-8 lg:flex ml-21">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-[#006e2e] pb-1 ${
                pathname === "/"
                  ? "font-semibold text-[#006e2e] border-b-2 border-[#006e2e]"
                  : "text-[#3d4a3d]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/categories"
              className={`font-medium transition-colors hover:text-[#006e2e] pb-1 ${
                pathname === "/categories"
                  ? "font-semibold text-[#006e2e] border-b-2 border-[#006e2e]"
                  : "text-[#3d4a3d]"
              }`}
            >
              Categories
            </Link>

            <Link
              href="/deals"
              className={`font-medium transition-colors hover:text-[#006e2e] pb-1 ${
                pathname === "/deals"
                  ? "font-semibold text-[#006e2e] border-b-2 border-[#006e2e]"
                  : "text-[#3d4a3d]"
              }`}
            >
              Deals
            </Link>
            <Link
              href="/bestsellers"
              className={`font-medium transition-colors hover:text-[#006e2e] pb-1 ${
                pathname === "/bestsellers"
                  ? "font-semibold text-[#006e2e] border-b-2 border-[#006e2e]"
                  : "text-[#3d4a3d]"
              }`}
            >
              Bestsellers
            </Link>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            {user.role === "user" && (
              <form     
                className="hidden items-center rounded-full bg-[#f1f3ff] px-3 py-2 shadow-sm md:flex"
                onSubmit={handleSearch}
              >       
                <Search className="mr-2 h-5 w-5 text-[#3d4a3d]" />
                <input
                  type="text"
                  placeholder="Search groceries..."
                  className="w-52 bg-transparent text-[16px] outline-none placeholder:text-[#808080]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            )}

            <div className="flex items-center gap-4">
              {user.role === "user" && (
                <>
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 hover:scale-105 md:hidden"
                    onClick={() => setSearchBarOpen((prev) => !prev)}
                  >
                    <Search className="h-6 w-6 text-[#006e2e]" />
                  </button>

                  <Link
                    href="/user/cart"
                    className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 hover:scale-105"
                  >
                    <ShoppingCartIcon className="h-6 w-6 text-[#006e2e]" />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ba1a1a] text-[10px] font-bold text-white">
                      {cartData.length}
                    </span>
                  </Link>
                </>
              )}

              {user.role === "admin" && (
                <>
                  <div className="hidden items-center gap-4 md:flex">
                    <Link
                      href="/admin/add-grocery"
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-[#006e2e] shadow-sm transition-colors hover:bg-[#f1f3ff]"
                    >
                      <PlusCircle className="h-5 w-5" />
                      Add Grocery
                    </Link>
                    <Link
                      href="/admin/view-grocery"
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-[#006e2e] shadow-sm transition-colors hover:bg-[#f1f3ff]"
                    >
                      <Boxes className="h-5 w-5" />
                      View Grocery
                    </Link>
                    <Link
                      href="/admin/manage-orders"
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-[#006e2e] shadow-sm transition-colors hover:bg-[#f1f3ff]"
                    >
                      <ClipboardCheck className="h-5 w-5" />
                      Manage Orders
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                  >
                    <Menu className="h-5 w-5 text-[#006e2e]" />
                  </button>
                </>
              )}

              <div className="relative" ref={profileDropDown}>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm transition-transform duration-200 hover:scale-105"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt="user"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5 text-[#006e2e]" />
                  )}
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute right-0 mt-3 w-56 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-3 shadow-xl"
                    >
                      <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,0.06)] px-3 py-2">
                        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#f1f3ff]">
                          {user.image ? (
                            <Image
                              src={user.image}
                              alt="user"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <User className="h-5 w-5 text-[#006e2e]" />
                          )}
                        </div>
                        <div>
                          <div className="text-[16px] font-semibold text-[#141b2b]">
                            {user.name}
                          </div>
                          <div className="text-[12px] capitalize text-[#3d4a3d]">
                            {user.role}
                          </div>
                        </div>
                      </div>

                      {user.role === "user" && (
                        <Link
                          href="/user/my-orders"
                          className="flex items-center gap-2 rounded-lg px-3 py-3 font-medium text-[#141b2b] transition-colors hover:bg-[#f1f3ff]"
                          onClick={() => setOpen(false)}
                        >
                          <Package className="h-5 w-5 text-[#006e2e]" />
                          My Orders
                        </Link>
                      )}

                      <button
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-3 text-left font-medium text-[#141b2b] transition-colors hover:bg-red-50"
                        onClick={() => {
                          setOpen(false);
                          signOut({ callbackUrl: "/login" });
                        }}
                      >
                        <LogOut className="h-5 w-5 text-[#ba1a1a]" />
                        Log Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {searchBarOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="fixed left-1/2 top-24 z-40 flex w-[90%] -translate-x-1/2 items-center rounded-full bg-white px-4 py-2 shadow-lg md:hidden"
                    >
                      <Search className="mr-2 h-5 w-5 text-[#3d4a3d]" />
                      <form className="grow" onSubmit={handleSearch}>
                        <input
                          type="text"
                          className="w-full bg-transparent outline-none"
                          placeholder="Search groceries..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </form>
                      <button
                        type="button"
                        onClick={() => setSearchBarOpen(false)}
                      >
                        <X className="h-5 w-5 text-[#3d4a3d]" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </header>
      {sideBar}
    </>
  );
}

export default Nav;
