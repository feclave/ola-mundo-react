import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function SobreMim () {
    return (
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre Mim"
            >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Felipe.
                </h3>

                <img
                    src={fotoSobreMim}
                    alt='Foto de Felipe.'
                    className={styles.fotoSobreMim}
                />
                <p className={styles.paragrafo}>Sou um cirurgião dentista em transição de carreira para a área de tecnologia, impulsionado por uma paixão crescente por sistemas de informação. Atualmente dedico-me ao aprendizado de linguagens como Java, Python e SQL, construindo uma base sólida em minha carreira.</p>
                
                <p className={styles.paragrafo}>Minha experiência prévia me proporcionou o desenvolvimento de soft skills imprescindíveis para o mercado de trabalho, como o comprometimento e foco em entregas de alta qualidade. Atributos que busco aplicar na criação de soluções tecnológicas eficazes.</p>

                <p className={styles.paragrafo}>Aberto a conexões e oportunidades na área de análise e desenvolvimento de sistemas.</p>
            </PostModelo>

    )
}