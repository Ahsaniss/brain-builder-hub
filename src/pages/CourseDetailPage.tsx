import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { courses } from "@/components/CourseGrid";
import coursesBg from "@/assets/courses-bg.jpg";

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Course Not Found</h1>
            <Link to="/courses" className="text-primary mt-4 inline-block hover:underline">
              ← Back to Courses
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = course.icon;

  return (
    <Layout>
      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img src={coursesBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />

        <div className="relative z-10 container mx-auto px-4">
          <Link to="/courses" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all text-sm">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center glow-gold">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gradient">{course.title}</h1>
              <p className="text-muted-foreground mt-1">{course.desc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video embed placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl overflow-hidden aspect-video"
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Icon className="h-16 w-16 mx-auto text-primary/40 mb-4" />
                  <p className="text-sm">Course preview video coming soon</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
              <div className="space-y-4">
                {course.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 glass rounded-lg p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-gold"
                >
                  Enroll Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetailPage;
