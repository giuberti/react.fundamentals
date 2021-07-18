import './app.css'
import React from 'react';

import Card from './layout/card';
import Primeiro from './lib/primeiro';
import ComParametro from './lib/comParametro';
import ComFilhos from './lib/comFilhos';
import Repeticao from './lib/repeticao';
import Condicional from './lib/condicional';


// eslint-disable-next-line
export default (props) => {
    return (
        <div className='app'>
            <Card titulo="#01 - Conteúdo Fixo">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="#02 - Parametros">
                <ComParametro titulo='Primeiro parametro' subTitulo='Segundo parametro'></ComParametro>
            </Card>
            <Card titulo="#03 - Herança simples">
                <ComFilhos>
                    <ul>
                        <li>primeiro filho</li>
                        <li>segundo filho</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repetição">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#05 - Condicional">
                <Condicional numero='21'></Condicional>
            </Card>
            {/* <Card titulo="Sexto Componente">
                
            </Card>
            <Card titulo="Setimo Componente">
                 */}
        </div>
    );
};