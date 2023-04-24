import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://twitter.com/JakeXCode"
        className="twitter-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter className="twitter-icon" /> JakeXCode
      </a>
    </footer>
  );
};

export default Footer;
