import './App.css';
import VideoPlayer from './components/video-player/video-player';
import imagem from './exclusivo.png'
import { FaUnlock } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import Header from './components/header/header';
import ButtonSales from './components/button-sales/button-sales';

function App() {
  const [finishTimer, setFinishTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFinishTimer(true)
    }, 720000)
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <div className="text-container">
         <img src={imagem} className='desconto' />
      </div>
      <div className='video-container'>
        <VideoPlayer></VideoPlayer>
      </div>
      <div className='description'><FaUnlock className='unlock-icon'/> SEU ACESSO SERÁ LIBERADO NO FINAL DO VÍDEO </div>

      { finishTimer &&
      <ButtonSales></ButtonSales>
      }
      <div className='responsive-img-container'>
        <img className='image-social-prove ' decoding="async" src="https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14-481x1024.png" class="attachment-large size-large wp-image-1113" alt="" srcset="https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14-481x1024.png 481w, https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14-141x300.png 141w, https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14-768x1636.png 768w, https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14-721x1536.png 721w, https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14-962x2048.png 962w, https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14-600x1278.png 600w, https://vivendodeshopee.fun/wp-content/uploads/2023/09/28-Comentarios-14.png 1080w" sizes="(max-width: 481px) 100vw, 481px"></img>
      </div>

      <div className="text-footer-container">
          <div>Copyright 2023 - Shopee Cash <span className="copy">®</span></div>
          <div>Todos os direitos reservador</div>
          <div><a className="terms" href="https://help.perfectpay.com.br/article/61-temos-de-uso">Termos de Uso . Privacidade</a></div>
      </div>
    </div>
  );
}

export default App;
