export const generateProductPageInfo = (location) => {
  const queryParams = new URLSearchParams(location.search);
  const gender = queryParams.get("gender"); // e.g., 'men'
  const categoryId = queryParams.get("category_id"); // e.g., '123'

  if (gender) {
    switch (gender) {
      case "men":
        return {
          title: "مردانه",
          description: "استایل مردونه خودتو پیدا کن و بدرخش",
        };
      case "women":
        return {
          title: "زنانه",
          description:
            "استایل منحصر به فرد خودتو با جدیدترین لباس‌های زنانه پیدا کن و جذابیتتو به نمایش بذار",
        };
      default:
        return {
          title: "Browse Our Collection",
          description:
            "Discover a wide variety of clothing, shoes, and accessories for all tastes and occasions.",
        };
    }
  }

  if (categoryId) {
    switch (categoryId) {
      case "1": // Example category ID for shoes
        return {
          title: "کفش‌ها",
          description:
            "بهترین کفش‌ها برای هر موقعیت و استایلی رو پیدا کن و راحتی و زیبایی رو با هم تجربه کن",
        };

      case "4":
        return {
          title: "کاپشن‌ها",
          description:
            ".بهترین کاپشن‌ها برای روزهای سرد و استایل شیک خودتو پیدا کن و همزمان گرما و زیبایی رو تجربه کن",
        };
      // Add more cases for other categories
      default:
        return {
          title: "Category Details",
          description: "Explore items in this category.",
        };
    }
  }

  // Default response if no parameters are present
  return {
    title: "Browse Our Collection",
    description:
      "Discover a wide variety of clothing, shoes, and accessories for all tastes and occasions.",
  };
};
