/* Imortando css para o componente */
import styles from './componenteum.module.css';

/* Criar uma Função */

function ComponenteUm(props) {
    return (
        <div className={styles.container}>
            <h1>Meus dados:</h1>
            <p>Meu nome é: {props.nome}</p>
            <p>Sobrenome: {props.sobrenome}</p>
            <p>Idade:{props.idade} </p> 
        </div>
    )
}
export default ComponenteUm