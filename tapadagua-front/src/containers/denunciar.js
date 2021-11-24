import './registro.css'
import '../components/viaCEP'
import UserPainel from './userpainel'

const Denunciar = () => {
    return(
        <>
        <div>
            <UserPainel/>
        </div>
        <div className="formRegistro">
            <div className="topo">
                <h4>Cadastro</h4>
            </div>
            <div className="insideRegistro">
                <form>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="CEP">CEP</label>
                        <input type="text" class="form-control" id="CEP"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="UF">UF</label>
                        <input type="text" class="form-control" id="UF"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Cidade">Cidade</label>
                        <input type="text" class="form-control" id="Cidade"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="Endereço">Endereço</label>
                        <input type="text" class="form-control" id="Endereço"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Bairro">Bairro</label>
                        <input type="text" class="form-control" id="Bairro"/>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="Numero">Número</label>
                        <input type="text" class="form-control" id="Numero"/>
                    </div>
                </div>
                <div class="botao">
                <a href="./"><button type="button" class="btn btn-primary">Registrar</button></a>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Denunciar
