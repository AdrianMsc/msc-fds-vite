export const codeTabs = `
      <!-- Tab Component -->
    <ul class="msc-tabs grid-cols-6">
      <li class="col-span-6 md:col-span-2 active">
          <a href="#">General Purpose & Heavy Duty</a>
      </li>
      <li class="col-span-6 md:col-span-2">
          <a href="#">Specialized & High Performance</a>
      </li>
      <li class="col-span-6 md:col-span-2">
        <a href="#">Maintenance</a>
      </li>
    </ul>

    <!-- JS -->
    <script>
      document
        .querySelector(".msc-tabs")
        .addEventListener("click", (event) => {
        event.preventDefault();
        let { target } = event;
        if (target.tagName === "A") {
        target = target.closest("li");
        }
        if (
        target.tagName === "LI" &&
        target.parentElement.classList.contains("msc-tabs")
        ) {
          Array.from(document.querySelectorAll(".msc-tabs > li")).forEach(
            (tab) => {
            tab === target
            ? tab.classList.add("active")
            : tab.classList.remove("active");
            }
          );
        }
      });
    </script>
      `;
