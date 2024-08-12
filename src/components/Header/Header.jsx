import topnavbargrid from "../../assets/topnavbargrid.svg";
import Logo from "../../assets/logo.svg";
import Image from "next/image";
import { Backpack, ChevronDown, Heart, Menu, Search, User } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="bg-black flex items-center justify-center py-2 lg:items-center justify-evenly">
        <div className="flex items-center space-x-1">
          <Image src={topnavbargrid} alt="topnavbargrid" />
          <h1 className="text-[#EB4C6B]">Lorem ipsum dolor</h1>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Image src={topnavbargrid} alt="topnavbargrid" />
          <h1 className="text-[#EB4C6B]">Lorem ipsum dolor</h1>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Image src={topnavbargrid} alt="topnavbargrid" />
          <h1 className="text-[#EB4C6B]">Lorem ipsum dolor</h1>
        </div>
      </div>

      <nav className="text-black px-4 md:px-20 mt-8">
        <div className="container mx-auto flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden" cursor="pointer" />
            <Image src={Logo} alt="Logo" />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-[36px] font-black">LOGO</h1>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <Search className="h-6 w-6 cursor-pointer" />
            <Heart className="h-6 w-6 cursor-pointer" />
            <Backpack className="h-6 w-6 cursor-pointer" />
            <User className="h-6 w-6 cursor-pointer hidden md:block" />
            <div className="flex items-center space-x-1 hidden md:flex">
              <h1 className="cursor-pointer font-bold">ENG</h1>
              <ChevronDown className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-10">
        <div className="hidden md:flex justify-center space-x-4 md:space-x-10">
          <h1 className="cursor-pointer text-[22px] font-bold">HOME</h1>
          <h1 className="cursor-pointer text-[22px]  font-bold">SHOP</h1>
          <h1 className="cursor-pointer text-[22px]  font-bold">SKILLS</h1>
          <h1 className="cursor-pointer text-[22px]  font-bold">STORIES</h1>
          <h1 className="cursor-pointer text-[22px]  font-bold">ABOUT</h1>
          <h1 className="cursor-pointer text-[22px]  font-bold">CONTACT US</h1>
        </div>
      </div>
      <hr className="h-px my-4 bg-horizontalLineColor border-1"></hr>
      <div className="flex justify-start space-x-1 md:hidden p-2 ">
        <h1 className="cursor-pointer font-textfont font-bold text-gray-400">
          HOME |
        </h1>
        <h1 className="cursor-pointer font-textfont font-bold">SHOP</h1>
      </div>
    </>
  );
}
