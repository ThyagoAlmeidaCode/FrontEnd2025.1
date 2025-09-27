import styles from './usercard.module.css'
/* function UserCard(props){
    return (
        <div className={styles.container}>
            <h1>Meus dados:</h1>
            <img src={props.foto} alt="Minha bela foto"></img>
            <p>Nome: {props.nome}</p>
            <p>Cargo: {props.cargo}</p>
            <p>Descrição: {props.descricao}</p>
        </div>
    )
} */

function UserCard({foto, nome, cargo, descricao}){
    return (
        <div className={styles.container}>
            <h1>Meus dados:</h1>
            <img src={foto} alt="Minha bela foto"></img>
            <p>Nome: {nome}</p>
            <p>Cargo: {cargo}</p>
            <p>Descrição: {descricao}</p>
        </div>
    )
}
export default UserCard