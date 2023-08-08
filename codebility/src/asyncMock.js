const products = [
  {
    id: "1",
    name: "Mastering React",
    price: 19.99,
    category: "books",
    img: "https://img-c.udemycdn.com/course/480x270/1254714_84c3_3.jpg",
    stock: 18,
    description:
      "A book to learn the fundamentals of the React framework to develop front-end applications.",
  },
  {
    id: "2",
    name: "React Development",
    price: 149.99,
    category: "courses",
    img: "https://ashokitech.com/uploads/course/react-js-online-training.png",
    stock: 7,
    description:
      "A course for learning React by developing a capstone project to apply your skills to real-world problems.",
  },
  {
    id: "3",
    name: "Backend Development",
    price: 199.99,
    category: "courses",
    img: "https://assets-global.website-files.com/613baa7ad4f394142e65cb73/6192df82a3ed61da2f44f38a_opengraph-06.jpg",
    stock: 11,
    description:
      "Learn the essential skills you need to be a successful backend developer with this course.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products, 500));
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(
        products.find((product) => product.id === productId),
        500
      )
    );
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter(
          (prod) => prod.category.toLowerCase() === categoryId.toLowerCase()
        )
      );
    }, 500);
  });
};
