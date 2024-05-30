import manychatLogoSrc from "../assets/manychat_logo.svg";
import "./Branding.css";

export const Branding = () => {
  return (
    <a className="branding" href="https://manychat.com/">
      <img src={manychatLogoSrc} width={20} height={20} />
      <div>Manychat Hub</div>
    </a>
  );
};
