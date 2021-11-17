import "./forms.css"

function FormLog() {
    return(
        <div className="formLogin">
            <div className="topo">
                <h4>Bem-vindo ao projeto Tapa D'Água</h4>
            </div>
            <form>
                <div className="inputs">
                    <input type="text" id="login" placeholder="Usuário" autoComplete="off" required></input>
                    <input type="password" id="password" placeholder="Senha" required></input>
                </div>
                <div>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormLog