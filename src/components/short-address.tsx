import { useContextUser } from "@/hooks/useContextUser";
import { Fragment, useEffect, useState } from "react";
import styles from "../styles/shipping.module.css";
import { DataUserAddress } from "@/types/data-user-address";
export default function ShortAddress() {

    const context = useContextUser()
    const [selectedAddress, setSelectedAddress] = useState<number>()
    const [editAddress, setEditAddress] =useState<DataUserAddress | null>(null)
    

    const saveAddress =()=>{
      //Salvar endereço
      if(editAddress){
        //Verificar se o endereço que estamos editando, é o mesmo
        //que está no selectedAddress.
        //caso positivo, atualizar o state editAddress como primary

        //LEMBRAR que o state é imutável...

        if(editAddress.idAddress){
          context.updateAddress(editAddress)
        }
        else{
          context.createAddress(editAddress)
        }
        
        setEditAddress(null)
      }

    }

    useEffect (()=>{

    },[])

    const handleAddress =(e: any)=>{
        const newAddress = {...editAddress}
        const { name, value } = e.target;
        if(name=="primary"){
          if(e.target.value=="0"){
            newAddress.primary=1
          }
          else{
            newAddress.primary=0
          }
        }
        else{
          console.log(e.target.value)
          newAddress[name as keyof typeof newAddress] = e.target.value
        }
        console.log(newAddress)
        setEditAddress(newAddress as DataUserAddress)
    }
    return ( 
        <div>
        {context.user &&
                <Fragment>
                  <div className="short-address-edit"  hidden={!editAddress}>
                    <div className="short-cart-header">
                      <div style={{width:"90%"}}><strong>{editAddress?.idAddress?'Editar' : 'Cadastrar'} Endereço</strong></div>
                      <div style={{width:"10%", cursor:"pointer"}} onClick={() => setEditAddress(null)}>X</div>
                    </div>
                    <div className={styles.row}>
                      <div id="coluna2" className={styles.column}>
                      <strong>Tipo</strong><br/>
                      <select style={{width:"90%"}} 
                        id="idAddressType" 
                        value={editAddress?.idAddressType}
                        name="idAddressType" 
                        onChange={handleAddress}
                      >
                        {context.addressTypes && context.addressTypes.map((addressType, index) =>
                          <option key={index} value={addressType.idAddressType}>{addressType.description}</option>
                        )}
                      </select>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div id="coluna2" className={styles.column}>
                      <strong>Rua</strong><br/>
                        <input style={{width:"90%"}} type="text"
                          id="street"
                          name="street"
                          onChange={handleAddress}
                          value={editAddress?.street}
                        />
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                      <strong>Número</strong><br/>
                        <input style={{width:"90%"}} type="text" 
                        id="number" 
                        value={editAddress?.number}
                        name="number" 
                        onChange={handleAddress}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                      <strong> Cidade</strong><br/>
                        <input style={{width:"90%"}} type="text" 
                        id="city" 
                        value={editAddress?.city}
                        name="city" 
                        onChange={handleAddress}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                      <strong>Estado</strong><br/>
                        <input style={{width:"90%"}} type="text" 
                        id="state" 
                        value={editAddress?.state}
                        name="state" 
                        onChange={handleAddress}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                      <strong>País</strong><br/>
                        <input style={{width:"90%"}} type="text" 
                        id="country" 
                        value={editAddress?.country}
                        name="country" 
                        onChange={handleAddress}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                      <strong> CEP</strong><br/>
                        <input style={{width:"90%"}} type="text" 
                        id="zipCode" 
                        value={editAddress?.zipCode}
                        name="zipCode" 
                        onChange={handleAddress}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                        <strong>Endereço Principal</strong>
                        <input style={{width:"90%"}} type="checkbox" 
                        id="primary" 
                        value={editAddress?.primary==1? 1: 0}
                        name="primary" 
                        onClick={handleAddress}
                        checked={editAddress?.primary==1}
                        ></input> 
                      </div>
                    </div>
                    
                    <div className={styles.row}>  
                      <div id="coluna2" className={styles.column}>
                        <a className={styles.buttonCheckout}  href="#" onClick={()=>saveAddress()}>Salvar</a>
                      </div>
                    </div>                    
                    
                  </div>

                  <h3 style={{marginLeft:"20px"}}>
                    Endereço de Entrega 
                    &nbsp;&nbsp;&nbsp;
                    <button 
                      id="remove" 
                      className={styles.remove} 
                      onClick={()=> setEditAddress({
                        idUserSite: context.user?.idUserSite ?? 0,
                        street: '' ,
                        number: '' ,
                        zipCode: '' ,
                        city: '' ,
                        state: '' ,
                        country: '' ,
                        idAddressType: 2,
                        primary: 1,
                      })}
                    >
                      <i className="fas fa-plus fa-1x"></i>
                    </button>
                  </h3>
                   {context.user.userAddresses && context.user.userAddresses.map((address, index) => (
                    <div className={styles.card}>
                      <p>
                        <input 
                          style={{marginRight:"10px"}} 
                          type="radio" 
                          id="address" 
                          value={address.idAddress}
                          onClick={()=> setSelectedAddress(address.idAddress)}
                          checked={address.idAddress == selectedAddress || address.primary==1}
                        />
                      {address.street}, {address.number}</p>                
                      <p>{address.city} - {address.state} - {address.country}</p>  
                      <p>{address.zipCode}</p>
                      <div style={{width:"120px"}}> <a className={styles.buttonCheckout} style={{position:"relative", top:"20px"}}  href="#" onClick={() => setEditAddress(address)}>Modificar</a>    
                      </div>
                    </div>
                  ))}
                </Fragment>
            }
            
            </div>
    )
}