import { Fragment, useState } from "react";
import styles from "../styles/shipping.module.css";
import router from "next/router";
import { useContextUser } from "@/hooks/useContextUser";
import { LoginParams } from "@/types/data-user";
export default function signin() {
    const context = useContextUser()
    const [ exibir, setExibir] = useState<boolean>(false)
    const [loginData, setLoginData] = useState<LoginParams>({
        login: "",
        password: ""
    })

    const fillLogin = (e: any)=>{
        const newLoginData = {...loginData}
        newLoginData.login = e.target.value
        setLoginData(newLoginData)
    }

    const fillPassword = (e: any) =>{
        const newLoginData = {...loginData}
        newLoginData.password = e.target.value
        setLoginData(newLoginData)
    }


    return (        
        
        <div >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Confirmar E-mail</h2>
            <p>Para confirmar a compra, informe seu e-mail:</p>
            <br></br>
            <div id="coluna2"  className={styles.column}>
                  E-mail
                  <input type="text" 
                  id="email" 
                  name="email"
                  onBlur={fillLogin}
                  placeholder=""></input>
              </div>
              <br></br>
              <input type="submit"
                  //onclick="validar()"
                  value="Validar" onClick={() =>setExibir(true)}></input>
                  <br></br>
              {exibir && 
              <Fragment>
                <div id="coluna2"  className={styles.column}>
                          Código
                          <input type="text" 
                          id="codigo" 
                          name="codigo"
                          onBlur={fillPassword}
                          placeholder=""></input>
                      </div>
                      <br></br>
                <input type="submit"
                  //onclick="validar()"
                  value="acessar" onClick={() =>context.login(loginData, () =>router.push('/shipping'))}></input>
            </Fragment>
              }
        </div>
        


    )}
