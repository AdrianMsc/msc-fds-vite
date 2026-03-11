import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import SimilarItems from "../../components/organisms/SimilarItems";

const codeSimilarItems = `
<section class="bg-[#F2F2F2] border rounded-md border-monochromes-grey_xlight md:pt-3 flex flex-col">
  <div class="mb-3 font-bold pl-[256px] hidden md:flex">
    <p class="w-[256px]">This Item:</p>
    <p class="w-[256px]">Recomendations:</p>
  </div>

  <div class="flex overflow-x-auto md:overflow-x-hidden whitespace-nowrap">
    <article class="md:w-[256px] md:min-w-[256px] absolute md:relative pointer-events-none">
      <div class="h-[215px]"></div>
      <div class="p-2 font-bold border-t-2 h-[55px] md:h-auto">Price</div>
      <div class="p-2 font-bold border-t-2 h-[55px] md:h-auto">Customer Rating</div>
      <div class="p-2 font-bold border-t-2 h-[55px] md:h-auto">Stock</div>
      <div class="p-2 font-bold border-t-2 h-[100px] md:h-[76px]">Delivery</div>
      <div class="p-2 font-bold border-t-2 h-[55px] md:h-auto">Drill Bit Size (Inch)</div>
    </article>

    <article class="bg-white w-[256px] min-w-[256px] mr-2 whitespace-normal">
      <div class="h-auto p-3 min-h-[215px]">
        <div class="w-full">
          <img class="h-[80px] m-auto mb-2" src="https://cdn.mscdirect.com/global/images/ProductImages/8930544-24.jpg" alt="" />
        </div>
        <p class="mb-2 text-[12px] font-bold">Chicago-Latrobe</p>
        <p class="mb-2 text-sm font-bold">Jobber Drill: 1/64" Dia, 118 deg Point, High Speed Steel</p>
        <button class="px-2 md:px-5 rounded-full font-bold text-sm h-7 py-1 cursor-pointer min-w-24 md:min-w-32 bg-[#186DF5] text-white">Add to Cart</button>
      </div>
      <div class="p-2 pt-6 md:pt-2 font-bold border-t-2">$5.35</div>
      <div class="p-2 pt-6 md:pt-2 font-bold border-t-2 flex items-center gap-1">★★★★★ (X)</div>
      <div class="p-2 pt-6 md:pt-2 font-bold border-t-2"><span class="text-[#0E754A]">In Stock</span></div>
      <div class="p-2 pt-6 md:pt-2 border-t-2 h-[100px] md:h-[76px] text-[#717171]">
        <p class="font-bold">Ships from supplier</p>
        <p>Expected to ship within 3 business days</p>
      </div>
      <div class="p-2 pt-6 md:pt-2 border-t-2">1/64</div>
    </article>

    <div id="alv" class="flex md:overflow-x-auto whitespace-nowrap pointer-events-auto gap-2 pr-20 md:pr-0"></div>
  </div>
</section>`;

const SimilarItemsPage = () => {
  useEffect(() => {
    document.title = "Similar Items";
  }, []);

  return (
    <ComponentLayout name="Similar Items" description="">
      <MscComponentSnippet code={codeSimilarItems} variant="transparent">
        <SimilarItems />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default SimilarItemsPage;
