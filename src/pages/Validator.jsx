import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import Filtrador from "../components/Filtrador";
import Data from "../Data.json";

const Validator = () => {
  return (
    <>
      <Header />
      <Title />
      <Filtrador data={Data} />
      <Footer />
    </>
  );
};

export default Validator;
