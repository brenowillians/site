
import ShortPersonalData from "@/components/short-personal-data";
import styles from "../styles/my-data.module.css"
import React, { Fragment, useState } from "react"
import ShortAddress from "@/components/short-address";
import { useContextUser } from "@/hooks/useContextUser";

                     

export default function MyData() {
    const context = useContextUser()
    const [selectedComponent, setSelectedComponent]= useState<string | null>(null)        

    return (
        
    <section className={styles.items}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3>Meu Cadastro</h3>
          <hr />
          <div><a href='#' onClick={()=> setSelectedComponent('personal-data')}>Informações Pessoais</a></div><br />
          <div><a href='#' onClick={()=> setSelectedComponent('addresses')}>Endereços</a></div><br />
          <div><a href='#'>Meios de Pagamento</a></div><br />
          <div><a href='#'>Meus Pedidos</a></div><br />
          <div><a href='#' onClick={()=> context.logout()}>Sair</a></div><br />

        </div>
        <div  className={styles.col2}>
          
        <div className={styles.items2}>
        
          { selectedComponent === 'personal-data' && <ShortPersonalData/>}
          { selectedComponent === 'addresses' && <ShortAddress/>}
     
        </div>
        </div>
      </div>
      </section>
    
)
}