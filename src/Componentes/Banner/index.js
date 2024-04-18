import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.apresetacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragrafo}>
        Seja bem-vindo ao meu espaço pessoal! Eu sou Rafael Jeronymo, um entusiasta estudante de desenvolvimento de software em busca de conhecimento e muito aprendizado. Aqui compartilho diversos conhecimentos e espero que você encontre algo novo e inspirador para sua jornada de aprendizado!
        </p>
      </div>

      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido} 
          src={circuloColorido} 
          aria-hidden={true}
          alt=''
        />

        <img 
          className={styles.minhaFoto}  
          src={minhaFoto}
          alt="Foto do Rafael com um copo na mão" 
        />

      </div>
    </div>
  )
}