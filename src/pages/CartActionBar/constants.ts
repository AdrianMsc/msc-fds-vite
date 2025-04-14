export const cartActionBarCode = `
    <div class="msc-cart-action-bar">
    <div class="msc-buttons-container">
      <button class="msc-grey-button">
        <i class="fa-solid fa-floppy-disk mb-[1px]"></i>
        <p>Save Cart</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-print mb-[1px]"></i>
        <p>Print</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-plus mb-[1px]"></i>
        <p>Add to List</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-download mb-[1px]"></i>
        <p>Download Cart</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-receipt mb-[1px]"></i>
        <p>Request a Quote</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-share mb-[1px]"></i>
        <p>Share</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-trash mb-[1px]"></i>
        <p>Clear Cart</p>
      </button>
    </div>
    
    <!-- Responsive Code -->
    <button id="cartOptions" class="msc-grey-button lg:hidden">
      <p>Cart Options</p>
      <i class="fa-solid fa-ellipsis-vertical mb-[1px]"></i>
    </button>
  </div>
  <div id="optionsList" class="msc-buttons-container-responsive hidden">
    <button class="msc-grey-button">
      <i class="fa-solid fa-floppy-disk mb-[1px]"></i>
      <p>Save Cart</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-print mb-[1px]"></i>
      <p>Print</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-plus mb-[1px]"></i>
      <p>Add to List</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-download mb-[1px]"></i>
      <p>Download Cart</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-receipt mb-[1px]"></i>
      <p>Request a Quote</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-share mb-[1px]"></i>
      <p>Share</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-trash mb-[1px]"></i>
      <p>Clear Cart</p>
    </button>
  </div>

  <!-- JS -->
  <script>
    const cartOptions = document.getElementById('cartOptions');
    const optionsList = document.getElementById('optionsList');
            
    cartOptions.addEventListener("click", function () {
      optionsList.classList.toggle('hidden')
    })
  </script>
      `;
