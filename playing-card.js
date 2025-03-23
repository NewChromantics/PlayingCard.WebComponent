const ElementCss=
`
/* only way to add non-breaking space \a0 in content: css - it can't be done in
	a string, so need to load a real css file */
@import 'playing-card.css';
`;

//	import the css and directly get a constructed stylesheet from it
//	gr: this caches, or at least, isn't a frame delay in evaluating css, so we don't get a flicker
import ModernElementCss from './playing-card.css' with { type: 'css' };


export default class PlayingCard extends HTMLElement
{
	#StateElement;
	#ActionsElement;
	#StyleElement;
	#State = {};
	#CurrentActionMeta = null;	//	actually a state
	
	constructor()
	{
		super();
	}
		
	static get ElementName()
	{
		return 'playing-card';
	}
	
	connectedCallback()
	{
		//	if we've been disconnected & re-connected, we may already have a shadow dom
		//	we cannot attach a second
		if ( !this.shadowRoot )
		{
			this.attachShadow({mode: 'open'});
			//this.shadowRoot.appendChild(template.content.cloneNode(true));
			this.#InitialiseDom( this.shadowRoot );
		}

		this.setAttribute('random', Math.random() );

		
		//this.#StyleElement.style.setProperty('--image', this.getAttribute('image') );
		let ImageUrl = this.getAttribute('image');
		this.style.setProperty('--image', `url(${ImageUrl})` );
	}
	
	#InitialiseDom(RootElement)
	{
		if ( this.shadowRoot.adoptedStyleSheets )
		{
			// then, in the constructor:
			this.shadowRoot.adoptedStyleSheets.push(ModernElementCss);
		}
		else
		{
			this.#StyleElement = document.createElement('style');
			RootElement.appendChild(this.#StyleElement);
			this.#StyleElement.textContent = ElementCss;
		}
	}
	
	
}


window.customElements.define( PlayingCard.ElementName, PlayingCard );
