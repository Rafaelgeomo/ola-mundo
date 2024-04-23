import styles from './SobreMim.module.css';
import PostModelo from "Componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';



export default function SobreMim(){
  return (
    <PostModelo  
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >

     <h2 className={styles.subtitulo}>
        Olá, eu sou Rafael Jeronymo!
     </h2>

     <img 
        src={fotoSobreMim}
        alt='Foto do Rafael '
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>Aprendiz de Código e Aventureiro Digital</p>
      <p className={styles.paragrafo}>
      E aí, pessoal! Me chamo Rafael Jeronymo e sou um cara que trabalhou por 17 anos na área de publicidade em outdoors. Agora tô mudando de ares e me aventurando no mundo da programação.
      </p>
      <p className={styles.paragrafo}>
      Tô no 4º semestre da faculdade de desenvolvimento de software e, apesar de ter me formado em Logística, tô focado em seguir nessa nova área que tanto me encanta.
      </p>
      <p className={styles.paragrafo}>
      Tenho feito vários cursos legais, como lógica de programação, HTML5, CSS3 e JavaScript. E agora tô começando a me aprofundar em React, onde tô aprendendo um montão de coisas novas.
      </p>
      <p className={styles.paragrafo}>
      Tô super animado com as possibilidades que a programação oferece e tô sempre em busca de desafios e oportunidades para continuar aprendendo e crescendo nessa área.
      </p>
     
    </PostModelo>
  )
}