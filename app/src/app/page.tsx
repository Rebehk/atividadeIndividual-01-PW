import styles from './page.module.css'
import Mensagem from './components/mensagem/message'
import TitleApp from './components/titleApp/titleApp'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.barSlid}></div>
      <TitleApp />
      <Mensagem text="Boris, estou no local já lhe esperando. Estou com camisa azul e calça jeans" photo="user.png" />
      <Mensagem text="Acabei de lhe ver. Vou estacionar o carro próximo." photo="personPhoto.svg" />

    </main>

  )
}
