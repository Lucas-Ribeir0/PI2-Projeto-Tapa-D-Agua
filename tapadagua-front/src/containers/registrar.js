import "./registro.css"
import {Link} from 'react-router-dom'
import "../components/viaCEP"

const Registrar = () => {
    return(
        <div className="formRegistro">
            <div className="topo">
                <h4>Cadastro</h4>
            </div>
            <div className="insideRegistro">
                <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" id="nome" placeholder="Nome" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="sobrenome">Sobrenome</label>
                    <input type="text" class="form-control" id="sobrenome" placeholder="Sobrenome" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Senha</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="celular">Celular</label>
                    <input type="text" class="form-control" id="celular" placeholder="Celular" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="telefone">Telefone</label>
                    <input type="text" class="form-control" id="Telefone" placeholder="(99) 99999-9999" />
                    </div>
                </div>
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
    )
}

export default Registrar