const Navbar = () => {
    return (
       <div className="flex justify-between mt-2.5 mx-10">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <img className="w-10 animate-pulse" src="/src/assets/logo.png" /> Ai Hub
        </div>
      </div>
      <div className=" hidden md:flex">
        <ul className="flex gap-8 text-xl cursor-pointer ">
          <li>
            <a className="hover:text-red-500">Home</a>
          </li>
          <li>
            <a className="hover:text-red-500">About</a>
          </li>
          <li>
            <a className="hover:text-red-500">Services</a>
          </li>
          <li>
            <a className="hover:text-red-500">Contact</a>
          </li>
        </ul>
      </div>
      <div className="">
        <a className=" bg-red-500 px-4 py-2 rounded-full text-white">Get in Touch</a>
      </div>
    </div>
    );
};

export default Navbar;