

export default function Home() {
    return (
     <section>
     <div className="se-pre-con"></div>
     <section>
      <h1>Formulário para Candidatura</h1>
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
        <label htmlFor="Phone"
          >Telefone <input type="tel" name="" id="" placeholder="Phone" required
        /></label>
        <label htmlFor="Curriculo"
        >Curriculo
        <button type = "button" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => "openFile(e)"}> </button>
        <input type = "file" id = "btnFile"></input></label>
         
        <label htmlFor="Message"
          >Fale sobre Você<textarea
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
    </section>
)
}