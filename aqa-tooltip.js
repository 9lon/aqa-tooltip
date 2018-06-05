import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './aqa-tooltip-section.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

class AqaTooltip extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                display: inline-block
            }   
        </style>
        <slot on-mouseover="_showTooltip" on-mouseout="_hideTooltip"></slot>
`;
  }

  static get is() {
      return 'aqa-tooltip';
  }

  static get properties() {
      return {
          label:{
              type:String
          }
      };
  }
  ready() {
      super.ready();
  }

  constructor(){
      super()
      if(typeof  window.tooltipSection == "undefined"){
          window.tooltipSection = document.createElement('aqa-tooltip-section')
          tooltipSection.setAttribute('id',"tooltipSection")
          document.querySelector('body').appendChild(tooltipSection)
      }                
  }

  _showTooltip(e){
      var el = this.children[0]
      document.getElementById("tooltipSection").label = this.label
      var tooltip = document.getElementById("tooltipSection").$.tooltip
      tooltip.style.display = 'inline'
      tooltip.style.top = (el.getBoundingClientRect().top - tooltip.offsetHeight - 5) + 'px'
      tooltip.style.left = (el.getBoundingClientRect().left - (tooltip.offsetWidth/2) +  (el.offsetWidth/2)) + 'px'
      tooltip.classList.add('tooltip-visable')
  }

  _hideTooltip(e){
      var tooltip = document.getElementById("tooltipSection").$.tooltip
      tooltip.classList.remove('tooltip-visable')
      tooltip.style.display = 'none'
      tooltip.style.top = '0'
      tooltip.style.left = '0'
  }
}

window.customElements.define(AqaTooltip.is, AqaTooltip);
