import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@9lon/aqa-font/aqa-trirong-font.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class AqaTooltipSection extends PolymerElement {
  static get template() {
    return html`
        <style>
            .tooltip {
                position: fixed;
                top: 0;
                left: 0;
                display: none;
                background-color: #000;
                padding: 5px 10px;
                color: #FFF;
                font-size: 0.7rem;
                border-radius: 5px;
                opacity: 0;
                font-family: TrirongLight;
            }

            .tooltip-visable {
                opacity:0.7;
                transition:opacity 0.3s cubic-bezier(0,0,0.3,1)
            }

            .tooltip::after {
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: #000 transparent transparent transparent;
                content: "";
            }
        </style>

        <div id="tooltip" class="tooltip">
            [[label]]
        </div>
`;
  }

  static get is() { return 'aqa-tooltip-section'; }
  static get properties() {
      return {
          label: {
              type: String,
              value: 'Tooltip'
          }
      }
  }
}
window.customElements.define(AqaTooltipSection.is, AqaTooltipSection);
