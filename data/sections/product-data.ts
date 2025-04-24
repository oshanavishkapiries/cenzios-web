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
  description: "We're Not Just Another Software Solutions Company We focus on bringing you the best product, always going the extra mile to fulfill your needs."
}

export const products: Product[] = [
  {
    id: "1",
    title: "Product One",
    description: "A comprehensive solution for your business needs. This product offers advanced features and capabilities to streamline your operations.",
    image: "https://novasolutionsteam.com/assets/img/projects/grip.png",
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
    image: "https://novasolutionsteam.com/assets/img/projects/grip.png",
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
    image: "https://novasolutionsteam.com/assets/img/projects/grip.png",
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
 