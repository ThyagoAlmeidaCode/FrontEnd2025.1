function Eventou({numero}){
    function clicar(){
        alert('Essa turma é Top!' + numero);
    }

    return (
        <div>
            <h1>Eventou</h1>
            <button onClick={clicar} >Clique aqui</button>
        </div>
    )
}

export default Eventou