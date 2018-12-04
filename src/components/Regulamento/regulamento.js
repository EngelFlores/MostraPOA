import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export const Regulamento = () => (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    
                </div>
            </div>
            <div className="row cronograma">
                <div className="col-md-12">
               
			   <p>A <a href="http://aula.inf.poa.ifrs.edu.br/~evandro/mostrapoa/comissao.html">Comissão Organizadora</a> da 17ª Mostra de Pesquisa, Ensino e Extensão do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul - Campus Porto Alegre, no uso de suas atribuições, estabelece as diretrizes gerais deste evento, que se realizará nos dias 06 e 07 de outubro de 2016.</p>
			   
				<h2>1. Promoção e Organização do Evento</h2>			   
				<p>A 17ª MostraPoA - Mostra de Pesquisa, Ensino e Extensão do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul – Campus Porto Alegre é um evento promovido pelas Diretorias de Pesquisa e Inovação, Ensino e Extensão do IFRS - Campus Porto Alegre, sob organização da Comissão Organizadora do evento, designada pela Portaria nº 303, de 15 de julho de 2016.</p>

				<h2>2. Objetivos</h2>
				<p>O objetivo geral do evento é contribuir para a difusão do conhecimento produzido nas dimensões do ensino, da pesquisa e da extensão no âmbito das Instituições de Ensino Técnico e Superior (e de Pós-Graduação). São objetivos específicos da 17ª Mostra de Pesquisa, Ensino e Extensão do IFRS – Campus Porto Alegre:</p>
				<ul>
					<li>I.	Fomentar o interesse pela produção do conhecimento em todas as áreas de natureza tecnológica e humanística, nos âmbitos do ensino, da pesquisa e da extensão, com vistas à consolidação dos processos institucionais e interinstitucionais;</li>
					<li>II.	Incentivar o estudante a difundir os conhecimentos produzidos nos diversos espaços de formação escolar e acadêmica, com o intuito de promover a autonomia, bem como a postura crítica e investigativa, ampliando as possibilidades de colaboração e diálogo intra e interinstitucional;</li>
					<li>III.	Propiciar para a comunidade a divulgação da produção de conhecimento realizada nos âmbitos do ensino, da pesquisa e da extensão nos diversos cursos do IFRS, bem como das demais instituições de Ensino Técnico e/ou Superior;</li>
					<li>IV.	Possibilitar a integração do IFRS - Campus Porto Alegre com os demais Campus do IFRS e com outras instituições de Ensino Técnico e Superior, promovendo o intercâmbio de conhecimento e experiências;</li>
					<li>V.	Fomentar as discussões sobre a indissociabilidade ensino, pesquisa e extensão.</li>
				</ul>	
				
				
				<h2>3. Atribuições da Comissão Organizadora</h2>
				<p>São atribuições da Comissão Organizadora da 17ª Mostra de Pesquisa, Ensino e Extensão:</p>
				<ul>
					<li>I.	Elaborar o cronograma do evento;</li>
					<li>II.	Providenciar os recursos humanos e de estrutura necessários para a realização do evento;</li>
					<li>III.	Promover a divulgação do evento junto à comunidade acadêmica dos Institutos Federais e demais instituições de ensino técnico e superior;</li>
					<li>IV.	Coordenar as inscrições e homologar os resumos submetidos;</li>
					<li>V.	Designar os membros das Comissões de Avaliação dos Trabalhos;</li>
					<li>VI.	Coordenar a realização das atividades do evento;</li>
					<li>VII.	Providenciar a emissão de certificados e</li>
					<li>VIII.	Realizar a avaliação do evento.</li>
				</ul>
				
				<h2>4. Inscrições</h2>
				<p>A inscrição no evento deverá ser realizada através do site de gerenciamento de conferências do Campus PoA - PoaConf <a href="http://poaconf.poa.ifrs.edu.br/index.php/mostra/index/user/account">http://poaconf.poa.ifrs.edu.br/index.php/mostra/mostra/user/account</a>, conforme orientações do quadro seguinte:</p>
				
				<table className="table table-hover text-left">
					<tr>
						<th>MODALIDADE CANDIDATOS</th>
						<th>PRÉ-REQUISITOS</th>
						<th>PERÍODOS</th>
					</tr>
					
					<tr>
						<td><b>Primeiro autor</b> (apresentador do trabalho)</td>
						<td>Estudantes de cursos técnicos ou superiores (ou pós-graduação do IFRS) matriculados em instituições de ensino, em pelo menos um (1) semestre do ano de 2016 ou que concluíram o curso no segundo semestre de 2015. <span style={{color:'green'}}>No ato da inscrição e submissão, o autor principal cadastra os demais coautores</span>.</td>
						<td>Inscrição e submissão do resumo: 03 de agosto a <strike>18 de agosto</strike> <span style={{color:'green'}}>25 de agosto de 2016</span></td>
					</tr>
					
					<tr>
						<td><b>Coautor</b></td>
						<td>Estudantes de cursos técnicos ou superiores matriculados em instituições de ensino, em pelo menos um (1) semestre do ano de 2016 ou que concluíram o curso no segundo semestre de 2015.</td>
						<td>Inscrição: 03 de agosto a <strike>18 de agosto</strike> <span style={{color:'green'}}>25 de agosto de 2016</span></td>
					</tr>
					
					<tr>
						<td><b>Orientador</b></td>
						<td>Servidores (docentes ou técnicos-administrativos) que desenvolvam atividades de ensino, pesquisa e/ou extensão, nas respectivas instituições de ensino técnico e/ou superior.</td>
						<td>Inscrição: 03 de agosto a <strike>18 de agosto</strike> <span style={{color:'green'}}>25 de agosto de 2016</span></td>
					</tr>
					
					<tr>
						<td><b>Coorientador</b></td>
						<td>Servidores (docentes ou técnicos-administrativos) que desenvolvam atividades de ensino, pesquisa e/ou extensão, nas respectivas instituições de ensino técnico e/ou superior; ou profissionais vinculados a outras instituições não diretamente relacionadas com as atividades de ensino, tais como, empresas, associações, ONGs, e demais instituições públicas ou privadas.</td>
						<td>Inscrição: 03 de agosto a <strike>18 de agosto</strike> <span style={{color:'green'}}>25 de agosto de 2016</span></td>
					</tr>
					
					<tr>
						<td><b>Avaliador</b></td>
						<td>Servidores docentes, técnicos-administrativos (com formação mínima em nível superior) ou estudantes de pós-graduação vinculados a instituições de ensino técnico e/ou superior.</td>
						<td>Inscrição: 03 de agosto a 04 de setembro de 2016</td>
					</tr>
					
					<tr>
						<td><b>Voluntário</b></td>
						<td>Alunos do IFRS.</td>
						<td>Inscrição: 03 de agosto a 04 de setembro de 2016</td>
					</tr>
					
					<tr>
						<td><b>Ouvinte</b></td>
						<td>Público em geral</td>
						<td>Inscrição: 03 de agosto a 04 de setembro de 2016</td>
					</tr>
					
				</table>
				
                <p>O <b>primeiro autor</b> é responsável por submeter o trabalho (já revisado pelo Orientador) e deverá ser também o seu apresentador. Para a submissão do trabalho pelo primeiro autor, todos os demais integrantes do trabalho  deverão ser incluídos no momento da submissão - etapa 3. INCLUSÃO DE METADADOS, botão "Incluir Autor" (no link <a href="http://poaconf.poa.ifrs.edu.br/index.php/mostra/mostra/user/account">http://poaconf.poa.ifrs.edu.br/index.php/mostra/mostra/user/account</a>). A submissão do trabalho implica a concordância de todos os integrantes.</p>
				<p>O <a href="http://poaconf.poa.ifrs.edu.br/index.php/mostra/mostra/login?source=%2Findex.php%2Fmostra%2Fmostra%2Fauthor%2Fsubmit%3FrequiresAuthor%3D1">envio de trabalhos</a> deve ser realizado por meio do site do site <a href="http://poaconf.poa.ifrs.edu.br/index.php/mostra/mostra">PoaConf</a> (Gerenciador de Conferências) no período de 03 a 18 de agosto de 2016.</p>
				<p>Os voluntários são alunos do IFRS que irão atuar na organização e realização da 17ª Mostra de Pesquisa, Ensino e Extensão juntamente com a Comissão Organizadora.</p>
				<p>No primeiro dia do evento todos os inscritos deverão se dirigir até o <b>local de credenciamento</b> da 17ª Mostra de Pesquisa, Ensino e Extensão para confirmação da inscrição, registro de presença e retirada de materiais.</p>

		
				<h2>5. Trabalhos</h2>
				<p>Os trabalhos serão apresentados exclusivamente por estudantes. Cada estudante poderá apresentar somente um (1) trabalho por modalidade (oral e pôster), mas poderá participar de outros trabalhos, independentemente da modalidade, como coautor.</p>
				<p>Cada trabalho deverá ser inscrito de acordo com sua área temática, categoria, modalidade de apresentação e nível de ensino (técnico ou superior) do apresentador do trabalho.</p>
				<p>Cada trabalho poderá ter a participação de <b>até 5 (cinco) alunos, 1 (um) orientador e 1(um) coorientador</b> (se houver).</p>
				
				<h3>5.1 Áreas Temáticas</h3>
					<ul>
						<li>I. Ciências Exatas e da Terra;</li>
						<li>II. Ciências Biológicas;</li>
						<li>III. Engenharias;</li>
						<li>IV. Ciências da Saúde;</li>
						<li>V. Ciências Agrárias;</li>
						<li>VI Ciências Sociais Aplicadas;</li>
						<li>VII Ciências Humanas;</li>
						<li>VIII Lingüística, Letras e Artes.</li>
					</ul>
				
				<h3>5.2 Categorias de Trabalhos</h3>
					<ul>
						<li><b>Relatos de Extensão</b>: Apresentação de experiência de extensão, profissional e/ou tecnológica, desenvolvida ou em andamento;</li>
						<li><b>Relatos de Pesquisa</b>: Apresentação de projeto de pesquisa desenvolvido ou em andamento, com resultados parciais;</li>
						<li><b>Relatos de Ensino</b> Apresentação de experiência de ensino revisão de literatura ou ensaio sobre um assunto específico.</li>
					</ul>
				
				<h3>5.3 Modalidades de Apresentação</h3>
				<p>Na submissão do trabalho, o primeiro autor deverá optar por uma modalidade de apresentação: oral ou pôster. Porém, a Comissão Organizadora reserva-se o direito de alterar a modalidade de apresentação escolhida, visando a adequar a quantidade de trabalhos ao espaço físico disponível.</p>
				<p>A lista com os trabalhos selecionados para apresentação e respectiva modalidade será divulgada por meio do site da 17ª Mostra de Pesquisa, Ensino e Extensão de acordo com o cronograma do evento.</p>
				<p>As apresentações deverão ter duração mínima de sete (7) minutos e máxima de dez (10) minutos,  perante uma banca de dois (2) avaliadores e demais participantes do evento. Após a apresentação, será aberto um espaço para questionamentos e considerações da banca, com duração máxima de dez (10) minutos. Apenas o primeiro autor poderá fazer a apresentação oral e responder aos questionamentos da banca.</p>
				<p>A apresentação deve explicitar a instituição e curso de origem, título, autores e temática. Além disso, deve apresentar, de forma clara e observando as normas da Língua Portuguesa, os seguintes elementos: introdução, objetivo(s), metodologia, resultados  e referências.</p>
				
				<ul>
					<li><b>Apresentação Oral</b>: Para esta modalidade, todas as salas estarão equipadas com projetor multimídia e microcomputador. Fica sob a responsabilidade do apresentador a adequação de sua apresentação ao software Power Point 2003 e equipamentos disponíveis, bem como o armazenamento do arquivo em pen drive. Não haverá a disponibilização de acesso à Internet nos computadores. É importante ressaltar que as apresentações serão realizadas independentemente de problemas no fornecimento de energia elétrica ou quaisquer problemas técnicos nos equipamentos.</li>
					<li><b>Apresentação de Pôster</b>: O pôster deverá ser confeccionado com as dimensões: 90 centímetros de altura por 60 centímetros de largura. Não serão aceitos trabalhos em outros tamanhos ou com as dimensões anteriormente citadas em formato paisagem. Os autores serão responsáveis pela elaboração, formatação, impressão e fixação do pôster. Os pôsteres deverão estar expostos em local designado pela Comissão Organizadora na data divulgada no site do evento, sendo fixados no início da manhã e devendo ser retirados ao término do evento. O aluno apresentador deverá estar presente no local da apresentação durante todo o período da sessão.</li>
				</ul>
				
				<h3>5.4 Nível de ensino</h3>
				<p>Refere-se ao nível de ensino do curso no qual o primeiro autor está matriculado: Técnico ou Superior.</p>

				<h3>5.5 Resumo</h3>
				<p>Todos os trabalhos deverão ser enviados no formato resumo, observando as normas da Língua Portuguesa e orientações deste Regulamento.</p>
				<p>O resumo do trabalho deve incluir introdução, objetivo(s), metodologia, resultados parciais ou finais. Deverá ser escrito na forma de texto corrido, em único parágrafo, com até 450 palavras, sem recuo de parágrafo no início das linhas, sem tabulações, sem marcadores ou numeradores, sem timbre, cabeçalho ou rodapé, sem descrição das referências, sem inclusão de tabelas, equações, desenhos e figuras.</p>
				<p>A <b>introdução</b> deve apresentar o tema do trabalho, suas motivações e origem. Os <b>objetivos</b> devem contemplar o que se espera com o trabalho, onde se quer chegar, o que se quer atingir. A <b>metodologia</b> visa explicar como foi feito, qual o método utilizado para obter resultados. Deve-se apresentar, por fim, os <b>resultados parciais ou finais</b>, o que já é possível afirmar acerca dos estudos feitos e o que já foi comprovado ou reconhecido.</p>

				
				
				<h2>6. Submissão de Trabalhos</h2>
				<p>O período de submissão de trabalhos (resumos) será de 03 a <strike>18 de agosto</strike> <span style={{color:'green'}}>25 de agosto</span> de 2016 (prazo prorrogado).</p>
				<p>A submissão do trabalho se dará através do <a href="http://poaconf.poa.ifrs.edu.br/index.php/mostra/mostra/schedConf/cfp">Gerenciador de Conferências</a> .</p>
				<p>O trabalho submetido será avaliado pela Comissão Organizadora que emitirá o aceite no evento.A homologação das inscrições dos trabalhos será efetuada pela Comissão Organizadora do evento e divulgada no site, conforme cronograma.</p>
				<p>Ao resumo que não estiver adequado ao Regulamento do evento, a Comissão Organizadora solicitará sua readequação, permitindo novamente o acesso do autor principal ao sistema de submissão de resumos, para que sejam efetuadas as devidas correções. O resumo corrigido deverá ser novamente submetido dentro dos prazos previstos no cronograma (1° de setembro a 06 de setembro de 2016). Caso as correções não sejam realizadas ou não estejam de acordo com o solicitado pela Comissão Organizadora, a inscrição do trabalho não será homologada. Após a submissão do resumo corrigido não poderão ser realizadas modificações.</p>
				<p>O formulário eletrônico para envio do resumo deverá ser preenchido com as seguintes informações:</p>
				<ul>
					<li>1. Título do trabalho;</li>
					<li>2. Resumo, contendo até 450 palavras (apenas o texto em parágrafo único);</li>
					<li>3. Palavras-chave, até o limite de três palavras-chave;</li>
					<li>4. Demais autores (se houver), orientador e coorientador (se houver); <b>Importante</b>: Para a submissão do trabalho pelo primeiro autor, todos os demais integrantes do trabalho [alunos coautores, orientador(a) e coorientador(a)] devem estar previamente inscritos no evento (efetuar cadastro através do site http://mostra.poa.ifrs.edu.br);</li>
					<li>5. Curso em que o primeiro autor está matriculado;</li>
					<li>6. Categoria de trabalho (Relato de Pesquisa, Relato de Extensão ou Relato de Ensino);</li>
					<li>7. Modalidade de apresentação (apresentação oral ou apresentação de pôster);</li>
					<li>8. Apoio financeiro (instituição responsável pelo apoio financeiro) e;</li>
					<li>9. Turnos preferenciais para apresentação do trabalho.</li>
				</ul>
				
				
				
				<h2>7. Avaliação e Premiação dos Trabalhos</h2>
				<p>A avaliação dos trabalhos ocorrerá durante a realização do evento de acordo com sua área temática, nível de ensino e modalidade de apresentação. Os orientadores de trabalhos participantes no evento não poderão ser avaliadores nas sessões em que os respectivos orientados apresentam.</p>
				<p>Os critérios de avaliação estão descritos na ficha de avaliação disponível no anexo I.</p>
				<p>Serão premiados os trabalhos que apresentarem maior pontuação, dentro de uma mesma área temática, nível de ensino e modalidade de apresentação. O orientador deverá estar presente desde o início da apresentação do trabalho na respectiva sessão, podendo ser representado pelo co-orientador. A ausência do orientador (ou do co-orientador) na apresentação implicará na desclassificação do trabalho para a premiação.</p>
				
				<h2>8. Certificação</h2>
				<p>Serão concedidos certificados a todos os participantes do trabalho apresentado, onde constará o nome do apresentador, coautores, orientador e coorientador (se houver) somente mediante a efetiva apresentação do trabalho pelo primeiro autor na sessão correspondente.</p>
				<p>A emissão de certificados para voluntários somente se dará mediante o registro de presença no local de credenciamento. A emissão dos certificados de avaliador de trabalho somente se dará mediante a efetiva avaliação do trabalho na sessão correspondente.</p>
				<p>A emissão de certificados para ouvintes somente se dará mediante a confirmação da inscrição e registro de presença nos dois dias do evento no local de credenciamento. Os ouvintes que desejarem obter declaração de participação no evento deverão solicitar a emissão da declaração por meio do envio de e-mail à Diretoria de Pesquisa e Inovação do IFRS campus Porto Alegre ( <a href="mailto:dpi@poa.ifrs.edu.br">dpi@poa.ifrs.edu.br</a> ).</p>
				
				<h2>9. Casos Omissos</h2>
				<p>Casos omissos serão analisados e deliberados pela Comissão Organizadora.</p>
				

			  
                </div>
            </div>
        </div>
        

    </Fragment>
)