// import React from "react";
import './QuemSomos.css'

function QuemSomos() {
  return (
  <>
      <section className='section1'>
          <div className='quem-somos'>
            <h1>Criando um ciclo positivo de impacto social.</h1>
            <hr className='linha-hr' />
            <p>Somos uma plataforma que conecta pessoas em situação de 
            vulnerabilidade alimentar com restaurantes e doadores dispostos a 
            ajudar. Qualquer pessoa pode fazer uma doação de uma quantia qualquer ou pagar por refeições em restaurantes parceiros, que serão  
            destinadas a quem mais precisa.</p>
            <button>SAIBA MAIS</button>
          </div>
      </section> 
      <section className='section2'>
          <div className='nossa-missao'>
            <h1>NOSSA MISSÃO</h1>
            <p>Nossa missão é <strong>conectar generosidade e necessidade</strong>, proporcionando refeições solidárias para <br/>
            pessoas em situação de vulnerabilidade alimentar. Através de <strong>parcerias com restaurantes e <br/>
            doadores</strong>, promovemos dignidade, inclusão e um ciclo de impacto social positivo.</p>
          </div>
          <div className='nossa-visao'>
            <h1>NOSSA VISÃO</h1>
            <p>Criar um mundo onde <strong>cada pessoa tenha acesso a refeições nutritivas e dignas</strong>, promovendo<br/>
              uma cultura de generosidade e colaboração entre indivíduos, comunidades e negócios para ,<br/>
              <strong>combater a fome e a insegurança alimentar.</strong></p>
          </div>
          <div className='nossos-valores'>
            <h1>NOSSOS VALORES</h1>
          <div className='valores'>
            <div className='valores-dignidade'>
              <h3>DIGNIDADE</h3>
              <p>Promovemos o <strong> acesso a alimentos <br/>
              de forma respeitosa</strong>e inclusiva, <br/>
              sem discriminação</p>
            </div>
            <div className='valores-solidariedade'>
              <h3>SOLIDARIEDADE</h3>
              <p>Acreditamos no <strong>poder do cuidado <br/>
              ao próximo</strong> e na importância de <br/>
              apoiar quem mais precisa.</p>
            </div>
            <div className='valores-sustentabilidade'>
              <h3>SUSTENTABILIDADE</h3>
              <p>Trabalhamos para criar um <strong>impacto <br/>
              social duradouro</strong>, onde o combate <br/>
              à fome seja sustentável.</p>
            </div>
            <div className='valores-conexao'>
              <h3>CONEXÃO</h3>
              <p> <strong>Unimos doadores, restaurantes e <br/>
              beneficiários</strong> para fortalecer <br/>
              comunidades e criar laços de apoio.</p>
            </div>
            <div className='valores-transparencia'>
              <h3>TRANSPARÊNCIA</h3>
              <p>Mantemos um <strong>compromisso com a <br/>
              clareza</strong> e honestidade em todas as <br/>
              nossas ações e transações.</p>
            </div>
            <div className='valores-empoderamento'>
              <h3>EMPODERAMENTO</h3>
              <p>Criamos oportunidades para que <br/>
              <strong>todos participem ativamente</strong> na <br/>
              construção de um futuro sem fome.</p>
            </div>
          </div>
          </div>
    </section>
    <section className='section3'>
    <div className='sobre-transparencia'>
        <div className='transparencia'>
          <h1>TRANSPARÊNCIA</h1>
          <p>A ética e a transparência regem as nossas ações. Com foco <br/>
          nisto, estruturamos um Código de Ética e Conduta que <br/>
          inicia o nosso Programa de Integridade e permeia todas as <br/>
          nossas ações. A adesão a este programa é condição para o <br/>
          grupo de associados, conselheiros, cofundadores,<br/>
          colaboradores e terceiros.</p>
        </div>
      <div className='btn-transparencia'>
          <button id='btn-estatuto'>Estatuto Social</button>
          <button id='btn-praticas'>Práticas de Compliance</button>
          <button id='btn-codigo'>Código de Ética</button>
      </div>
    </div>
    <div className="sobre-relatorio">
      <div className='relatorio-anual'>
        <h1>RELATÓRIO <br/>ANUAL <br/> 2024</h1>
        <p>Esse material é reflexo do nosso <strong>compromisso de <br/> transparência com nossos parceiros, parcerias e com a <br/> sociedade.</strong> Leia o relatório anual completo e conheça de <br/> perto o impacto do nosso trabalho.</p>
        <div className='btn-relatorio'>
        <button>Acesse</button>
        </div>
      </div>
    </div>
    </section>  
  </>
  )
}

export default QuemSomos;
