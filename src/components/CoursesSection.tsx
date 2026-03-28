import { motion } from "framer-motion";
import {
  ShoppingCart, Youtube, Palette, Film, Camera, PenTool,
  Type, Users, Code, FileText, Languages, BookOpen,
  BarChart3, Briefcase,
} from "lucide-react";

const courses = [
  { icon: ShoppingCart, title: "Amazon Training", desc: "Master Amazon FBA, wholesale & private label strategies." },
  { icon: Youtube, title: "YouTube Training", desc: "Grow your channel with content strategy & monetization." },
  { icon: Palette, title: "Graphic Designing", desc: "Create stunning visuals with industry-standard tools." },
  { icon: Film, title: "Video Editing", desc: "Professional video editing for social media & film." },
  { icon: Camera, title: "Photography", desc: "Capture compelling images with expert techniques." },
  { icon: PenTool, title: "Drawing", desc: "From sketching basics to advanced illustration." },
  { icon: Type, title: "Calligraphy", desc: "Master the art of beautiful hand lettering." },
  { icon: Users, title: "Model Shoot", desc: "Professional modeling & portfolio photography." },
  { icon: Code, title: "Web Development", desc: "Build modern websites & web applications." },
  { icon: FileText, title: "Content Writing", desc: "Craft engaging content for blogs & business." },
  { icon: Languages, title: "Spoken English", desc: "Boost fluency & confidence in English communication." },
  { icon: BookOpen, title: "IELTS", desc: "Achieve your target band score with expert guidance." },
  { icon: BarChart3, title: "SEO & Digital Marketing", desc: "Drive traffic & grow brands online." },
  { icon: Briefcase, title: "Office Management", desc: "Excel in administrative & management skills." },
];

const CoursesSection = () => (
  <section id="courses" className="py-24 gradient-section">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient">Our Courses</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Explore our wide range of professional courses designed to empower your career.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-xl p-6 group hover:scale-[1.03] hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <c.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
