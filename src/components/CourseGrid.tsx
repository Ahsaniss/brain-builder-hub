import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart, Youtube, Palette, Film, Camera, PenTool,
  Type, Users, Code, FileText, Languages, BookOpen,
  BarChart3, Briefcase, ArrowRight,
} from "lucide-react";

export const courses = [
  { id: "amazon-training", icon: ShoppingCart, title: "Amazon Training", desc: "Master Amazon FBA, wholesale & private label strategies.", skills: ["Product Research", "Listing Optimization", "PPC Campaigns", "Inventory Management"] },
  { id: "youtube-training", icon: Youtube, title: "YouTube Training", desc: "Grow your channel with content strategy & monetization.", skills: ["Content Strategy", "SEO", "Monetization", "Audience Growth"] },
  { id: "graphic-designing", icon: Palette, title: "Graphic Designing", desc: "Create stunning visuals with industry-standard tools.", skills: ["Adobe Photoshop", "Illustrator", "Brand Design", "UI Design"] },
  { id: "video-editing", icon: Film, title: "Video Editing", desc: "Professional video editing for social media & film.", skills: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"] },
  { id: "photography", icon: Camera, title: "Photography", desc: "Capture compelling images with expert techniques.", skills: ["Composition", "Lighting", "Portrait", "Post-Processing"] },
  { id: "drawing", icon: PenTool, title: "Drawing", desc: "From sketching basics to advanced illustration.", skills: ["Sketching", "Shading", "Perspective", "Digital Art"] },
  { id: "calligraphy", icon: Type, title: "Calligraphy", desc: "Master the art of beautiful hand lettering.", skills: ["Script Styles", "Brush Pen", "Layout Design", "Digital Calligraphy"] },
  { id: "model-shoot", icon: Users, title: "Model Shoot", desc: "Professional modeling & portfolio photography.", skills: ["Posing", "Portfolio Building", "Lighting", "Post-Production"] },
  { id: "web-development", icon: Code, title: "Web Development", desc: "Build modern websites & web applications.", skills: ["HTML/CSS", "JavaScript", "React", "Backend Development"] },
  { id: "content-writing", icon: FileText, title: "Content Writing", desc: "Craft engaging content for blogs & business.", skills: ["SEO Writing", "Copywriting", "Blog Strategy", "Editing"] },
  { id: "spoken-english", icon: Languages, title: "Spoken English", desc: "Boost fluency & confidence in English communication.", skills: ["Pronunciation", "Grammar", "Conversation", "Public Speaking"] },
  { id: "ielts", icon: BookOpen, title: "IELTS", desc: "Achieve your target band score with expert guidance.", skills: ["Reading", "Writing", "Listening", "Speaking"] },
  { id: "seo-digital-marketing", icon: BarChart3, title: "SEO & Digital Marketing", desc: "Drive traffic & grow brands online.", skills: ["SEO", "Social Media", "Google Ads", "Analytics"] },
  { id: "office-management", icon: Briefcase, title: "Office Management", desc: "Excel in administrative & management skills.", skills: ["MS Office", "Communication", "Organization", "Leadership"] },
];

interface CourseGridProps {
  limit?: number;
  showViewAll?: boolean;
}

const CourseGrid = ({ limit, showViewAll = false }: CourseGridProps) => {
  const items = limit ? courses.slice(0, limit) : courses;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <Link
              to={`/courses/${c.id}`}
              className="glass rounded-xl p-6 block group hover:scale-[1.03] hover:glow-pink transition-all duration-300 cursor-pointer h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {showViewAll && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Courses <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default CourseGrid;
