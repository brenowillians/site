import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderComponent from "@/components/header";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={{paddingTop:"55px"}}>
       <section>
       <h1>Sobre a Loja</h1>
       </section>
    
    <div className="row">
      <section className="mapouter col">
        <div className="gmap_canvas">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.393174601919!2d-81.57331492571747!3d28.377190395632475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7ee634caa5f7%3A0xa71e391fd01cf1a0!2sWalt%20Disney%20World%20Resort!5e0!3m2!1spt-BR!2sbr!4v1717352795034!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section id="about-us" className="col">
        <p>
          Downy Shoes was started back in 2007 by
          <strong>John Matthews</strong>, The team started producing shoes only
          in 2009. In addition to female and male, there is a children's line.
          Shoes of non-dull styles and rich colors immediately catch the eye.
        </p>
        <p>
          We are located in Nairobi, Kenya along Moi Avenue. <br />Being an
          official Nike partner, we sell their shoes at convenient prices. We
          focus on team-designed collaborations that appeal to our global
          community of global independents, creatives, and free-thinkers. We
          create shoes to reflect the unbound lives we live and don't stop until
          we get it right.
        </p>
        <h2>Missão</h2>
        <p>
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking sport
          innovations, by making our products more sustainably, by building a
          creative and diverse global team and by making a positive impact in
          communities where we live and work. We strive to keep our work unique
          and smart, with room for a little magic. You can find us in Nairobi,
          CBD, and if the project is the right fit, we’d love to work with you.
          Feel free to drop us a line, here.
        </p>
      </section>
    </div>
    <section>
      <h1>Nossa Equipe</h1>
      <div className="row">
        <figure>
          <img src="../Images/mundo-urso-pardo-20181227-002-copy-1.webp" alt="" />
          <figcaption>
            <h3>Fábio Ursão</h3>
            <p>
              C.E.O
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src="../Images/momoanew-64623d8d34898.jpg" alt="" />
          <figcaption>
            <h3>Breno Willians</h3>
            <p>Diretor</p>
          </figcaption>
        </figure>
      </div>
    </section>

    </main>
  )
}