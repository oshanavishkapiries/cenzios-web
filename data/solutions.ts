export interface Solution {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const solutions: Solution[] = [
  {
    title: "Web development",
    description:
      "Expert B2B and B2C web solutions with innovative, functional platforms tailored to your needs.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/coding-512.png",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Native Android and cross-platform mobile apps with cutting-edge features and seamless performance.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/smartphone-512.png",
    link: "/services/mobile-development",
  },
  {
    title: "Custom Software Development",
    description:
      "Scalable, secure software solutions from concept to deployment, built by expert full-stack developers.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/web_developmrnt-512.png",
    link: "/services/research-development",
  },
  {
    title: "Enterprise Technology Solutions",
    description:
      "ERP systems, AI analytics, and legacy modernization with scalable, compliant architectures.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/layer-512.png",
    link: "/services/cloud-solutions",
  },
];
