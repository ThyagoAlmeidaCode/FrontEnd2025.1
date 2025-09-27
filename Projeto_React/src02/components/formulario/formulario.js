import { useState } from "react";
function Formulario(){
    const [email, setEmail] = useState();

    function cadastrar(event){
        event.preventDefault(); /* Impede que a pagina seja recarregada */
        alert('Cadastrado com sucesso!' + email);
    }
    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={cadastrar}>
                <label>Informe seu Email</label>
                <input type='email' placeholder="Digite seu email" onChange={(event) => setEmail(event.target.value)} />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario