import Style from "./style.module.css";

export default function Mensagem({ text, photo }) {
  return (
    <div className={Style.container}>
      <img className={Style.avatar} src={photo} alt="Avatar" />
      <div className={Style.containerText}>
        <span className={Style.text}>{text}</span>
      </div>
      <img className={Style.lixeira} src="lixeira.svg" alt="Lixeira" />
    </div>
  );
}
