import sliderImgOne from "../assets/images/courseImgOne.jpg";
import sliderImgTwo from "../assets/images/courseImgTwo.jpg";
import sliderImgThree from "../assets/images/courseImgThree.jpg";
import sliderImgFour from "../assets/images/courseImgFour.jpg";
import sliderImgFive from "../assets/images/courseImgFive.jpg";

const bannerData = [
  {
    id: 1,
    title:
      "অনলাইন লার্নিং প্ল্যাটফর্মে স্বাগতম যে কোনো জায়গা থেকে শিখুন",
    description:
      "আপনার ঘরের আরাম থেকে শত শত কোর্স অ্যাক্সেস করুন এবং আপনার কর্মজীবন উন্নত করুন। সব বিষয়ে শেখার জন্য অনলাইন কোর্স।",
    imageUrl: sliderImgOne,
    link: "/",
  },
  {
    id: 2,
    title: "নতুন কোর্স এখনি এনরোল করুন জ্ঞান এবং দক্ষতা বাড়ান",
    description:
      "প্রযুক্তি, ব্যবসা এবং আরও অনেক কিছুর ক্ষেত্রে আমাদের সর্বশেষ কোর্সগুলি দেখুন। প্রতিটি কোর্সে থাকছে গভীরতর শিক্ষা।",
    imageUrl: sliderImgTwo,
    link: "/",
  },
  {
    id: 3,
    title:
      "আমাদের কমিউনিটিতে যোগ দিন যেখানে শিখবেন এবং সমৃদ্ধ হবেন",
    description:
      "শিক্ষার্থীদের এবং শিক্ষকদের একটি প্রাণবন্ত সম্প্রদায়ে যোগ দিন। অন্যদের সাথে আপনার যাত্রা শেয়ার করুন এবং একে অপরকে সমর্থন করুন।",
    imageUrl: sliderImgThree,
    link: "/",
  },
  {
    id: 4,
    title:
      "বিশেষজ্ঞ প্রশিক্ষকরা আপনাকে শেখাবেন যাদের বহু বছরের অভিজ্ঞতা রয়েছে",
    description:
      "আমাদের কোর্সগুলি শিল্প বিশেষজ্ঞদের দ্বারা শেখানো হয় যাদের বহু বছরের অভিজ্ঞতা রয়েছে। তাদের থেকে সঠিক এবং কার্যকর শিক্ষা পান।",
    imageUrl: sliderImgFour,
    link: "/",
  },
  {
    id: 5,
    title: "নমনীয় শেখার সুযোগ আপনার নিজস্ব সময়সূচী অনুযায়ী শিখুন",
    description:
      "আমাদের নমনীয় অনলাইন কোর্সের মাধ্যমে আপনার নিজস্ব গতিতে শিখুন। যখনই আপনার সময় পাওয়া যায়, তখনই শিখতে পারেন।",
    imageUrl: sliderImgFive,
    link: "/",
  },
];

export const getAllBannerData = () => {
  return bannerData;
};
