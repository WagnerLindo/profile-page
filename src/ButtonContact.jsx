import "./App.css";

function BtonContact({ text, href, as }) {
  // const Component = as ?? "button";
  if (href) {
    return (
      <a className="body-1 bton-contact" href={href} target="_blank">
        {text}
      </a>
    );
  }
  return <button className="body-1 bton-contact">{text}</button>;
}
export default BtonContact;
