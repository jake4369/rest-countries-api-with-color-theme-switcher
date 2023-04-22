import { useParams } from "react-router-dom";

const Details = () => {
  const { country_name } = useParams();

  return <div>{country_name} Details</div>;
};

export default Details;
