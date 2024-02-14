import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full md:flex bg-blue-900 items-center justify-center fixed top-0 py-6 border-b-red-600 z-10">
      <nav className="font-medium gap-x-9 text-white flex text-2xl mx-auto h-full items-center justify-center">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </nav>
    </header>
  );
};

export default Navbar;

function CustomLink({ to, children, props }: any) {
  const linkPath = useResolvedPath(to);
  const isActive = useMatch({ path: linkPath.pathname, end: true });

  return (
    <Link
      {...props}
      to={to}
      style={{ color: isActive ? "#facc15" : "" }}
      className=" text-2xl md:text-3xl 2xl:text-4xl ">
      {children}
    </Link>
  );
}
