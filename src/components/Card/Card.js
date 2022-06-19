import { useState } from "react";

import styles from "./Card.module.css";

const Card = () => {
  const [products, setProducts] = useState([]);

  setTimeout(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/produto");
      const json = await res.json();
      setProducts(json.produtos);
    };

    fetchData();
  }, 1000);

  const flecha = (
    <img className={styles.flecha} src="flecha.png" alt="flecha" />
  );

  return (
    <>
      {products.map((product) => {
        const porcentagemAtual =
          (product.quantity * 100) / product.quantityTotal;
        return (
          <div className={styles.card}>
            <h1>{product.name}</h1>
            <h3>{`Quantidade Total: ${product.quantityTotal}`}</h3>
            <div className={styles.info}>
              <h4 className={styles.dispo}>Disponibilidade</h4>
              <div className={styles.box}>
                <div className={styles.line_green}>
                  {porcentagemAtual >= 85 && porcentagemAtual <= 100
                    ? flecha
                    : null}
                </div>
                <div className={styles.line_green}>
                  {porcentagemAtual >= 70 && porcentagemAtual < 85
                    ? flecha
                    : null}
                </div>
                <div className={styles.line_green}>
                  {porcentagemAtual >= 60 && porcentagemAtual < 70
                    ? flecha
                    : null}
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.line_yellow}>
                  {porcentagemAtual >= 50 && porcentagemAtual < 60
                    ? flecha
                    : null}
                </div>
                <div className={styles.line_yellow}>
                  {porcentagemAtual >= 40 && porcentagemAtual < 50
                    ? flecha
                    : null}
                </div>
                <div className={styles.line_yellow}>
                  {porcentagemAtual >= 30 && porcentagemAtual < 40
                    ? flecha
                    : null}
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.line_red}>
                  {porcentagemAtual >= 20 && porcentagemAtual < 30
                    ? flecha
                    : null}
                </div>
                <div className={styles.line_red}>
                  {porcentagemAtual >= 10 && porcentagemAtual < 20
                    ? flecha
                    : null}
                </div>
                <div className={styles.line_red}>
                  {porcentagemAtual >= 0 && porcentagemAtual < 10
                    ? flecha
                    : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
