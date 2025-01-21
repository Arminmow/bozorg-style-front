export const generateProductPageInfo = (path) => {
  switch (path) {
    case "/men":
      return {
        title: "مردانه ",
        description: "استایل مردونه خودتو پیدا کن و بدرخش",
      };
    case "/women":
      return {
        title: "زنانه",
        description:
          "استایل منحصر به فرد خودتو با جدیدترین لباس‌های زنانه پیدا کن و جذابیتتو به نمایش بذار",
      };
    case "/shoes":
      return {
        title: "کفش‌ها",
        description:
          "بهترین کفش‌ها برای هر موقعیت و استایلی رو پیدا کن و راحتی و زیبایی رو با هم تجربه کن",
      };
    // Add more cases for other categories or routes
    default:
      return {
        title: "Browse Our Collection",
        description:
          "Discover a wide variety of clothing, shoes, and accessories for all tastes and occasions.",
      };
  }
};
