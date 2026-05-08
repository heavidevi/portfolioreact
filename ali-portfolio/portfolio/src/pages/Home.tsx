import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="h-screen w-full flex items-center justify-center">
        <Hero />
      </section>
      <ProjectList />
    </div>
  );
};

export default Home;
