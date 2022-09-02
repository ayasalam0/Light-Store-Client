import Button from "../buttons/Button";

const Header = () => {
  return (
    <div className=" relative ">
      <img
        src="./image.svg"
        alt="logo"
        className="w-1/2 h-screen absolute -right-0 object-cover"
      />
      <div className="flex flex-col space-y-12 z-20 relative ">
        <div className="space-y-12">
          <p className="  pl-14   text-8xl font-bold text-fontPrimary ">
            Welcome TO
          </p>
          <p className="  pl-52   text-8xl font-bold text-fontPrimary ">
            LIGHT STORE
          </p>
          <p className=" pl-80 text-5xl   font-light text-fontSecondary ">
            what you and your home
          </p>
          <p className=" pl-533px text-5xl   font-light text-fontSecondary ">
            needs in one place
          </p>
        </div>
        <Button
          className={"self-center   bg-fontPrimary rounded-lg  h-20 w-96"}
          title="View All Products"
          href={"/products"}
        />
      </div>
    </div>
  );
};

export default Header;
