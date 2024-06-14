

export default function Home() {
    return (
        <main style={{paddingTop:"55px"}}>
                  
            <section>
            <h1>Formulário para Contato</h1>
            <form action="">
                <span>
                <img src="../Images/img-DS.png" alt="Downy logo" height="50px" />
                DOWNY SHOES</span
                >
                <hr />
                <br />
                <label htmlFor="Name"
                >Nome Completo
                <input type="text" name="" id="" placeholder="Name" required
                /></label>
                <label htmlFor="Email"
                >Email <input type="email" name="" id="" placeholder="Email" required
                /></label>
                <label htmlFor="Message"
                >Mensagem<textarea
                    name="Message"
                    id=""
                    placeholder="Your Message"
                    required
                ></textarea>
                </label>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
            </section>


     </main>

    )

}