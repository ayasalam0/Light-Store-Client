import Button from "../buttons/Button";

const CategoriesCard = (props) => {
  return (
    <div className=" w-96  h-583px  relative ">
      <img
        src={props.image}
        alt="logo"
        className=" h-full w-full rounded-lg  object-cover absolute -z-20 "
      />
      <div className="bg-gradient-to-b from-black to-transparent     h-full w-full flex flex-col items-center  justify-between rounded-lg">
        <h1 className="text-white m-4 ">{props.title}</h1>
        <Button
          className={props.buttonStyle}
          ParagraphStyle={props.ParagraphStyle}
          title={props.buttonName}
          href={props.href}
        />
      </div>
    </div>
  );
};

export default CategoriesCard;
