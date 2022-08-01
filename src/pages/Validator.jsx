import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import Filtrador from "../components/Filtrador";
import BookData from "../Data.json";

const Validator = () => {
  return (
    <>
      <Header />
      <Title />
      <Filtrador data={BookData} />
      <Footer />
    </>
  );
};

export default Validator;
