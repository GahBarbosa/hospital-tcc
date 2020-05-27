import React from "react";
// import "assets/css/styleFAQ.css";
import "assets/js/util.js"; 
import "assets/js/main.js"; 

class Faq extends React.Component {

render() {
    return (
<>
<header class="cd-header flex flex-column flex-center">
  <div class="text-component text-center">
    <h1>Duvidas Frequentes</h1>
    <p>👈 <a class="cd-article-link" href="https://codyhouse.co/gem/css-faq-template"><font color="white">Voltar para a home </font> </a></p>
  </div>
</header>

<section class="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
	<ul class="cd-faq__categories">
		<li><a class="cd-faq__category cd-faq__category-selected truncate" href="#basics">Uso de medicamentos</a></li>
		<li><a class="cd-faq__category truncate" href="#mobile">Uso de vacina</a></li>
		<li><a class="cd-faq__category truncate" href="#account">Requisitos básicos</a></li>
		<li><a class="cd-faq__category truncate" href="#payments">Pós-doação</a></li>
		<li><a class="cd-faq__category truncate" href="#privacy">Doação de Hemácias </a></li>
		<li><a class="cd-faq__category truncate" href="#delivery">Sobre a Instituição</a></li>
	</ul> 

	<div class="cd-faq__items">
		<ul id="basics" class="cd-faq__group">
			<li class="cd-faq__title"><h2>USO DE MEDICAMENTOS</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Quem estiver fazendo tratamento com antibiótico pode doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p><h4>Se o antibiótico for para infecções simples e sem complicações, o doador deve aguardar 15 dias após a última dose do antibiótico para doar sangue. Infecções mais graves como pneumonia, meningite, entre outras, podem necessitar de um tempo maior para liberação do candidato à doação.</h4></p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Quem estiver fazendo tratamento com anti-inflamatório pode doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Dependendo do motivo, a doação pode ser realizada normalmente. Não se esqueça de informar o nome do anti-inflamatório que você está tomando.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Quem estiver fazendo tratamento homeopático pode doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Sim, mas depende do motivo.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Quem tomou analgésico pode doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Pode, mas é importante que no dia da doação o doador esteja sem sintomas.</p>
          </div>
				</div> 
			</li>
		</ul> 

		<ul id="mobile" class="cd-faq__group">
			<li class="cd-faq__title"><h2>USO DE VACINA</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Tomei vacina para Hepatite B. Posso doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>A vacinação para Hepatite B impede a doação por 48 horas.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Tomei vacina para febre amarela. Posso doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Após 4 semanas.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Tomei vacina para gripe. Posso doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Após 48 horas.</p>
          </div>
				</div> 
			</li>
		</ul> 

		<ul id="account" class="cd-faq__group">
			<li class="cd-faq__title"><h2>Requisitos básicos</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Qual idade posso doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Ter entre 16 e 69 anos, desde que a primeira doação tenha sido feita até 60 anos.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Qual o peso minino para posso doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Pesar no mínimo 50kg.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Devo estar descansado para doar sangue?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Sim.Ter dormido pelo menos 6 horas nas últimas 24 horas.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Quais documentos devo levar?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Documento original com foto recente, que permita a identificação do candidato, emitido por órgão oficial (Carteira de Identidade, Cartão de Identidade de Profissional Liberal, Carteira de Trabalho e Previdência Social, Carteira Nacional de Habilitação e RNE-Registro Nacional de Estrangeiro*).</p>
          </div>
				</div> 
			</li>
		</ul> 

		<ul id="payments" class="cd-faq__group">
			<li class="cd-faq__title"><h2>Pós-doação</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Devo tirar o curativo após a doação?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Mantenha o curativo no local da agulha por, no mínimo, 4 horas. Se você notar que o local voltou a sangrar, aplique uma pressão sobre o local por 2-5 minutos e então troque a curativo, mantendo-o por mais 4 horas.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Caso eu queria que descartem o sangue doado, o que eu faço?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Se você acha que existe uma razão pela qual o seu sangue não deve ser utilizado para transfusão e você não pode ou não quis dizer isto durante a doação,  entre em contato o mais breve possível com a Pró-Sangue e solicite que seu sangue seja descartado. O descarte será totalmente confidencial. Isto é de grande importância para a segurança da transfusão do sangue que você doou e dos pacientes que recebem seu sangue.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Caso eu sinta algum desconforto após doar sangue, o que fazer?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p> Se, após deixar o banco de sangue, você sentir mal-estar, tontura, fraqueza e sensação de que vai desmaiar, sente-se em qualquer local e coloque a cabeça entre os joelhos ou então, deite imediatamente no chão com as pernas elevadas. Estas medidas evitam quedas da própria altura e aumentam a circulação de sangue na cabeça, aliviando rapidamente os sintomas.</p>
          </div>
				</div> 
			</li>
		</ul> 

		<ul id="privacy" class="cd-faq__group">
			<li class="cd-faq__title"><h2>Doação de Hemácias</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Por que doar duplo concentrado de hemácias por aférese?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Trata-se de uma boa maneira de manter os estoques de hemácias para os hospitais e pacientes que necessitam das bolsas de sangue para transfusão, oferecendo ao mesmo tempo maior eficácia. Através dessa forma de doação, é possível obter uma quantidade maior de hemácias a partir de uma única doação. Isso se torna bem útil, principalmente quando há necessidade de sangue fator RH negativo, que apresenta menor prevalência na população brasileira.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Como é feita a doação de duplo concentrado de hemácias por aférese?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>É muito simples. Através de uma punção, o sangue é aspirado para um circuito descartável, instalado no interior de um equipamento, no qual ocorrerá a separação do sangue nos seus diversos componentes. O equipamento irá reter apenas parte das hemácias, devolvendo para o doador as células restantes, plasma, glóbulos brancos e plaquetas. Todo o processo dura cerca de 30 minutos.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Doar duplo concentrado de hemácias é seguro?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Sim, é inteiramente seguro. Não existe nenhum risco de adquirir qualquer doença infecciosa através da doação de sangue ou de duplo concentrado de hemácias. Todo o material utilizado nas doações é estéril, descartável e de uso único. Ou seja, é utilizado apenas para a sua doação. Além disso, o organismo demora cerca de um mês para repor as hemácias doadas. Contudo, de acordo com as normas de segurança para a doação de duplo concentrado de hemácias, o intervalo para uma nova doação é um pouquinho maior: 120 dias para homens, e 180 dias para mulheres. Passado esse período, você estará apto para fazer nova doação.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Quem pode doar duplo concentrado de hemácias?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Os mesmos requisitos exigidos para doação de sangue também são aplicados para a doação de duplo concentrado de hemácias por aférese. A única restrição que se faz é que o doador tenha peso acima de 70 quilos e o teste de anemia, que é feito no dia da doação, apresente valores mais elevados que os aplicados para as doações regulares de sangue.</p>
          </div>
				</div> 
			</li>
		</ul> 

		<ul id="delivery" class="cd-faq__group">
			<li class="cd-faq__title"><h2>Sobre a Instituição</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Como atualizo a quantidade de sangue existente na minha instituição</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Após efetuar o login, voce é direcionado para uma tela onde voce pode atualizar a quantidade de sangue existe na sua instituição.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Como Atualizo os dados da minha instituição</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Após efetuar o login, voce é direcionado para uma tela onde voce pode atualizar suas informações.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Onde efetuo o login?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Na pagina home basta clickar no botão chamado "Ë uma instituição" e la voce precisará digitar e-mail e senha</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Onde Cadastro minha instituição?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Na pagina home basta clickar no botão chamado "Ë uma instituição" e selecionar a opção "não tenho cadastro".</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Por que devo atualizar a quantitade de sangue existente no meu banco de sangue? </span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Pois assim o doador irá saber qual instituição precisará mais do seu tipo sanguinio.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Voces tem telefone para contato?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Não, mas voce pode entrar em contato pelo nosso e-mail de suporte suporte@bancodesangueintegrado.com.br</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Caso precise de um suporte para cadastrar minha instituição de sangue, com quem devo falar?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Voce pode entrar em contato atraves do nosso e-mail de suporte suporte@bancodesangueintegrado.com.br</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Posso alterar minha senha?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Sim, basta voce ir na pagina gerenciamento da conta e trocar sua senha.</p>
          </div>
				</div> 
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Será cobrado algum valor da instituição cadastrada?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Não, será 100% gratuito.</p>
          </div>
				</div> 
			</li>
		</ul> 
	</div> 

	<a href="#0" class="cd-faq__close-panel text-replace">Close</a>
  
  <div class="cd-faq__overlay" aria-hidden="true"></div>
</section> 
</>
        );
    }
}

export default Faq;