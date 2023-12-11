import '@/app/globals.css';
import { useState } from 'react';

const ShowMore = ({ data, expandedDoubts, onArrowClick }) => {

    const [expanded, setExpanded] = useState(false); //Usado para gerenciar se o estado do show more está aberto ou fechado, controla se mais dados serão exibidos ou não.  
    const dataForDisplay = expanded ? data : data.slice(0, 2);  
    // variável que contém os dados a serem exibidos, dependendo se o estado expanded 
    // é verdadeiro ou falso. Se for verdadeiro, ele mostra todos os dados; caso contrário, mostra apenas os primeiros 10 elementos.

    
    const handleClickAccordion = () => {
        // Para tornar nosso código mais reutilizável, deveríamos criar uma Accordionclasse.
        // Ao fazer isso, podemos chamar new Accordion()todos os <details>elementos da página.
        class Accordion {

            // The default constructor for each accordion
            constructor(el) {
                // O construtor é o local onde salvamos todos os dados necessários por acordeão.

                // Store the <details> element
                this.el = el;
                console.log(this.el)

                // Store the <summary> element
                this.summary = el.querySelector('summary');
                console.log(this.summary);
                
                // Store the <div class="content"> element
                this.content = el.querySelector('.conteudoDuvida');

                // Store the animation object (so we can cancel it, if needed)
                this.animation = null;

                // Store if the element is closing
                this.isClosing = false;

                // Store if the element is expanding
                this.isExpanding = false;
                
                // Detect user clicks on the summary element
                this.summary.addEventListener('click', (e) => this.onClick(e));

            };
        
            // Function called when user clicks on the summary
            onClick(e) {
                // estamos verificando se o elemento está sendo animado (fechando ou expandindo)
                // Precisamos fazer isso caso os usuários cliquem no acordeão enquanto ele está sendo animado. No caso de cliques rápidos,
                // não queremos que o acordeão passe de totalmente aberto para totalmente fechado.

                // O <details>elemento possui um atributo, [open]aplicado a ele pelo navegador quando abrimos o elemento.
                // Podemos obter o valor desse atributo verificando a openpropriedade do nosso elemento usando this.el.open.

                // Stop default behaviour from the browser
                e.preventDefault();
                
                // Add an overflow on the <details> to avoid content overflowing
                this.el.style.overflow = 'hidden';
                
                // Check if the element is being closed or is already closed
                if (this.isClosing || !this.el.open) {
                    this.open();
                
                // Check if the element is being openned or is already open
                } else if (this.isExpanding || this.el.open) {
                    this.shrink();
                };

            };
        
            // Function called to close the content with an animation
            shrink() {
                // Esta função de redução está usando a .animate()função WAAPI.
                // WAAPI é muito semelhante ao CSS @keyframes. Precisamos definir os quadros-chave inicial e final da animação.
                // Neste caso, precisamos apenas de dois quadros-chave, sendo o primeiro a altura atual do elemento e o segundo a altura
                // do <details>elemento depois de fechado. A altura atual é armazenada na startHeightvariável. A altura fechada é
                // armazenada na endHeightvariável e é igual à altura do arquivo <summary>.


                // Set the element as "being closed"
                this.isClosing = true;

                // Store the current height of the element
                const startHeight = `${this.el.offsetHeight}px`;
                
                // Calculate the height of the summary
                const endHeight = `${this.summary.offsetHeight}px`;

                // If there is already an animation running
                if (this.animation) {
                
                    // Cancel the current animation
                    this.animation.cancel();
                };

                // Start a WAAPI animation
                this.animation = this.el.animate({
                    // Set the keyframes from the startHeight to endHeight
                    height: [startHeight, endHeight]
                }, {
                    // If the duration is too slow or fast, you can change it here
                    duration: 300,
                    // You can also change the ease of the animation
                    easing: 'ease-out'
                });

                // When the animation is complete, call onAnimationFinish()
                this.animation.onfinish = () => this.onAnimationFinish(false);
                // If the animation is cancelled, isClosing variable is set to false
                this.animation.oncancel = () => this.isClosing = false;
            };
        
            // Function called to open the element after click
            open() {
                // A open função é chamada quando queremos expandir o acordeão. 
                // Esta função ainda não controla a animação do acordeão.
                // Primeiro, calculamos a altura do <details>elemento e aplicamos essa altura com estilos embutidos nele.
                // feito isso, podemos definir o atributo open nele para tornar o conteúdo visível, mas oculto, pois temos uma overflow: hiddenaltura fixa no elemento.
                // Em seguida, esperamos o próximo quadro para chamar a função de expansão e animar o elemento.

                // Apply a fixed height on the element
                this.el.style.height = `${this.el.offsetHeight}px`;

                // Force the [open] attribute on the details element
                this.el.open = true;

                // Wait for the next frame to call the expand function
                window.requestAnimationFrame(() => this.expand());
            };
        
            // Function called to expand the content with an animation
            expand() {
                // A função de expansão é semelhante à shrinkfunção, mas em vez de animar da altura atual até a altura próxima,
                // animamos da altura do elemento até a altura final. Essa altura final é igual à altura do resumo mais a altura do conteúdo interno.

                // Set the element as "being expanding"
                this.isExpanding = true;

                // Get the current fixed height of the element
                const startHeight = `${this.el.offsetHeight}px`;

                // Calculate the open height of the element (summary height + content height)
                const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

                // If there is already an animation running
                if (this.animation) {
                    // Cancel the current animation
                    this.animation.cancel();
                }

                // Start a WAAPI animation
                this.animation = this.el.animate({

                    // Set the keyframes from the startHeight to endHeight
                    height: [startHeight, endHeight]
                }, {
                    
                    // If the duration is too slow of fast, you can change it here
                    duration: 300,
                    
                    // You can also change the ease of the animation
                    easing: 'ease-out'
                });
                
                // When the animation is complete, call onAnimationFinish()
                this.animation.onfinish = () => this.onAnimationFinish(true);
                
                // If the animation is cancelled, isExpanding variable is set to false
                this.animation.oncancel = () => this.isExpanding = false;
            };
        
            // Callback when the shrink or expand animations are done
            onAnimationFinish(open) {
                // Esta função é chamada no final da animação de redução ou expansão. Como você pode ver, existe um parâmetro, [open]
                // que é definido como verdadeiro quando o acordeão é aberto, permitindo-nos definir o [open]atributo HTML no elemento, pois ele não é mais manipulado pelo navegador.

                // Set the open attribute based on the parameter
                this.el.open = open;
                
                // Clear the stored animation
                this.animation = null;
                
                // Reset isClosing & isExpanding
                this.isClosing = false;
                
                this.isExpanding = false;
                
                // Remove the overflow hidden and the fixed height
                this.el.style.height = this.el.style.overflow = '';
            };      
        }

        // Tudo o que resta é usar nossa Accordionclasse para cada <details>elemento do HTML. Para isso, utilizamos a querySelectorAllna
        // <details>tag e criamos uma nova Accordioninstância para cada uma.
        document.querySelectorAll('details').forEach((el) => {
            new Accordion(el);
        });

    };

    const teste = () => {
        console.log(data.colum)
    }
    
  return (
    <>
        {dataForDisplay.map((item) => (

            <details key={item.key} className={`w-[90%] max-h-[200px] min-h-[45px] ounded border-2 border-slate-950 text-[1rem] flex `} onClick={handleClickAccordion}>
                <summary className="w-full  h-[45px] text-[18px] cursor-pointer font-bold bg-[#ffc501] flex justify-center list-none hover:bg-[#e7c452] hover:transition ">
                    
                    <div id={item.id} onClick={onArrowClick} className='  summaryDuvidas w-[98%] flex items-center justify-between h-full text-[1rem]'>
                        {item.summary}
                        
                        { item.set
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    
                    
                        } {/*Exibe condicionalmente cada icone, dependendo do state */}    

                    </div>

                </summary>
                    
                <div className='conteudoDuvida w-full h-auto flex justify-center items-center bg-[#ffc501]'> {/*Container que agrupa o corpo da duvida. */}
                    <div className='w-[98%]  text-[1rem] tracking-wide py-1 '>
                        {item.detail}
                    </div>
                </div>
            </details>

        ))}

        <button className=' text-black transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300' type="button" onClick={() => setExpanded(!expanded)}>
            {expanded ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-bounce w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>  } 
        </button> 
    </>
  )
}

export default ShowMore
