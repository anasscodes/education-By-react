import { CiMap } from "react-icons/ci";
import { FaImage, FaCreditCard } from "react-icons/fa";
export const cardData = [
    {
        id: 1,
        icon: <CiMap />,
        title: "Books & Courses",
        description: " The best selection of educational books and online courses to boost your knowledge.",
        color: "#E74040",
        bgColor: "#FFDCD1",
    },
    {
        id: 2,
        icon: <FaImage />,
        title: "Market Analysis",
        description: "Get insights from comprehensive market analysis to make informed decisions.",
        color: "#2DC071",
        bgColor: "#B9EAAB",
    },
    {
        id: 3,
        icon: <FaCreditCard />,
        title: "50+ Online courses",
        description: "Access over 50 online courses designed to enhance your skills and career prospects.",
        color: "#23A6F0",
        bgColor: "#B2E3FF",
    },
];

export const coursesData = [
    {
        id: 1,
        img: "/design.jpg",
        department: "Graphic Design",
        title: "UI/UX Design Bootcamp",
        rating: "4.8",
        description:
            "Unlock your creativity with our comprehensive UI/UX Design Bootcamp. Learn the fundamentals of user interface and user experience design, and build a portfolio that stands out.",
        sales: "1.2k",
        price: "$49.99",
        discount: "$4.99",
        duration: "22 hrs 30min",
        lessons: "15 Lessons",
    },
    {
        id: 2,
        img: "/PHP.jpg",
        department: "Development",
        title: "Full-Stack Web Development",
        rating: "4.7",
        description:
            "Become a full-stack web developer with our in-depth course covering both front-end and back-end technologies. Build real-world projects and gain hands-on experience.",
        sales: "980",
        price: "$59.99",
        discount: "$9.99",
        duration: "30 hrs 45min",
        lessons: "20 Lessons",
    },
    {
        id: 3,
        img: "/marketing.avif",
        department: "Marketing",
        title: "Digital Marketing Mastery",
        rating: "4.9",
        description:
            "Master the art of digital marketing with our comprehensive course. Learn SEO, social media marketing, email marketing, and more to boost your business or career.",
        sales: "1.5k",
        price: "$39.99",
        discount: "$3.99",
        duration: "18 hrs 15min",
        lessons: "12 Lessons",      
    },
];

export const ratingData = [
    {
        id: 1,
        stars: "★★★★★",
        img: "/sarah.jpg",
        description:
            "This course exceeded my expectations! The content was well-structured and the instructors were knowledgeable. Highly recommend to anyone looking to enhance their skills.",
        name: "Sarah L.",
        occupation: "Graphic Designer",
    },
    {
        id: 2,
        stars: "★★★★☆",
        img: "/james.avif",
        description:
            "Great course with practical examples. I appreciated the hands-on approach and the real-world projects. It helped me land a job in web development!",
        name: "James K.",
        occupation: "Web Developer",
    },
    {
        id: 3,
        stars: "★★★★★",
        img: "/emly.jpg",
        description:
            "The Digital Marketing Mastery course was a game-changer for my career. The strategies I learned have already made a significant impact on my business.",
        name: "Emily R.",
        occupation: "Marketing Specialist",
    },
];