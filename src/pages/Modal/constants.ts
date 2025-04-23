export const codeModal = `
  <div id="modalOne"
    class="hidden msc-modal-bg">
      <div class="msc-modal">
      <div class="msc-modal-header">
        <h4 class="msc-modal-title">Modal Title</h4>
        <button id="modalClsBtn">
          <img src="../assets/times.svg" class="msc-modal-close" />
        </button>
      </div>
      <div class="msc-modal-body">
        <p class="msc-modal-p">
          TEXT HERE
        </p>
        ...
      </div>
      <div class="msc-modal-footer">
        <button class="btn btn-blue-solid w-full">
          Cancel
        </button>
        <button class="btn btn-blue-outline w-full">
          Action
        </button>
      </div>
    </div>
  </div>
  <!-- JS -->
  <script>
    const modalBtn = document.getElementById("modalBtn");
    const modalOne = document.getElementById("modalOne");
    const modalClsBtn = document.getElementById("modalClsBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    modalBtn.onclick = function () {
      modalOne.classList.remove("hidden");
    };
    modalClsBtn.onclick = function () {
      modalOne.classList.add("hidden");
    };
    cancelBtn.onclick = function () {
      modalOne.classList.add("hidden");
    };
  </script>
        `;
