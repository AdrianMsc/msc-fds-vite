export const codeDialog = `
  <article class="msc-dialog">
      <h4 class="msc-dialog-title">Are you sure?</h4>
      <p>
        You are setting your status as Out of Office. Your organization
        will see this status until you turn it off.
      </p>
      <div class="msc-dialog-footer">
        <button class="msc-btn msc-btn-transparent">Cancel</button>
  
        <button class="msc-btn msc-btn-blue-solid">Continue</button>
      </div>
    </article>
  </div>
  
  <button
    id="dialogBtn"
    class="msc-btn msc-btn-blue-solid mb-4"
    onclick="toggleDialog()"
  >
    Trigger Dialog
  </button>
        `;
