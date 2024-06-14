import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section>
      <div className="row-wrap" style={{width: '80%',margin: 'auto' }}>
        <div className="col">
          <div className="overlay-image">
            <a href="HTML/men.html">
              <img className="image" src="./Images/img-men6.jpg" alt="Alt text" />
              <div className="normal">
                <div className="text">MEN</div>
              </div>
              <div className="hover">
                <img
                  className="image"
                  src="./Images/img-Nike12.jpg"
                  alt="Alt text hover"
                />
                <div className="text">MEN</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="overlay-image">
            <a href="HTML/women.html">
              <img
                className="image"
                src="./Images/img-women5.jpeg"
                alt="Alt text"
              />
              <div className="normal">
                <div className="text">WOMEN</div>
              </div>
              <div className="hover">
                <img
                  className="image"
                  src="./Images/img-women6.jpeg"
                  alt="Alt text hover"
                />
                <div className="text">WOMEN</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="overlay-image">
            <a href="HTML/women.html">
              <img
                className="image"
                src="./Images/img-women5.jpeg"
                alt="Alt text"
              />
              <div className="normal">
                <div className="text">WOMEN</div>
              </div>
              <div className="hover">
                <img
                  className="image"
                  src="./Images/img-women6.jpeg"
                  alt="Alt text hover"
                />
                <div className="text">WOMEN</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="overlay-image">
            <a href="HTML/women.html">
              <img
                className="image"
                src="./Images/img-women5.jpeg"
                alt="Alt text"
              />
              <div className="normal">
                <div className="text">WOMEN</div>
              </div>
              <div className="hover">
                <img
                  className="image"
                  src="./Images/img-women6.jpeg"
                  alt="Alt text hover"
                />
                <div className="text">WOMEN</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="preview">
      <h2 style={{textAlign:'center'}}>Best Sellers</h2>
      <div
        className="row"
        style={{ width: '80%', margin: 'auto' }}
      >
        <figure className="item">
          <a href="HTML/info.html">
            <img src="./Images/img-Nike1.jpg" alt="" width="100%" />
            <figcaption>Nike Run +</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="HTML/info.html">
            <img src="./Images/img-Nike3.jpg" alt="" width="100%" />
            <figcaption>Nike Air Blue</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="HTML/info.html">
            <img src="./Images/img-Nike5.jpg" width="100%" />
            <figcaption>Casual Nike</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="HTML/info.html">
            <img src="./Images/img-Nike10.jpg" alt="" width="100%" />
            <figcaption>Nike Air Orange</figcaption>
          </a>
        </figure>
      </div>
    </section>
    
    </main>  
);
}
