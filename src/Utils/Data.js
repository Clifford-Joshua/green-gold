import data from "../Assets/bg8.jpg";
import DevOps from "../Assets/bg11.jpeg";
import SD from "../Assets/bg21.jpg";
import DS from "../Assets/bg18.jpg";
import SE from "../Assets/bg15.jpg";
import UI from "../Assets/bg20.jpg";
import FD from "../Assets/bg21.jpg";
import BD from "../Assets/bg24.jpg";
import WWD from "../Assets/bg28.jpeg";
import CS from "../Assets/bg23.jpg";
import WD from "../Assets/bg19.avif";
import MAD from "../Assets/bg26.jpg";
import FSD from "../Assets/bg1.jpg";
import AI from "../Assets/bg4.jpg";
import CND from "../Assets/bg.jpg";
import DM from "../Assets/bg2.jpg";
import JS from "../Assets/bg14.jpg";
import DE from "../Assets/bg16.jpg";
import AND from "../Assets/bg27.jpg";
import AD from "../Assets/bg17.jpg";
import BC from "../Assets/bg13.jpg";
import SAE from "../Assets/bg9.jpg";
import HA from "../Assets/bg7.jpg";
import AF from "../Assets/bg25.jpg";
import Sport from "../Assets/Sport.jpg";
import Teacher from "../Assets/Teacher.jpg";
import Knowledge from "../Assets/Knowledge.jpg";
import Art from "../Assets/Art.jpg";
import Cultural from "../Assets/Harmony.jpg";
import Science from "../Assets/Science.jpg";
import Literary from "../Assets/Literary.jpg";
import LeaderShip from "../Assets/Leadership.jpg";
import Talent from "../Assets/Talent.jpg";
import EcoFest from "../Assets/EcoTest.jpg";
import Future from "../Assets/Future.jpg";
import Amelia from "../Assets/Dr. Amelia Clarke.jpg";
import Charles from "../Assets/Dr. Charles Kensington.jpg";
import Charlotte from "../Assets/Dr. Charlotte Emerson.jpg";
import Eleanor from "../Assets/Dr. Eleanor Grace.jpg";
import Emily from "../Assets/Dr. Emily Patterson.jpg";
import Ethan from "../Assets/Dr. Ethan Caldwell.jpg";
import Nathaniel from "../Assets/Dr. Nathaniel Hayes.jpg";
import Samuel from "../Assets/Dr. Samuel Thornton.jpg";
import Olivia from "../Assets/Dr. Olivia Sinclair.jpg";
import Thomas from "../Assets/Dr. Thomas Langley.jpg";
import Benjamin from "../Assets/Professor Benjamin Sterling.jpg";
import Daniel from "../Assets/Professor Daniel Bradshaw.jpg";
import Henry from "../Assets/Professor Henry Whitaker.jpg";
import James from "../Assets/Professor James Harrington.jpg";
import Isabelle from "../Assets/Professor Isabelle Montgomery.jpg";
import Katherine from "../Assets/Professor Katherine Bellamy.jpg";
import Michael from "../Assets/Professor Michael Carter.jpg";
import Margaret from "../Assets/Professor Margaret Rowley.jpg";
import Bennett from "../Assets/Professor Sophia Bennett.jpg";
import Victoria from "../Assets/Professor Victoria Langford.jpg";

import {
  FaAtom,
  FaRecycle,
  FaQuestion,
  FaUserSecret,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaRegCheckCircle,
  FaGlobeAfrica,
  FaPencilAlt,
} from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { LiaConnectdevelop } from "react-icons/lia";
import { PiBiohazardBold } from "react-icons/pi";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { MdOutlineScience, MdOutlineSportsSoccer } from "react-icons/md";
import { GiForest } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";

import {
  FaChalkboardUser,
  FaMicrochip,
  FaUserGear,
  FaUsersGear,
  FaPersonMilitaryPointing,
  FaMobileButton,
  FaEarthAsia,
  FaGear,
  FaOldRepublic,
  FaBedPulse,
  FaKitMedical,
  FaSackDollar,
  FaUsersLine,
  FaBolt,
  FaLocationDot,
  FaUsers,
  FaRegClock,
  FaBookOpen,
  FaFillDrip,
  FaGraduationCap,
} from "react-icons/fa6";

