import styles from './page.module.css'
import Mensagem from './components/mensagem/message'
import TitleApp from './components/titleApp/titleApp'
import InformationCar from './components/informationCar/informationCar'
import Contact from './components/contact/contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.barSlid}></div>
      <TitleApp />
      <InformationCar />
      <Contact />
      <Mensagem text="Boris, estou no local já lhe esperando. Estou com camisa azul e calça jeans" photo="user.png" />
      <Mensagem text="Acabei de lhe ver. Vou estacionar o carro próximo." photo="personPhoto.svg" />

    </main>

  )
}
