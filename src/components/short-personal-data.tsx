import { useContextUser } from "@/hooks/useContextUser";
import { Fragment } from "react";
import styles from "../styles/shipping.module.css";
export default function ShortPersonalData() {

    const context = useContextUser()

    return ( 
        <div>
        {context.user &&
                <Fragment>
                  <div className={styles.card}>
                  <h3>Dados Pessoais</h3>
                    <p>{context.user.login}</p>
                    <p><strong>Nome</strong></p>
                    <p>{context.user.name}</p>
                    <p><strong>Telefone</strong></p>
                    <p>{context.user.mobile}</p>
                    <p><strong>CPF</strong></p>
                    <p>{context.user.cpf}</p>
                  </div>
                </Fragment>
            }
            </div>
    )
}