import Cabecalho from '../../components/cabecalho';
import './index.css'
import { Link } from "react-router-dom";


export default function Eventos() {

    function clicounalabel() {
        alert('Clicou na label')
    }

    function clicounoBotao() {
        alert('Clicou no botão')
    }

    function passouMouse(){
        alert('Passou o mouse')
    }

    function mudouTexto(e) {
        let valor  = e.target.value;
        alert('Mudou a letra: ' + valor)
    }

    function mudoucheckbox(e) {
        let valor = e.target.checked;
        alert('Mudou a checkbox para: ' + valor)
    }

    function mudouselect(e) {
        let valor = e.target.value;
        alert('Mudou o select para: ' + valor)
    }

    return (
        <div className='page-contato'>
            <Cabecalho titulo="Eventos" />

            <main>
                <h1> Evento onClick() </h1>

                <p>
                    <label onClick={clicounalabel}>Clique na Label</label>
                </p>
                <p>
                    <button onClick={clicounoBotao}>Clique no botão</button>
                </p>

                <hr />

                <h1> Evento onMouseMove() </h1>

                <p>
                    <img src="/ti.jpg" alt="" onMouseMove={passouMouse}/>
                </p>


                <hr />

                <h1> Evento onChange() </h1>

                <h3>Input:Text</h3>
                <p>
                    <input type='text' onChange={mudouTexto}/>
                </p>
                <p>
                    -
                </p>

                <hr />

                <h3>Input:Checkbox</h3>
                <p>
                    <input type='checkbox' onChange={mudoucheckbox}/>
                </p>
                <p>
                    -
                </p>

                <hr />

                
                <h3>Select</h3>
                <p>
                    <select onChange={mudouselect}>
                        <option>Selecione</option>
                        <option>Item A</option>
                        <option>Item B</option>
                        <option>Item C</option>
                    </select>
                </p>
                <p>
                    -
                </p>
                
            </main>
            
        </div>
    )
}