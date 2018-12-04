import React,{Fragment} from 'react';
import './index.css';

export default () => (
    <Fragment className="main">
        <div className="bgimg-1">
            <div className="caption">
                <span className="border">MOSTRAPOA 2019</span>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <h1 style={{textAlign:'center'}}>20ª Mostra de Pesquisa, Ensino e Extensão</h1>
            </div>
            <div className="col">
            <h4 style={{textAlign:'center'}}>Data do evento aqui</h4>
            </div>
        </div>

        <div className="bgimg-2">
            <div className="caption">
                <span className="border" >FOTO 2</span>
            </div>
        </div>

        <div class="card" style={{width: '50rem', margin:'0 auto', padding:'5rem'}}>
            <img class="card-img-top" src="ifrs.jpg" alt="Imagem de capa do card"/>
            <div class="card-body">
                <h5 class="card-title">Título do card</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link" style={{padding:'2rem'}}>Link do card</a>
                <a href="#" class="card-link">Outro link</a>
            </div>
        </div>

        <div className="bgimg-3">
            <div className="caption">
                <span className="border" >FOTO 3</span>
            </div>
        </div>

        <div style={{position:'relative'}}>
            <div style={{color:'#ddd', backgroundcolor:'#282E34', textalign:'center justify', padding:'50px 80px'}}>
                <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
        </div>

        <div className="bgimg-1">
            <div className="caption">
                <span className="border">INSCRIÇÕES EM BREVE.</span>
            </div>
        </div>
    </Fragment>
)