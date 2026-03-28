import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CourseGrid from "@/components/CourseGrid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, GraduationCap } from "lucide-react";

const activityImages = Object.entries(
  import.meta.glob("../assets/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  }),
)
  .filter(([path]) => path.includes("WhatsApp Image"))
  .map(([, image]) => image as string)
  .slice(0, 8);

const Index = () => (
  <Layout>
    <HeroSection />

    {/* Featured Courses */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Featured Courses</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Explore our most popular professional courses.
          </p>
        </motion.div>
        <CourseGrid limit={8} showViewAll />
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Why Brain Builder?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: GraduationCap, title: "Expert Instructors", desc: "Learn from industry professionals with years of real-world experience." },
            { icon: Heart, title: "Community Driven", desc: "Backed by Right Way Foundation's mission for social development." },
            { icon: ArrowRight, title: "Career Focused", desc: "Courses designed to give you practical, job-ready skills." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 text-center hover-scale"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Classroom Activities */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Classroom Activities</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real sessions where teachers are training students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activityImages.map((image, i) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden hover:glow-gold transition-all duration-300"
            >
              <img
                src={image}
                alt={`Classroom activity ${i + 1}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-16 glow-gold max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to <span className="text-gradient">Transform</span> Your Future?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Join hundreds of students building their careers with Brain Builder.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-gold"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
