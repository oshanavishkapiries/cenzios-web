import { IMAGES } from "./images";

export interface Solution {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const solutions: Solution[] = [
  {
    title: "Web development",
    description: "Expert Web Solutions For B2B And B2C Clients.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/coding-512.png",
    link: IMAGES.MOBILE_DEV_ANIMATION,
  },
  {
    title: "Mobile App Development",
    description: "Native Android And Cross-Platform Mobile App Development.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/smartphone-512.png",
    link: IMAGES.MOBILE_DEV_ANIMATION,
  },
  {
    title: "Custom Software Development",
    description: "Scalable And Secure Custom Software Solutions.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/web_developmrnt-512.png",
    link: IMAGES.SOFTWARE_DEV_ANIMATION,
  },
  {
    title: "Enterprise Technology Solutions",
    description: "ERP Systems, AI Analytics, And Legacy System Modernization.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/layer-512.png",
    link: IMAGES.SYSTEM_ANIMATION,
  },
];
