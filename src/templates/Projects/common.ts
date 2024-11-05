import amc from "@/assets/images/amc.jpg";
import boer from "@/assets/images/boer.jpg";
import dzul from "@/assets/images/dzul.png";
import genomart from "@/assets/images/genomart.png";
import copycrusher from "@/assets/images/copycrusher.jpg";
import algostar from "@/assets/images/algostar.png";

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
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730828424/projects-screen/dcuz2ymcymrtwjsyocge.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730828426/projects-screen/uihkuqrcsfd2ddodwblu.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730828424/projects-screen/nbdr6sohjxehocm58puz.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730828424/projects-screen/msfzurmheto1kl1q5ed3.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730828423/projects-screen/agbytsaszjq7kaje58qx.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730828423/projects-screen/bkxorjh2tzznpcnieopt.png",
    ],
  },
  {
    name: "Genomart",
    description:
      "GenoMart is a comprehensive e-commerce platform that integrates customer relationship management (CRM) to streamline both product sales and customer interactions.",
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
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730839677/projects-screen/n2ci5odhdzvr6mywaoct.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730839676/projects-screen/ziyc5hng8sw4pxeedesh.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730839676/projects-screen/sppjeunqulmg7qyzfziq.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730839677/projects-screen/ujp6xjocopdoo65qw1uk.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730839677/projects-screen/a3cnk1hknxhdhwazulad.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730839677/projects-screen/sbeqz9x5r7fuu1symtq6.png",
    ],
  },
  {
    name: "Boer Funding",
    description:
      "Boer Funding is a trading management platform that combines CRM capabilities with tools for financial tracking, analytics, and payment integration. ",
    tags: ["CRM Platform", "Financial Trading", "Analytics & Visualization"],
    img: boer,
    liveLink: "https://app.boerfunded.com/",
    credentials: {
      email: "shahtaz67@gmail.com",
      password: "tesT@1234",
    },
    projectType: "Trading Platform",
    techs: [
      "React JS",
      "Redux",
      "Redux toolkit",
      "Material UI",
      "Tailwind CSS",
      "Stripe",
      "Node JS",
      "Express",
      "MongoDB",
    ],
    features: `
    <div>
      <h2>CRM Functionality</h2>
      <p>Comprehensive CRM tools enable effective management of user profiles, account activity, and personalized communications. The CRM integration enhances customer interactions, allowing the platform to support users with tailored assistance, account history, and user-specific insights.</p>
    </div>
    <div>
      <h2>Responsive Design</h2>
      <p>Built with a responsive layout that adjusts seamlessly across devices, ensuring a consistent and accessible trading experience on desktops, tablets, and mobile devices. This design approach enhances usability and ensures users can engage with the platform from any device.</p>
    </div>
    <div>
      <h2>Figma to Code Conversion</h2>
      <p>Precise implementation of Figma designs ensures that the platform's interface remains true to the original vision, maintaining a high level of visual polish and usability. This process supports quick development iterations and consistent aesthetics across all UI elements.</p>
    </div>
    <div>
      <h2>Stripe Payment Integration</h2>
      <p>Seamless Stripe integration enables secure, reliable payment processing, allowing users to deposit funds and make transactions with ease. This integration supports a range of payment options, ensuring a smooth and secure financial experience for users.</p>
    </div>
    <div>
      <h2>Data Visualization with Charts and Graphs</h2>
      <p>Dynamic charts and graphs provide users with real-time data insights into market trends, account performance, and trading history. These visual tools enhance decision-making by allowing users to track progress, analyze patterns, and gain insights quickly.</p>
    </div>
    <div>
      <h2>Calendar for Personalized Trading Journal</h2>
      <p>An integrated calendar feature allows users to document trades, set reminders, and maintain a personalized trading journal. This feature supports goal tracking and progress monitoring, helping users stay organized and focused on their trading strategies.</p>
    </div>
    <div>
      <h2>Security and Compliance</h2>
      <p>Advanced security protocols ensure user data protection and platform compliance with industry standards. These features create a safe and trustworthy environment, critical for financial transactions and account management.</p>
    </div>`,
    screens: [
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842884/projects-screen/mx0hnjimdusgpwuohzy4.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842882/projects-screen/xzvmzgfj71utn9f0i08u.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842882/projects-screen/txneqe8gbh4jzkfuqu9p.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842882/projects-screen/aintouejk13pisgnr46w.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842882/projects-screen/kc0mvgcerldh4wp6hjcg.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842882/projects-screen/judzcohgshitpwhkgdfk.png",
    ],
  },
  {
    name: "AMC Courier",
    description:
      "AMC Courier is a SaaS platform designed specifically for courier companies to streamline service management and payroll operations.",
    tags: ["SaaS", "Courier Management", "Payroll Tracking", "Data Visualization"],
    img: amc,
    projectType: "Courier Website",
    techs: ["React JS","TypeScript", "Shadcn", "Tailwind CSS", "Node JS", "Express", "MongoDB"],
    features: `
   
    <div>
      <h2>Courier Service Management</h2>
      <p>Comprehensive management tools for tracking packages, assigning delivery tasks, and monitoring delivery statuses. This feature streamlines courier operations, making it easy to oversee real-time progress and optimize service efficiency.</p>
    </div>
    <div>
      <h2>Payroll and Delivery Tracking</h2>
      <p>Automated payroll system that records employees' deliveries, calculates earnings, and generates payroll reports. This feature provides transparency for employees and simplifies payroll processing for the company.</p>
    </div>
    <div>
      <h2>PDF to JSON Data Conversion</h2>
      <p>Converts PDF documents into structured JSON data, allowing for easy data extraction and integration with other system components. This conversion feature reduces manual data entry, improving accuracy and efficiency in handling documents.</p>
    </div>
    <div>
      <h2>Analytics and Charts</h2>
      <p>Data visualization tools provide detailed insights into performance metrics, including delivery times, service efficiency, and payroll statistics. Charts and analytics enhance decision-making by enabling data-driven insights into business operations.</p>
    </div>
    <div>
      <h2>Employee Management</h2>
      <p>Maintains a comprehensive record of employee details, delivery history, and performance metrics. This feature allows for better workforce management, tracking individual contributions and supporting performance assessments.</p>
    </div>
    <div>
      <h2>Secure Data Management</h2>
      <p>Ensures secure storage and management of sensitive data, including payroll and employee records, with MongoDB. The application implements best practices for data security, making it trustworthy and compliant with industry standards.</p>
    </div>
`,
    screens: [
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842177/projects-screen/mptxvzto0ax2ybcudrza.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842185/projects-screen/evuw1yjq1bipbqcw88s6.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842177/projects-screen/pt3lrlre54irv2fbyrlf.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842177/projects-screen/qfol6vgbmc2pmio6svf0.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842182/projects-screen/nfifuo5csjjpj0jkhm0i.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730842187/projects-screen/kyjklxugj5anvklpqvfc.png",
    ],
  },
  {
    name: "Algostar Portfolio",
    description:
      "Algostar is a web development agancey specialized in building CRM, ERP and SaaS. They provide you web design and development solutions.",
    tags: ["Landing Page", "Portfolio", "Company Website"],
    img: algostar,
    projectType: "Portfolio Website",
    techs: [
      "Next JS",
      "TypeScript",
      "Shadcn",
      "Framer Motion",
      "Tailwind CSS",
      "Magic UI",
    ],
    liveLink: "https://algostar.tech/",
    features: `
   <div>
      <h2>Responsive Design</h2>
      <p>Ensures an optimal browsing experience on all devices, adapting layouts and elements for desktops, tablets, and mobile devices. This responsive design provides a seamless and accessible experience, enhancing user engagement across platforms.</p>
    </div>
    <div>
      <h2>ShadCN Component Library</h2>
      <p>Utilizes ShadCN components for a clean, modern UI with consistent design elements throughout the site. This component library supports a streamlined development process while providing a professional look and feel, aligning with the brand identity.</p>
    </div>
    <div>
      <h2>Framer Motion for Interactive Animations</h2>
      <p>Interactive animations powered by Framer Motion bring the site to life, with smooth transitions and engaging effects that enhance the user experience. These animations add depth to the design, creating a visually appealing and dynamic browsing experience.</p>
    </div>
    <div>
      <h2>Email Service Integration</h2>
      <p>Integrated email service allows visitors to easily contact the company for inquiries, feedback, or collaboration. This feature supports direct communication, enabling a quick and efficient response to client needs.</p>
    </div>
    <div>
      <h2>Blog and Resources Section</h2>
      <p>A dedicated blog or resources section allows the company to share insights, news, and updates, establishing thought leadership and engaging with the audience. This feature supports SEO efforts and keeps content fresh and relevant for returning visitors.</p>
</div>
`,
screens: [
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730840954/projects-screen/equasqicslgfa0chxhxs.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730840953/projects-screen/um1fpzibv29njbey5uvw.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730840953/projects-screen/aq4ditgiwm1lhlavl8px.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730840953/projects-screen/oy4omg3nwxkuc2ldesfo.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730840953/projects-screen/czzpftigmcans3dl6rj7.png",
      "https://res.cloudinary.com/dqyv780cz/image/upload/v1730840953/projects-screen/vuhczlwyvaf4adm6rk9w.png",
    ],
  },
];
