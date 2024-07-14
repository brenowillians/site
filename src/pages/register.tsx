import styles from "../styles/register.module.css";
export default function cadastro() {

    return ( 
    <form>
        <div id="conteudo">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.row}>
              <div id="coluna2" className={styles.column}>
                  Nome Completo<br/>
                  <input type="text"
                  id="nome"
                  name="nome" 
                  placeholder="Seu Nome"></input>
              </div>
              <div id="coluna2" className={styles.column}>
                CPF<br/>
                <input type="text" 
                id="cpf" 
                name="cpf" 
                placeholder="Nº do CPF"></input>
              </div>
            </div>
            <div className={styles.row}>
              <div id="coluna2" className={styles.column}>
                RG
                <input type="text" id="rg" name="rg"></input> 
              </div>
              <div id="coluna2" className={styles.column}>
                Sexo
                  <select id="sexo" 
                  name="sexo">
                    <option value="Selecione o sexo">Selecione</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                  </select>
              </div>
            </div>
            <div className={styles.row}>
              <div id="coluna2"  className={styles.column}>
                  E-mail
                  <input type="text" 
                  id="email" 
                  name="email"
                  placeholder=""></input>
              </div>
              <div id="coluna2"  className={styles.column}>
                  Celular
                <input type="text" 
                  id="celular" 
                  name="celular" 
                  placeholder="preenchemento obrigatório">
                </input>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                CEP
                <input type="text" 
                id="cep" 
                name="cep"
                placeholder=""></input>                
              </div>
              <div className={styles.column}>
                Estado
                <select id="Estado">
                    <option value="Estado">Selecione</option>
                    <option value="Estado">Acre</option>
                    <option value="Estado">Alagoas</option>
                    <option value="Estado">Amapá</option>
                    <option value="Estado">Amazonas</option>
                    <option value="Estado">Bahia</option>
                    <option value="Estado">Ceará</option>
                    <option value="Estado">Distrito Federal</option>
                    <option value="Estado">Espírito Santo</option>
                    <option value="Estado">Goiás</option>
                    <option value="Estado">Maranhão</option>
                    <option value="Estado">Mato Grosso</option>
                    <option value="Estado">Mato Grosso do Sul</option>
                    <option value="Estado">Minas Gerais</option>
                    <option value="Estado">Pará</option>
                    <option value="Estaod">Paraibá</option>
                    <option value="Estado">Pernambuco</option>
                    <option value="Estado">Piauí</option>
                    <option value="Estado">Rio de Janeiro</option>
                    <option value="Estado">Rio Grande do Norte</option>
                    <option value="Estado">Rio Grande do Sul</option>
                    <option value="Estado">Rondônia</option>
                    <option value="Estado">Roraima</option>
                    <option value="Estado">Santa Catarina</option>
                    <option value="Estado">São Paulo</option>
                    <option value="Estado">Sergipe</option>
                    <option value="Estado">Tocantins</option>
                </select>
              </div>
            </div>           
            <div className={styles.row}>
              <div className={styles.column}>
                Endereço
                    <input type="text" 
                    id="rua" 
                    name="rua" 
                    placeholder="Preenchimento obrigatório"></input>
              </div>
              <div className={styles.column}>
                Número
                  <input type="text" 
                  id="numero" 
                  name="numero" 
                  placeholder="Preenchimento obrigatório"></input>
              </div>
            </div>
            <div className={styles.row}>
              <div id="coluna2" className={styles.column}>
                    Complemento
                    <input type="text" 
                    id="numero" 
                    name="numero" 
                    placeholder=""></input>
              </div>
              <div id="coluna2" className={styles.column}>
                Cidade
                <input type="text" 
                id="cidade" 
                name="cidade"></input>


              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column2}>
                <br/>
                <input type="submit"
                  //onclick="validar()"
                  value="Enviar"></input>
                  <br></br>
                  <p>Já possui cadastro? <a href="/login">Faça login</a></p>
              </div>
            </div>

          </div>
           </form>
         
                     

)}