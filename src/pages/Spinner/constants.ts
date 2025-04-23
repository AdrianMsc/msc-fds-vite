export const codeSpinner = `
<!--SPINNER LIGHT-->
<div class="msc-spinner-overlay hidden"></div>
  <div class="msc-spinner-wrapper">
    <svg class="msc-spinner" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="31" r="28" stroke="white" stroke-width="6"/>
      <circle opacity="0.38" cx="31" cy="31" r="28" stroke="#212121" stroke-width="6"/> 
      <path opacity="0.8" d="M3 31C3 15.536 15.536 3 31 3" stroke="#212121" stroke-width="6" stroke-linecap="round"/>
    </svg>  
      <label class="msc-spinner-label">Loading Results</label>
  </div>
</div>

<!--SPINNER DARK-->
<div class="msc-spinner-overlay-dark hidden"></div>
  <div class="msc-spinner-wrapper">
    <svg class="msc-spinner" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="31" r="28" stroke="#717171" stroke-width="6"/>
      <path opacity="0.8" d="M3 31C3 15.536 15.536 3 31 3" stroke="white" stroke-width="6" stroke-linecap="round"/>
    </svg>  
      <label class="msc-spinner-label-dark">Loading Results</label>
  </div>
</div>
        `;