export const Data = {
  CourseApi: [
    {
      courseName: "Data Analytics",
      courseText:
        "Data analytics is the collection, transformation, and organization of data in order to draw conclusions, make predictions, and drive informed decision making",
      courseIcon: <FaChalkboardUser />,
      courseImg: data,
    },
    {
      courseName: "DevOps Engineering",
      courseText:
        "DevOps integrates and automates the work of software development and IT operations as a means for improving and shortening the systems development life cycle",
      courseIcon: <FaMicrochip />,
      courseImg: DevOps,
    },
    {
      courseName: "Software Development (Python)",
      courseText:
        "Software development is the process of designing, creating, testing, and maintaining different software applications. It involves the application of various principles and techniques from computer science, engineering and mathematical analysis.",
      courseIcon: <LiaConnectdevelop />,
      courseImg: SD,
    },
    {
      courseName: "Data Science",
      courseText:
        "Data science is the study of data to extract meaningful insights for business.",
      courseIcon: <FaAtom />,
      courseImg: DS,
    },
    {
      courseName: "Software Engineering",
      courseText:
        "Software engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications.",
      courseIcon: <FaUserGear />,
      courseImg: SE,
    },
    {
      courseName: "UI UX Design",
      courseText:
        " User Interface (UI) and User Experience (UX) Design focus using Figma.",
      courseIcon: <LuFigma />,
      courseImg: UI,
    },
    {
      courseName: "Frontend Development",
      courseText:
        "The development of visual and interactive elements of a website.",
      courseIcon: <LiaConnectdevelop />,
      courseImg: FD,
    },
    {
      courseName: "Backend Development",
      courseText:
        "The development of functionality and server-side of a software.",
      courseIcon: <FaUsersGear />,
      courseImg: BD,
    },
    {
      courseName: "WordPress Web Design",
      courseText:
        "WordPress is a web content management system for building websites.",
      courseIcon: <FaUsersGear />,
      courseImg: WWD,
    },
    {
      courseName: "Cyber Security",
      courseText:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.",
      courseIcon: <FaPersonMilitaryPointing />,
      courseImg: CS,
    },
    {
      courseName: "Web Development (PHP/Laravel)",
      courseText:
        "The development of visual and interactive elements of a website.",
      courseIcon: <LiaConnectdevelop />,
      courseImg: WD,
    },
    {
      courseName: "Mobile App Development",
      courseText:
        "Build functional cross platform mobile app with flutter and dart.",
      courseIcon: <FaMobileButton />,
      courseImg: MAD,
    },
    {
      courseName: "Full stack Development (MERN) ",
      courseText:
        "Our full stack development focus on how to build software using MongoDB, ExpressJS, React and NodeJS.",
      courseIcon: <FaChalkboardUser />,
      courseImg: FSD,
    },
    {
      courseName: "Artificial Intelligence ",
      courseText:
        "Learn deep learning, computer vision, natural language processing",
      courseIcon: <FaRecycle />,
      courseImg: AI,
    },
    {
      courseName: "C# and .NET Development",
      courseText:
        "Build enterprise software using .NET framework and other tools like c#",
      courseIcon: <FaChalkboardUser />,
      courseImg: CND,
    },
    {
      courseName: "Digital Marketing",
      courseText: "Learn how to turn prospect into repeated buyer",
      courseIcon: <FaEarthAsia />,
      courseImg: DM,
    },
    {
      courseName: "Java Software Training",
      courseText: "Build scalable and enterprise application with Java",
      courseIcon: <FaChalkboardUser />,
      courseImg: JS,
    },
    {
      courseName: "Data Engineering",
      courseText:
        "Learn how to work with big data, data pipeline, ETL and more",
      courseIcon: <FaGear />,
      courseImg: DE,
    },
    {
      courseName: "Acting And Drama",
      courseText:
        "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      courseIcon: <FaOldRepublic />,
      courseImg: AND,
    },
    {
      courseName: "Art And Design",
      courseText:
        "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      courseIcon: <PiBiohazardBold />,
      courseImg: AD,
    },
    {
      courseName: "Biology And Conservation",
      courseText:
        "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      courseIcon: <FaBedPulse />,
      courseImg: BC,
    },
    {
      courseName: "Science And Engineering",
      courseText:
        "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      courseIcon: <FaGear />,
      courseImg: SAE,
    },
    {
      courseName: "Health Administration",
      courseText:
        "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      courseIcon: <FaKitMedical />,
      courseImg: HA,
    },
    {
      courseName: "Accounting And Finance",
      courseText:
        "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      courseIcon: <FaSackDollar />,
      courseImg: AF,
    },
  ],
  EventApi: [
    {
      eventName: "Knowledge Quest: Academic Challenge Day",
      eventText:
        "This event is a celebration of learning and intellectual growth, offering students the chance to participate in a variety of academic challenges and competitions. Activities may include quiz bowls, math relays, spelling bees, science experiments, and brainteasers that test knowledge across multiple subjects. It’s a day to foster curiosity and problem-solving skills while inspiring a love for learning. Parents and teachers can cheer on participants, and awards will be given to recognize outstanding performance and teamwork.",
      eventIcon: <FaQuestion />,
      eventImg: Knowledge,
    },
    {
      eventName: "Artscape: Creativity Unleashed",
      eventText:
        "This is an art-focused event where students can showcase their talents in painting, sculpture, photography, and other creative mediums. The event will feature an art gallery exhibition of student work, live art demonstrations, and workshops led by guest artists. Students will also have the opportunity to participate in hands-on creative activities such as pottery, digital art, and crafting. The goal of this event is to celebrate the power of creativity and inspire students to think outside the box.",
      eventIcon: <BsGlobeAsiaAustralia />,
      eventImg: Art,
    },
    {
      eventName: "Harmony Fest: Cultural Celebration Night",
      eventText:
        "A night dedicated to celebrating cultural diversity and fostering inclusivity within the school community. This event will feature traditional music, dance performances, cultural exhibits, and a showcase of ethnic cuisines from around the world. Students, parents, and teachers will have the opportunity to learn about and experience different cultural traditions while strengthening bonds within the school. The event will also include cultural fashion shows and storytelling sessions to highlight the beauty of heritage and global unity.",
      eventIcon: <FaUsersLine />,
      eventImg: Cultural,
    },
    {
      eventName: "Sparkathon: Innovation and Science Fair",
      eventText:
        "An exciting day for budding innovators and scientists to showcase their creativity and problem-solving skills. Students will present their science projects, innovative prototypes, and research on various topics ranging from renewable energy to artificial intelligence. The event will also include interactive experiments, robotics demonstrations, and guest speakers from STEM industries to inspire students to think critically and explore careers in science and technology. Awards will be given for creativity, innovation, and scientific excellence.",
      eventIcon: <MdOutlineScience />,
      eventImg: Science,
    },
    {
      eventName: "Sports Extravaganza: Fitness and Fun Day",
      eventText:
        "This event is a celebration of sports, teamwork, and physical fitness. Students will participate in a wide range of activities, including team sports like soccer, basketball, and volleyball, as well as individual competitions like track-and-field races, obstacle courses, and tug-of-war. The day will also feature fun games such as sack races and a “parents versus teachers” match. The goal of the event is to promote healthy lifestyles, teamwork, and school spirit, while also encouraging everyone to have fun and stay active.",
      eventIcon: <FaChalkboardUser />,
      eventImg: Sport,
    },
    {
      eventName: "Literary Luminaries: Storytelling and Poetry Fest",
      eventText:
        "This event brings literature to life by creating a platform for students to explore and express their creativity through storytelling and poetry. Activities will include poetry slams, storytelling competitions, book readings, and creative writing workshops. Professional authors, poets, and storytellers may also be invited to share their experiences and inspire students. The event aims to foster a love for literature, encourage self-expression, and help students develop their skills in writing and public speaking.",
      eventIcon: <MdOutlineSportsSoccer />,
      eventImg: Literary,
    },
    {
      eventName: "Leadership Summit: Young Leaders in Action",
      eventText:
        "Aimed at developing the leadership skills of students, this summit will feature inspiring talks by guest speakers, team-building activities, and interactive workshops on topics such as communication, problem-solving, and decision-making. Participants will engage in real-world simulations, group challenges, and panel discussions designed to enhance their understanding of what it means to be a leader. The summit will empower students to take initiative, collaborate effectively, and become future leaders in their schools, communities, and beyond.",
      eventIcon: <FaUserSecret />,
      eventImg: LeaderShip,
    },
    {
      eventName: "Talent Gala: A Showcase of Stars",
      eventText:
        "A night filled with dazzling performances, this event gives students the chance to display their unique talents in music, dance, drama, comedy, and more. The Talent Gala will include carefully choreographed performances, solo acts, and even a “hidden talents” segment where students surprise the audience with unusual skills like juggling or magic. It’s an event to celebrate individuality, build confidence, and encourage students to pursue their passions while providing wholesome entertainment for families and friends.",
      eventIcon: <PiBiohazardBold />,
      eventImg: Talent,
    },
    {
      eventName: "EcoFest: Sustainability Awareness Day",
      eventText:
        "This event is all about creating awareness and taking action for the environment. EcoFest will include tree-planting drives, recycling campaigns, and workshops on how to adopt eco-friendly practices in daily life. Students will also participate in activities like building eco-crafts from recyclable materials, creating awareness posters, and attending seminars on topics like climate change and sustainable living. The event’s goal is to foster a sense of environmental responsibility and inspire the next generation to care for the planet.",
      eventIcon: <GiForest />,
      eventImg: EcoFest,
    },
    {
      eventName: "Future Ready: Career and Skills Expo",
      eventText:
        "Aimed at preparing students for the future, this event will offer career guidance and skill-building opportunities. Students will attend interactive sessions and workshops on topics such as resume writing, interview preparation, and entrepreneurship. Representatives from various industries and colleges will host career booths where students can explore different career paths, ask questions, and gather resources. The event will also include alumni sharing their success stories, inspiring students to think big and set goals for their futures.",
      eventIcon: <SiFuturelearn />,
      eventImg: Future,
    },
  ],
  TeachersApi: [
    {
      name: "Professor James Harrington",
      profession: "ceo",
      image: James,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Eleanor Grace",
      profession: "Chancellor",
      image: Eleanor,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Ethan Caldwell",
      profession: " Dean",
      image: Ethan,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Sophia Bennett",
      profession: "Vice-Chancellor",
      image: Bennett,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Michael Carter",
      profession: "Associate Dean",
      image: Michael,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Olivia Sinclair",
      profession: "Head of Department (HOD)",
      image: Olivia,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Samuel Thornton",
      profession: "Associate Professor",
      image: Samuel,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Isabelle Montgomery",
      profession: "Professor",
      image: Isabelle,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Henry Whitaker",
      profession: "Professor",
      image: Henry,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Amelia Clarke",
      profession: "Associate Professor",
      image: Amelia,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Nathaniel Hayes",
      profession: "Assistant Professor",
      image: Nathaniel,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Victoria Langford",
      profession: "Professor",
      image: Victoria,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Benjamin Sterling",
      profession: "",
      image: Benjamin,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Charlotte Emerson",
      profession: "Assistant Professor",
      image: Charlotte,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Charles Kensington",
      profession: "Lecturer",
      image: Charles,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Margaret Rowley",
      profession: "Lecturer",
      image: Margaret,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Daniel Bradshaw",
      profession: "Lecturer",
      image: Daniel,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Emily Patterson",
      profession: "Lecturer",
      image: Emily,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Dr. Thomas Langley",
      profession: "Teaching Assistant ",
      image: Thomas,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
    {
      name: "Professor Katherine Bellamy",
      profession: "Teaching Assistant ",
      image: Katherine,
      icon: [<FaFacebookF />, <FaWhatsapp />, <FaLinkedinIn />, <FaYoutube />],
      links: [
        "https://web.facebook.com/",
        "https://web.whatsapp.com/",
        "https://www.linkedin.com/feed/",
        "https://www.youtube.com/",
      ],
    },
  ],
  CourseInfo: [
    {
      img: Teacher,
      name: "Frank Mitchel",
      title: "Teacher",
    },
    {
      icon: <FaBolt />,
      name: "Science & Engineering",
      title: "Category",
    },
    {
      icon: <FaUsers />,
      name: "50 Students",
      title: "Enrolled",
    },
    {
      icon: <FaRegClock />,
      name: "04 Years",
      title: "Course Time",
    },
    {
      icon: <FaSackDollar />,
      name: "$20,000",
      title: "Course Fees",
    },
  ],
  CourseFeature: [
    {
      icon: <FaBookOpen />,
      title: "Lectures",
      detail: "20",
    },
    {
      icon: <FaPencilAlt />,
      title: "Quizes",
      detail: "12",
    },
    {
      icon: <FaRegClock />,
      title: "Duration",
      detail: "4 Years",
    },
    {
      icon: <FaGlobeAfrica />,
      title: "  Language",
      detail: "English",
    },
    {
      icon: <FaFillDrip />,
      title: "Skill Level",
      detail: "Basic",
    },
    {
      icon: <FaLocationDot />,
      title: "Location",
      detail: "On Campus",
    },
    {
      icon: <FaUsers />,
      title: "Students",
      detail: "90",
    },
    {
      icon: <FaGraduationCap />,
      title: "Certificate",
      detail: "Yes",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Assessments",
      detail: "Yes",
    },
  ],
};
