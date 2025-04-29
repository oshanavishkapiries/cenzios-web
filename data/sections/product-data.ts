export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

export const hero = {
  title: "Our Services",
  description: "Discover our innovative solutions designed to transform your business"
}

export const products: Product[] = [
  {
    id: "1",
    title: "Product One",
    description: "A comprehensive solution for your business needs. This product offers advanced features and capabilities to streamline your operations.",
    image: "https://syntelligenceit.com/wp-content/uploads/2023/03/Sindhu.png",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ],
    category: "Category 1"
  },
  {
    id: "2",
    title: "Product Two",
    description: "Another innovative solution designed to enhance your productivity. This product combines cutting-edge technology with user-friendly features.",
      image: "https://syntelligenceit.com/wp-content/uploads/2023/03/Tuvogo.png",
      features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    category: "Category 2"
  },
  {
    id: "3",
    title: "Product Three",
    description: "A powerful tool that transforms your workflow. This product is built with scalability and performance in mind.",
    image: "https://syntelligenceit.com/wp-content/uploads/2023/03/spigator-cov.png",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5"
    ],
    category: "Category 1"
  }
]; 