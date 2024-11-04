import amc from "@/assets/images/amc.jpg";
import boer from "@/assets/images/boer.jpg";
import dzul from "@/assets/images/dzul.png";
import genomart from "@/assets/images/genomart.png";
import copycrusher from "@/assets/images/copycrusher.jpg";

export const projects = [
  {
    name: "Dzul Nutra",
    description:
      "Dzul Nutra is a pharmaceutical manufacturer company, it manufactures quality customizable vitamins, supplements, and nutraceuticals for other brands.",
    tags: ["Landing Page", "Ecommerce", "Service Selling"],
    img: dzul,
    projectType: "Company Website",
    techs: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Chakra UI",
      "React Slick",
    ],
    liveLink: "https://dzulnutra.com/",
    features: `
    <div>
      <h2>Responsive Design</h2>
      <p>Optimized for both desktop and mobile users, ensuring that every visitor enjoys a smooth, seamless experience across all device types. The layout, images, and functionality adapt fluidly, providing users with a visually consistent and accessible interface whether they are browsing on a smartphone, tablet, or desktop.</p>
    </div>
    <div>
      <h2>Figma to Code Conversion</h2>
      <p>Design elements from Figma are accurately translated into functional code, ensuring that the website matches the original design vision. This process enhances the site's aesthetic quality and improves the workflow, allowing for rapid prototyping and iteration based on high-fidelity design mockups.</p>
    </div>
    <div>
      <h2>Product Catalog and Filtering</h2>
      <p>Features a comprehensive catalog that organizes products into well-defined categories, making it easy for users to browse and find items suited to their needs. Advanced filtering options enable users to refine their search by product type, price, and more, providing a personalized and efficient shopping experience.</p>
    </div>
    <div>
      <h2>Email Sending Features</h2>
      <p>Integrated email capabilities facilitate communication with customers for order confirmations, newsletters, and updates. This feature enhances customer engagement and helps build a strong relationship with the audience by keeping them informed and connected to the brand.</p>
    </div>
    <div>
      <h2>Engaging Visuals</h2>
      <p>High-quality images, consistent branding, and visually appealing design elements create an inviting and professional aesthetic. These visuals enhance the user experience by adding clarity and style, while also strengthening the brand’s identity and appeal.</p>
    </div>
    `,
    screens: [
      "https://i.pinimg.com/736x/e2/5f/1d/e25f1de6d2390a82c84267d95e4b819d.jpg",
      "https://i.pinimg.com/736x/52/a9/9b/52a99b9a6110e4d55690b6dff436c0e1.jpg",
      "https://cdn.dribbble.com/userupload/15498067/file/original-e76c912d9c6765d337f897ebd8170ecc.jpg?resize=400x0",
      "https://i.pinimg.com/originals/34/2c/06/342c06ab6caae0827bc903765c85562f.png",
      "https://cdn.dribbble.com/users/118309/screenshots/12987763/dribbble_2x_4x.png",
      "https://i.pinimg.com/736x/aa/e0/5c/aae05c3d03f4b5759c0fef9bd49c81c2.jpg",
    ],
  },
  {
    name: "Genomart",
    description: "GenoMart is a comprehensive e-commerce platform that integrates customer relationship management (CRM) to streamline both product sales and customer interactions.",
    tags: ["Ecommerce", "CRM", "Single Vendor"],
    img: genomart,
    projectType: "Ecommerce",
    techs: [
      "React JS",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "Redux toolkit",
      "Swiper",
      "Firebase Auth",
      "Node JS",
      "Express",
      "Mongo DB",
    ],
    liveLink: "https://genomart.vercel.app/",
    features: `
   <div>
      <h2>Responsive Design</h2>
      <p>Ensures an optimal experience across all devices, with adaptive layouts that provide a consistent and intuitive shopping interface on desktops, tablets, and mobile devices.</p>
    </div>
    <div>
      <h2>Product Catalog and Filtering</h2>
      <p>A detailed product catalog with powerful filtering options allows customers to browse and find items suited to their needs. Categories and filters enhance the shopping experience, making it easy to navigate the product range.</p>
    </div>
    <div>
      <h2>CRM Integration</h2>
      <p>Seamless CRM integration enables effective customer management, providing insights into user behavior, order history, and preferences. This feature enhances customer engagement by allowing personalized interactions and targeted marketing.</p>
    </div>
    <div>
      <h2>Figma to Code Conversion</h2>
      <p>Designed elements from Figma are translated directly into code, ensuring a high-quality visual representation that matches the original design mockups. This process results in an aesthetically pleasing and functional user interface.</p>
    </div>
    <div>
      <h2>Order Management System</h2>
      <p>Integrated order management allows users to track their purchases, view order statuses, and manage returns or inquiries. This system helps streamline operations and ensures a smooth transaction process from purchase to delivery.</p>
    </div>
    `,
    screens: [
      "https://i.pinimg.com/736x/e2/5f/1d/e25f1de6d2390a82c84267d95e4b819d.jpg",
      "https://i.pinimg.com/736x/52/a9/9b/52a99b9a6110e4d55690b6dff436c0e1.jpg",
      "https://cdn.dribbble.com/userupload/15498067/file/original-e76c912d9c6765d337f897ebd8170ecc.jpg?resize=400x0",
      "https://i.pinimg.com/originals/34/2c/06/342c06ab6caae0827bc903765c85562f.png",
      "https://cdn.dribbble.com/users/118309/screenshots/12987763/dribbble_2x_4x.png",
      "https://i.pinimg.com/736x/aa/e0/5c/aae05c3d03f4b5759c0fef9bd49c81c2.jpg",
    ],
  },
  {
    name: "Boer Funding",
    description:
      "Boer funding is a trading management CRM platform, User manage their trading log, analytics of their data",
    tags: ["CRM", "Payment Gateway", "Trading"],
    img: boer,
    projectType: "Trading Platform",
    techs: ["React JS", "Node JS", "Tailwind CSS", "MongoDB"],
    features: `
    <div>
      <h2>New Trader's Hub</h2>
      <p>This project empowers sellers to monetize their trading strategies, offering them on the platform for other traders to purchase. Sellers can easily create and manage their strategies, ensuring they are available for interested buyers. Each strategy can be listed with detailed descriptions and performance data, allowing buyers to make informed decisions.</p>
    </div>
    <div>
      <h2>Trading Performance Analysis</h2>
      <p>The platform provides sellers with tools to manage a Discord bot, which helps automate communication and trading alerts directly within their community. The bot integrates seamlessly with the seller's Discord server, providing real-time updates and personalized notifications for traders who follow the strategies.</p>
    </div>
    <div>
      <h2>Payment Gateway Integration</h2>
      <p>The platform supports a variety of payment methods, including Stripe for traditional card payments and cryptocurrency for decentralized transactions. This ensures flexibility for both buyers and sellers, making the purchasing process easy and accessible globally.</p>
    </div>
    <div>
      <h2>Personalized Trading Journal</h2>
      <p>To cater to a wider audience, the project integrates cryptocurrency payment options. Sellers can receive payments in crypto, providing a secure, fast, and decentralized way to handle transactions, further broadening the reach of their strategies in the global market.</p>
    </div>`,
    screens: [
      "https://i.pinimg.com/736x/e2/5f/1d/e25f1de6d2390a82c84267d95e4b819d.jpg",
      "https://i.pinimg.com/736x/52/a9/9b/52a99b9a6110e4d55690b6dff436c0e1.jpg",
      "https://cdn.dribbble.com/userupload/15498067/file/original-e76c912d9c6765d337f897ebd8170ecc.jpg?resize=400x0",
      "https://i.pinimg.com/originals/34/2c/06/342c06ab6caae0827bc903765c85562f.png",
      "https://cdn.dribbble.com/users/118309/screenshots/12987763/dribbble_2x_4x.png",
      "https://i.pinimg.com/736x/aa/e0/5c/aae05c3d03f4b5759c0fef9bd49c81c2.jpg",
    ],
  },
  {
    name: "AMC Courier",
    description:
      "AMC is a courier payroll management CRM designed to streamline payroll processes and enhance operational efficiency.",
    tags: ["Payroll", "Courier", "ERP"],
    img: amc,
    projectType: "Courier Website",
    techs: ["React JS", "Node JS", "Tailwind CSS", "MongoDB"],
    features: `
    <div>
      <h2>New Trader's Hub</h2>
      <p>This project empowers sellers to monetize their trading strategies, offering them on the platform for other traders to purchase. Sellers can easily create and manage their strategies, ensuring they are available for interested buyers. Each strategy can be listed with detailed descriptions and performance data, allowing buyers to make informed decisions.</p>
    </div>
    <div>
      <h2>Trading Performance Analysis</h2>
      <p>The platform provides sellers with tools to manage a Discord bot, which helps automate communication and trading alerts directly within their community. The bot integrates seamlessly with the seller's Discord server, providing real-time updates and personalized notifications for traders who follow the strategies.</p>
    </div>
    <div>
      <h2>Payment Gateway Integration</h2>
      <p>The platform supports a variety of payment methods, including Stripe for traditional card payments and cryptocurrency for decentralized transactions. This ensures flexibility for both buyers and sellers, making the purchasing process easy and accessible globally.</p>
    </div>
    <div>
      <h2>Personalized Trading Journal</h2>
      <p>To cater to a wider audience, the project integrates cryptocurrency payment options. Sellers can receive payments in crypto, providing a secure, fast, and decentralized way to handle transactions, further broadening the reach of their strategies in the global market.</p>
    </div>`,
    screens: [
      "https://i.pinimg.com/736x/e2/5f/1d/e25f1de6d2390a82c84267d95e4b819d.jpg",
      "https://i.pinimg.com/736x/52/a9/9b/52a99b9a6110e4d55690b6dff436c0e1.jpg",
      "https://cdn.dribbble.com/userupload/15498067/file/original-e76c912d9c6765d337f897ebd8170ecc.jpg?resize=400x0",
      "https://i.pinimg.com/originals/34/2c/06/342c06ab6caae0827bc903765c85562f.png",
      "https://cdn.dribbble.com/users/118309/screenshots/12987763/dribbble_2x_4x.png",
      "https://i.pinimg.com/736x/aa/e0/5c/aae05c3d03f4b5759c0fef9bd49c81c2.jpg",
    ],
  },
  {
    name: "Copy Crusher",
    description:
      "CopyCrusher is a trading strategy selling and managing platform, offering a marketplace for trading strategies.",
    tags: ["Trading", "Marketplace", "CMS"],
    img: copycrusher,
    projectType: "Trading Website",
    techs: ["React JS", "Node JS", "Tailwind CSS", "MongoDB"],
    features: `
    <div>
      <h2>New Trader's Hub</h2>
      <p>This project empowers sellers to monetize their trading strategies, offering them on the platform for other traders to purchase. Sellers can easily create and manage their strategies, ensuring they are available for interested buyers. Each strategy can be listed with detailed descriptions and performance data, allowing buyers to make informed decisions.</p>
    </div>
    <div>
      <h2>Trading Performance Analysis</h2>
      <p>The platform provides sellers with tools to manage a Discord bot, which helps automate communication and trading alerts directly within their community. The bot integrates seamlessly with the seller's Discord server, providing real-time updates and personalized notifications for traders who follow the strategies.</p>
    </div>
    <div>
      <h2>Payment Gateway Integration</h2>
      <p>The platform supports a variety of payment methods, including Stripe for traditional card payments and cryptocurrency for decentralized transactions. This ensures flexibility for both buyers and sellers, making the purchasing process easy and accessible globally.</p>
    </div>
    <div>
      <h2>Personalized Trading Journal</h2>
      <p>To cater to a wider audience, the project integrates cryptocurrency payment options. Sellers can receive payments in crypto, providing a secure, fast, and decentralized way to handle transactions, further broadening the reach of their strategies in the global market.</p>
    </div>`,
    screens: [
      "https://i.pinimg.com/736x/e2/5f/1d/e25f1de6d2390a82c84267d95e4b819d.jpg",
      "https://i.pinimg.com/736x/52/a9/9b/52a99b9a6110e4d55690b6dff436c0e1.jpg",
      "https://cdn.dribbble.com/userupload/15498067/file/original-e76c912d9c6765d337f897ebd8170ecc.jpg?resize=400x0",
      "https://i.pinimg.com/originals/34/2c/06/342c06ab6caae0827bc903765c85562f.png",
      "https://cdn.dribbble.com/users/118309/screenshots/12987763/dribbble_2x_4x.png",
      "https://i.pinimg.com/736x/aa/e0/5c/aae05c3d03f4b5759c0fef9bd49c81c2.jpg",
    ],
  },
];
