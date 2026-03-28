import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import CourseGrid from "@/components/CourseGrid";
import coursesBg from "@/assets/courses-bg.jpg";

const CoursesPage = () => (
  <Layout>
    <PageBanner
      title="Our Courses"
      subtitle="Explore our wide range of professional courses designed to empower your career."
      bgImage={coursesBg}
    />
    <section className="py-24">
      <div className="container mx-auto px-4">
        <CourseGrid />
      </div>
    </section>
  </Layout>
);

export default CoursesPage;
