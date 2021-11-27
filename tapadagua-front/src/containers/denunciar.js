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
                    <div class="form-group col-md-3">
                        <label for="Bairro">Bairro</label>
                        <input type="text" class="form-control" id="Bairro"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="pontoRef">Ponto de Referência</label>
                        <input type="text" class="form-control" id="pontoRef"/>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile03"/>
                        <label class="custom-file-label" for="inputGroupFile03">Escolha o Arquivo</label>
                    </div>
                </div>
                <div class="input-group">
                    <textarea class="form-control" id="desc" placeholder="Descreva o que está acontencendo"></textarea>
                </div>
                <div class="botao">
                <a href="./"><button type="button" class="btn btn-primary">Registrar Denúncia</button></a>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Denunciar
