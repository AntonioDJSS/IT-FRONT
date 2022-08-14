import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import Filtrador from "../components/Filtrador";
import useDash from "../hooks/useDash";

const Validator = () => {
  const { clientes } = useDash();

  return (
    <>
      <Header />
      <Title />
      <Filtrador data={clientes} />
      <Footer />
    </>
  );
};

export default Validator;
