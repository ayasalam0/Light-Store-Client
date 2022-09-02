import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CategoriesCard from "./CategoriesCard";
const CategoriesSwiper = () => {
  const categories = [
    {
      image:
        "https://media.wired.com/photos/60f60ad543d0a10a208fe9e0/master/pass/Gear-Smart-Home-Setup-1232197369.jpg",
      title: "Electronics",
      ParagraphStyle: "text-lg ",
      buttonName: "View All",
      buttonStyle: "bg-fontPrimary rounded-lg w-40  h-12 mb-4   ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcfmKwbaZ1zNzPHt7oCTVC10abZ7XOd2iPA&usqp=CAU",
      title: "Women's Clothes",
      ParagraphStyle: "text-lg ",
      buttonName: "View All",
      buttonStyle: "bg-fontPrimary rounded-lg w-40  h-12 mb-4   ",
    },
    {
      image:
        "https://i.pinimg.com/originals/fc/45/29/fc45297d655a97864e67ac571c68d7a2.jpg",
      title: "Men's Clothes",
      ParagraphStyle: "text-lg ",
      buttonName: "View All",
      buttonStyle: "bg-fontPrimary rounded-lg w-40  h-12 mb-4   ",
    },
    {
      image:
        "https://media.istockphoto.com/photos/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-picture-id1180931397?k=20&m=1180931397&s=612x612&w=0&h=f-0SQWW3Wxc8zh4HMLB2p_R4mYhLzHX3-aGrghKuRu4=",
      title: "Jelewary",
      ParagraphStyle: "text-lg ",
      buttonName: "View All",
      buttonStyle: "bg-fontPrimary rounded-lg w-40  h-12 mb-4   ",
    },
  ];
  return (
    <div className=" pt-64 ">
      <h1 className=" pb-11  text-5xl font-normal pl-20">Categories</h1>
      <Swiper slidesPerView={3} loop navigation={true} modules={[Navigation]}>
        {categories.map((category) => {
          return (
            <SwiperSlide className="flex justify-center">
              <CategoriesCard
                image={category.image}
                title={category.title}
                ParagraphStyle="text-lg  text-white"
                buttonName={category.buttonName}
                buttonStyle={category.buttonStyle}
                href={"products"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriesSwiper;
