//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import styles from '../card/card.module.css'

function Card(props) {
  return (
    <>
    <div className={styles.father}>
        <p>Hola, {props.name}</p>
        <p>Usted eligio: {props.raza}</p>
    </div>
</>
  );
}

export default Card;
