import { useContextUser } from "@/hooks/useContextUser";
import { Fragment, useState } from "react";
import styles from "../styles/shipping.module.css";
import { DataUserAddress } from "@/types/data-user-address";
export default function ShortAddress() {

    const context = useContextUser()
    const [selectedAddress, setSelectedAddress] = useState<number>()
    const [editAddress, setEditAddress] =useState<DataUserAddress | null>(null)

    return ( 
        <div>
        {context.user &&
                <Fragment>
                  <div className="short-address-edit"  hidden={!editAddress}>
                    <div className="short-cart-header">
                      <div style={{width:"90%"}}>Editar Endereço</div>
                      <div style={{width:"10%", cursor:"pointer"}} onClick={() => setEditAddress(null)}>X</div>
                    </div>
                    <div className={styles.row}>
                      <div id="coluna2" className={styles.column}>
                          Rua<br/>
                          <input style={{width:"90%"}} type="text"
                          id="rua"
                          value={editAddress?.street}
                          name="rua" ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                        Número<br/>
                        <input style={{width:"90%"}} type="text" 
                        id="numero" 
                        value={editAddress?.number}
                        name="numero" 
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                        Cidade<br/>
                        <input style={{width:"90%"}} type="text" 
                        id="cidade" 
                        value={editAddress?.city}
                        name="cidade" 
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                        Estado<br/>
                        <input style={{width:"90%"}} type="text" 
                        id="Estado" 
                        value={editAddress?.state}
                        name="Estado" 
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                        País<br/>
                        <input style={{width:"90%"}} type="text" 
                        id="país" 
                        value={editAddress?.country}
                        name="país" 
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                        CEP<br/>
                        <input style={{width:"90%"}} type="text" 
                        id="cep" 
                        value={editAddress?.zipCode}
                        name="cep" 
                        ></input>
                      </div>
                    </div>
                  </div>
                  <h3 style={{marginLeft:"20px"}}>Entrega</h3>
                   {context.user.userAddresses && context.user.userAddresses.map((address, index) => (
                    <div className={styles.card}>
                      <p>
                        <input 
                          style={{marginRight:"10px"}} 
                          type="radio" 
                          id="address" 
                          value={address.idAddress}
                          onClick={()=> setSelectedAddress(address.idAddress)}
                          checked={address.idAddress == selectedAddress}
                        />
                      {address.street}, {address.number}</p>                
                      <p>{address.city} - {address.state} - {address.country}</p>  
                      <p>{address.zipCode}</p>
                      <div className={styles.buttonCheckout} style={{width:"120px"}}> <a href="#" onClick={() => setEditAddress(address)}>Modificar</a>    
                      </div>
                    </div>
                  ))}
                </Fragment>
            }
            
            </div>
    )
}