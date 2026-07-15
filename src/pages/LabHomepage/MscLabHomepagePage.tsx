import { useEffect, useRef } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';

const imageModules = import.meta.glob('../../assets/homepage/*.{png,jpg,jpeg}', {
  eager: true,
}) as Record<string, { default: string }>;

const img = (name: string) => imageModules[`../../assets/homepage/${name}`]?.default || '';

const MscLabHomepagePage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainers = document.querySelectorAll<HTMLDivElement>('div.overflow-x-scroll');

    scrollContainers.forEach((scrollContainer) => {
      const parent = scrollContainer.closest('section.group') || scrollContainer.closest('div');
      if (!parent) return;

      const btnLeft = parent.querySelector<HTMLButtonElement>('button.scroll-left');
      const btnRight = parent.querySelector<HTMLButtonElement>('button.scroll-right');

      const updateButtonStates = () => {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (btnLeft) {
          if (scrollContainer.scrollLeft <= 0) {
            btnLeft.classList.add('opacity-0', 'pointer-events-none');
          } else {
            btnLeft.classList.remove('opacity-0', 'pointer-events-none');
          }
        }

        if (btnRight) {
          if (scrollContainer.scrollLeft >= maxScrollLeft - 1) {
            btnRight.classList.add('opacity-0', 'pointer-events-none');
          } else {
            btnRight.classList.remove('opacity-0', 'pointer-events-none');
          }
        }
      };

      const scrollByAmount = (amount: number) => {
        scrollContainer.scrollBy({ left: amount, behavior: 'smooth' });
      };

      btnLeft?.addEventListener('click', () => scrollByAmount(-300));
      btnRight?.addEventListener('click', () => scrollByAmount(300));
      scrollContainer.addEventListener('scroll', updateButtonStates);

      updateButtonStates();

      scrollContainer.addEventListener('mouseenter', () => {
        if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;
        const original = scrollContainer.scrollLeft;
        scrollContainer.scrollLeft += 1;
        scrollContainer.scrollLeft = original;
      });
    });
  }, []);

  useEffect(() => {
    const icon = document.querySelector('.rotate-icon') as HTMLElement | null;
    const image = document.querySelector('.testimonial-image') as HTMLElement | null;
    const sectionEl = document.getElementById('parallax-section');

    if (!icon || !image || !sectionEl) return;

    const updateEffects = () => {
      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const extendedMargin = 400;
      const sectionTop = rect.top - extendedMargin;
      const sectionBottom = rect.bottom + extendedMargin;

      let rotation = -90;
      let translateY = -60;

      if (sectionTop <= viewportHeight && sectionBottom >= 0) {
        const progress = Math.min(
          Math.max(1 - (sectionTop + rect.height) / (viewportHeight + rect.height), 0),
          1,
        );

        if (sectionTop > 0 && sectionTop < viewportHeight) {
          rotation = ((progress - 0) / (0.5 - 0)) * (0 - -90) + -90;
          translateY = ((progress - 0) / (0.5 - 0)) * (0 - -60) + -60;
        } else if (sectionTop <= 0 && sectionBottom >= viewportHeight) {
          rotation = 0;
          translateY = 0;
        } else if (sectionBottom < viewportHeight && sectionBottom > 0) {
          const exitProgress = 1 - sectionBottom / viewportHeight;
          rotation = ((exitProgress - 0) / (1 - 0)) * (90 - 0) + 0;
          translateY = ((exitProgress - 0) / (1 - 0)) * (60 - 0) + 0;
        }
      }

      icon.style.transform = `rotate(${rotation}deg)`;
      image.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', updateEffects, { passive: true });
    window.addEventListener('resize', updateEffects);
    updateEffects();

    return () => {
      window.removeEventListener('scroll', updateEffects);
      window.removeEventListener('resize', updateEffects);
    };
  }, []);

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  };

  return (
    <ComponentLayout name="Lab Homepage" description="Homepage lab prototype">
      <section className="relative bg-white px-10">
        {/* Shipping Banner */}
        <div className="bg-[#F1F5FE] py-2 px-5 lg:px-10 2xl:px-0 text-center border border-primary-blue_light">
          <p>
            Free Ground Shipping on orders over <strong>$99</strong> - Online Only Enter Code{' '}
            <strong>MW99</strong>
            <span className="text-primary-blue font-bold"> Click to Apply</span>
          </p>
        </div>

        <section className="max-w-screen-2xl items-center px-5 lg:px-10 2xl:px-0 mx-auto gap-4 flex flex-col pb-4">
          {/* Category tags */}
          <div className="flex flex-col pt-4 w-full h-fit gap-4 mx-auto">
            <div className="border border-primary-blue_light rounded w-full py-3 gap-3 h-fit flex flex-col">
              <div className="flex flex-row justify-between px-4">
                <div className="flex flex-col items-start md:items-center gap-1 md:gap-4 md:flex-row">
                  <p className="font-bold text-xl">Top Categories for You</p>
                  <p className="text-primary-blue_dark font-bold flex gap-x-2">
                    View All Categories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="12"
                      className="fill-primary-blue_dark"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </p>
                </div>
                <div className="flex-row gap-2 hidden md:flex">
                  <button
                    className="scroll-left flex items-center justify-center rounded-full bg-transparent size-10 shadow-md"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-3 fill-primary-blue rotate-180"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                  </button>
                  <button
                    className="scroll-right flex items-center justify-center rounded-full bg-white size-10 shadow-md"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-3 fill-primary-blue"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-row gap-3 overflow-x-scroll text-nowrap pb-3 ml-4 pr-4 text-sm custom-scroll">
                {[
                  'Holemaking',
                  'Milling',
                  'Abrasives',
                  'Safety',
                  'Indexable Cutting Tools',
                  'Threading',
                  'Measuring & Inspecting',
                  'Hand Tools',
                  'Janitorial & Facility Maintenance',
                  'Fasteners',
                  'Threading',
                  'Measuring & Inspecting',
                  'Hand Tools',
                  'Janitorial & Facility Maintenance',
                  'Fasteners',
                  'Threading',
                  'Measuring & Inspecting',
                  'Hand Tools',
                  'Janitorial & Facility Maintenance',
                  'Fasteners',
                  'Threading',
                ].map((label, i) => (
                  <button
                    key={i}
                    className="py-1 px-4 border border-primary-blue text-primary-blue rounded w-fit h-fit hover:text-white hover:bg-primary-blue cursor-pointer transition-all duration-300"
                    type="button"
                  >
                    <p>{label}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <picture>
              <source media="(min-width:768px)" srcSet={img('slider-ss-test-a.jpg')} />
              <img
                src={img('slider-ss-test-dd.jpg')}
                alt="Copy test image"
                className="w-full rounded"
              />
            </picture>

            <picture>
              <source media="(min-width:768px)" srcSet={img('slider-ss-test-b.jpg')} />
              <img
                src={img('slider-ss-test-c.jpg')}
                alt="Copy test image"
                className="w-full rounded"
              />
            </picture>
          </div>

          {/* Recently Viewed */}
          <div className="bg-white w-screen lg:w-full h-fit flex flex-col pt-4 pb-1 py-6 px-5 lg:px-6 gap-3 overflow-hidden rounded scroll-container">
            <div className="flex flex-row justify-between items-center gap-4">
              <h3 className="text-xl font-bold text-nowrap">Recently Viewed</h3>
              <div className="border-b border-monochromes-grey_xlight w-full block" />
            </div>

            <section className="relative group">
              <article className="absolute left-0 min-h-full items-center flex rounded-r z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                <button
                  className="scroll-left bg-white w-9 h-32 flex items-center justify-center shadow-[4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-r -left-2 relative"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3 fill-primary-blue"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                  </svg>
                </button>
              </article>

              <div
                ref={scrollContainerRef}
                className="flex flex-row justify-between gap-3 overflow-x-scroll group pb-4 relative custom-scroll"
              >
                {[
                  'drill.png',
                  'gloves.png',
                  'battery.png',
                  'ac.png',
                  'compresor.png',
                  'battery2.png',
                  'battery2.png',
                  'battery2.png',
                  'battery2.png',
                  'battery2.png',
                  'battery2.png',
                  'battery2.png',
                ].map((item, i) => (
                  <article
                    key={i}
                    className="min-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-[88px] w-[210px] flex justify-center">
                      <img src={img(item)} alt="Product Image" className="object-fit" />
                    </div>
                    <div className="flex flex-row justify-between items-center mt-3">
                      <p className="text-sm">Web Price</p>
                      <p>
                        <span className="font-bold text-lg">$293.17</span>
                        <span className="text-gray-500 text-xs">/ea</span>
                      </p>
                    </div>
                    <p className="text-xs font-bold">DEWALT</p>
                    <p className="text-sm font-bold">Power Tool Battery: 20V, Lithium-ion</p>
                    <p className="text-sm pt-1 text-gray-500">MSC# 73659377</p>

                    <div className="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom">
                      <div className="relative flex flex-col h-fit w-fit items-center self-end">
                        <p className="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                        <input
                          type="text"
                          className="h-10 w-[60px] border rounded appearance-none text-center"
                          inputMode="numeric"
                          defaultValue="1"
                          onInput={handleNumericInput}
                        />
                      </div>

                      <button
                        className="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
                        type="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <article className="absolute right-0 top-0 min-h-full items-center flex rounded-l z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                <button
                  className="scroll-right bg-white w-9 h-32 flex items-center justify-center shadow-[-4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-l -right-2 relative"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3 fill-primary-blue rotate-180"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                  </svg>
                </button>
              </article>
            </section>
          </div>

          {/* Best Sellers */}
          <div className="bg-white w-screen lg:w-full h-fit flex flex-col pt-4 pb-1 py-6 px-5 lg:px-6 gap-3 overflow-hidden rounded scroll-container">
            <div className="flex flex-row justify-between items-center gap-4">
              <h3 className="text-xl font-bold text-nowrap">Best Sellers</h3>
              <div className="border-b border-monochromes-grey_xlight w-full block" />
            </div>

            <section className="relative group">
              <article className="absolute left-0 min-h-full items-center flex rounded-r z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                <button
                  className="scroll-left bg-white w-9 h-32 flex items-center justify-center shadow-[4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-r -left-2 relative"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3 fill-primary-blue"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                  </svg>
                </button>
              </article>

              <div className="flex flex-row justify-between gap-3 overflow-x-scroll pb-4 relative custom-scroll">
                {[
                  'drill.png',
                  'gloves.png',
                  'battery.png',
                  'ac.png',
                  'compresor.png',
                  'battery2.png',
                  'battery2.png',
                  'battery2.png',
                ].map((item, i) => (
                  <article
                    key={i}
                    className="min-w-[248px] h-fit p-4 gap-1 border rounded border-gray hover:border-transparent hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-[88px] w-[210px] flex justify-center">
                      <img src={img(item)} alt="Product Image" className="object-fit" />
                    </div>
                    <div className="flex flex-row justify-between items-center mt-3">
                      <p className="text-sm">Web Price</p>
                      <p>
                        <span className="font-bold text-lg">$293.17</span>
                        <span className="text-gray-500 text-xs">/ea</span>
                      </p>
                    </div>
                    <p className="text-xs font-bold">DEWALT</p>
                    <p className="text-sm font-bold">Power Tool Battery: 20V, Lithium-ion</p>
                    <p className="text-sm pt-1 text-gray-500">MSC# 73659377</p>

                    <div className="flex flex-row overflow-hidden gap-3 w-full h-fit items-center pt-3 align-bottom">
                      <div className="relative flex flex-col h-fit w-fit items-center self-end">
                        <p className="absolute bottom-8 bg-white w-fit z-10 text-xs">Qty</p>
                        <input
                          type="text"
                          className="h-10 w-[60px] border rounded appearance-none text-center"
                          inputMode="numeric"
                          defaultValue="1"
                          onInput={handleNumericInput}
                        />
                      </div>

                      <button
                        className="bg-primary-blue text-white font-bold py-2 px-3 rounded-full w-full hover:bg-primary-blue_dark transition-all duration-300 h-10"
                        type="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <article className="absolute right-0 top-0 min-h-full items-center flex rounded-l z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                <button
                  className="scroll-right bg-white w-9 h-32 flex items-center justify-center shadow-[-4px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-l -right-2 relative"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3 fill-primary-blue rotate-180"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                  </svg>
                </button>
              </article>
            </section>
          </div>
        </section>

        {/* Browse Our Categories */}
        <section className="bg-white py-6">
          <div className="mx-auto max-w-screen-2xl px-5 lg:px-10 2xl:px-0 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center after:flex-1 after:bg-monochromes-grey_xlight after:h-[1px] sm:after:order-2 after:hidden sm:after:block">
              <h1 className="font-bold text-xl mr-2 order-1 sm:order-1">Browse Our Categories</h1>

              <a
                href="all-categories.html"
                className="order-3 sm:order-3 text-primary-blue_xdark border rounded border-monochromes-grey_xlight font-bold py-1 px-4 sm:ml-2 flex gap-x-2 justify-center md:justify-start"
              >
                View All Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="15"
                  className="fill-primary-blue_xdark"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </a>

              <p className="text-sm order-2 sm:order-4 sm:basis-full sm:w-full py-3 sm:py-0">
                Extensive product range tailored around your Metalworking, Safety and MRO needs
              </p>
            </div>

            <div
              id="categories"
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[1px] bg-monochromes-grey_xlight rounded w-full mt-4 text-center font-bold text-sm cursor-pointer overflow-hidden border"
            >
              {[
                { img: 'milling.jpg', label: 'Milling' },
                { img: 'hole-making.png', label: 'Hole Making' },
                { img: 'safety.png', label: 'Safety' },
                { img: 'abrasives.png', label: 'Abrasives' },
                { img: 'indexable.png', label: 'Indexable Cutting Tools' },
                { img: 'power-tools.png', label: 'Power Tools' },
                {
                  img: 'hose.png',
                  label: 'Hose, Tube, Fittings & Valves',
                  className: 'hidden lg:flex',
                },
                {
                  img: 'hand-tools.png',
                  label: 'Hand Tools',
                  className: 'hidden lg:flex',
                },
                {
                  img: 'clamping.png',
                  label: 'Clamping, Workholding & Positioning',
                  className: 'hidden xl:flex',
                },
                {
                  img: 'fasteners.png',
                  label: 'Fasteners',
                  className: 'hidden xl:flex',
                },
                {
                  img: 'janitorial.png',
                  label: 'Janitorial & Facility Maintenance',
                  className: 'hidden xl:flex',
                },
                {
                  img: 'lighting.png',
                  label: 'Lighting & Electrical',
                  className: 'hidden xl:flex',
                },
              ].map((cat, i) => (
                <article
                  key={i}
                  className={`flex p-2 sm:p-0 flex-col sm:min-h-52 sm:items-center justify-center bg-white hover:outline hover:outline-2 hover:outline-primary-blue hover:text-primary-blue ${cat.className || ''}`}
                  style={{ outlineOffset: '-2px' }}
                >
                  <div className="sm:p-3 flex items-center sm:justify-center sm:flex-col">
                    <img
                      src={img(cat.img)}
                      className="sm:mb-2 w-[3.75rem] lg:w-16 mx-6 sm:mx-0"
                      alt={cat.label}
                    />
                    <p className="text-base">{cat.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services Designed For Your Business Needs */}
        <section className="mx-auto max-w-screen-2xl flex flex-col px-5 lg:px-10 2xl:px-0">
          <div className="flex pt-4 items-center after:flex-1 after:bg-monochromes-grey_xlight after:h-[1px] mb-4">
            <h1 className="font-bold text-xl mr-2">Services Designed For Your Business Needs</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {[
              { img: 'procurement.jpg', label: 'eProcurement' },
              { img: 'inventory-management.jpg', label: 'Inventory Management' },
              { img: 'safety-service.jpg', label: 'Safety Service' },
            ].map((service, i) => (
              <article key={i} className="bg-white rounded w-full lg:w-4/12">
                <div className="h-[140px] overflow-hidden flex justify-center items-center rounded-t">
                  <img src={img(service.img)} alt="" className="object-cover h-full w-full" />
                </div>
                <div className="p-5 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center">
                  <span className="font-bold text-base">{service.label}</span>
                  <button
                    className="sm:mt-4 lg:mt-0 ml-auto sm:ml-0 lg:ml-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial section */}
        <section
          id="parallax-section"
          className="bg-white rounded pt-16 pb-8 lg:py-16 sm:mx-5 lg:mx-10 2xl:mx-auto mt-4 max-w-screen-2xl overflow-hidden relative"
        >
          <svg
            viewBox="0 0 1536 495"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 bottom-0 hidden h-full sm:block"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1133.28 374.939C1114.11 442.117 1161.97 494.988 1231.25 494.988H1456.81C1500.23 494.988 1553.85 453.196 1566.45 411.333L1588.64 334.172H1452.69L1445.41 356.471C1441.38 369.906 1432.16 376.294 1416.66 376.318H1303.21C1284.82 376.318 1279.49 365.711 1283.34 351.544L1342.05 146.591C1346.66 130.326 1355.41 118.293 1373.79 118.293H1490.88C1506.43 118.293 1511.94 124.669 1508.11 138.117L1499.62 169.078H1635.51L1644.33 138.081C1665.16 69.3589 1613.74 7.68482e-08 1541.95 7.68482e-08H1332.55C1305.93 -0.000942839 1280.03 8.67521 1258.78 24.7155C1237.52 40.7557 1222.07 63.287 1214.75 88.8996L1133.28 374.939ZM1096.1 323.695C1116.92 254.949 1065.51 185.531 993.719 185.531H856.57C838.431 185.236 833.826 173.533 837.772 160.604L842.742 143.161C846.865 130.079 856.382 118.022 873.048 118.376H1121.75L1175.72 7.68482e-08H828.643C765.228 2.86393 723.344 47.3786 712.237 97.6329L687.384 183.515L687.302 183.869C668.127 251.059 715.994 303.93 785.275 303.93L790.269 304.024H935.203C947.029 304.178 956.004 308.244 951.563 323.824L942.329 356.235C937.794 371.486 927.618 376.259 915.192 376.742H645.006L611.378 494.976H962.199C1005.36 494.081 1058.66 452.937 1071.11 411.534L1096.11 323.683L1096.1 323.695ZM497.433 140.391L396.445 495H543.911L684.911 0.0117906H425.962L264.526 270.906L285.539 0.0117906H47.6494L-166 495H-19.7705L140.405 140.391L116.271 495H265.009L497.433 140.391Z"
              fill="#F2F2F2"
            />
          </svg>

          <svg
            viewBox="0 0 358 703"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 bottom-0 sm:hidden"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M270.911 140.658C319.361 154.477 357.492 119.981 357.492 70.0528L357.492 -92.4977C357.492 -123.785 327.351 -162.433 297.159 -171.506L241.509 -187.498L241.509 -89.5267L257.591 -84.281C267.281 -81.3779 271.888 -74.7317 271.905 -63.5612L271.905 18.198C271.905 31.4481 264.255 35.2933 254.038 32.5177L106.223 -9.79639C94.493 -13.1154 85.8145 -19.4221 85.8145 -32.6638L85.8145 -117.046C85.8145 -128.259 90.413 -132.223 100.111 -129.464L122.441 -123.344L122.441 -221.282L100.086 -227.631C50.5225 -242.647 0.499944 -205.587 0.499946 -153.851L0.499953 -2.94629C0.499274 16.2389 6.75662 34.9021 18.325 50.2191C29.8935 65.5361 46.1433 76.6732 64.6155 81.9449L270.911 140.658ZM233.953 167.456C184.372 152.449 134.307 189.5 134.307 241.236L134.307 340.073C134.094 353.145 125.654 356.464 116.33 353.621L103.749 350.039C94.3145 347.068 85.619 340.209 85.874 328.198L85.874 148.968L0.499958 110.075L0.499969 360.199C2.56547 405.9 34.67 436.084 70.914 444.089L132.853 461.999L133.109 462.058C181.567 475.877 219.698 441.381 219.698 391.453L219.766 387.854L219.766 283.406C219.877 274.883 222.809 268.415 234.046 271.615L257.421 278.27C268.42 281.538 271.863 288.872 272.211 297.827L272.211 492.54L357.483 516.774L357.483 263.95C356.837 232.849 327.164 194.432 297.303 185.459L233.944 167.447L233.953 167.456ZM101.752 598.889L357.5 671.668L357.5 565.395L0.508477 463.782L0.508485 650.396L195.881 766.737L0.508489 751.593L0.508497 923.031L357.5 1077L357.5 971.618L101.752 856.186L357.5 873.578L357.5 766.389L101.752 598.889Z"
              fill="#F2F2F2"
            />
          </svg>

          <div className="flex flex-col md:flex-row items-center justify-between max-w-[892px] mx-auto px-10 lg:px-0 w-fit md:w-full z-10 relative">
            <div className="w-full lg:w-1/2 lg:min-h-96 flex lg:pl-[1.2rem] mb-8 lg:mb-0">
              <div className="relative bg-primary-blue_xdark text-white p-8 pr-[100px] rounded-3xl w-full max-w-[80%] sm:max-w-[358px] min-h-[395px]">
                <svg
                  width="53"
                  height="52"
                  viewBox="0 0 53 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-8 left-4 rotate-icon transition-transform duration-[1200ms] ease-out"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <path
                    d="M46.2712 0C49.9894 0 52.8814 2.8628 52.8814 6.44131V35.785C52.8814 39.2613 49.8861 42.2264 46.2712 42.2264H31.3983L18.4878 51.735C17.6615 52.3484 16.5254 51.8372 16.5254 50.8148V42.2264H6.61017C2.89195 42.2264 0 39.3636 0 35.785V6.44131C0 2.8628 2.89195 0 6.61017 0H46.2712ZM24.7881 23.6181V17.0746C24.7881 14.0073 22.206 11.5535 19.0042 11.5535C15.8024 11.5535 13.2203 14.1095 13.2203 17.1768C13.2203 20.2441 15.8024 22.8002 19.0042 22.8002C19.3141 22.8002 19.6239 22.8002 19.9338 22.8002V23.6181C19.9338 25.0495 18.7977 26.072 17.455 26.072C16.009 26.072 14.9762 27.1966 14.9762 28.5258C14.9762 29.9572 16.009 30.9796 17.455 30.9796C21.3798 30.9796 24.7881 27.7079 24.7881 23.6181ZM39.661 23.6181V17.1768C39.661 14.1095 37.0789 11.5535 33.8771 11.5535C30.7786 11.5535 28.0932 14.1095 28.0932 17.1768C28.0932 20.2441 30.7786 22.9024 33.8771 22.9024C34.187 22.9024 34.4968 22.8002 34.8067 22.8002V23.6181C34.8067 25.0495 33.6706 26.072 32.3279 26.072C30.8819 26.072 29.849 27.1966 29.849 28.5258C29.849 29.9572 30.8819 30.9796 32.2246 30.9796C36.2526 30.9796 39.661 27.7079 39.661 23.6181Z"
                    fill="#B3C7F9"
                  />
                </svg>

                <p className="text-sm lg:text-lg font-semibold mb-4">
                  MSC helped this business become more profitable, more efficient, and has driven
                  standardization here. I&apos;m looking forward to the future and what is to come.
                </p>

                <hr className="border-primary-blue_light mb-4" />

                <div className="mb-5">
                  <p className="font-bold">Chris Basgall</p>
                  <p className="text-white text-xs">Owner, Catamount Machine Works</p>
                </div>

                <div className="w-24 bg-white rounded-md flex items-center justify-center">
                  <img src={img('logo-lon.png')} alt="" />
                </div>

                <div className="absolute -right-[73px] top-0 flex items-center h-full">
                  <img
                    src={img('testimonial.png')}
                    alt="Chris Basgall"
                    className="h-[250px] testimonial-image transition-transform duration-[1200ms] ease-out"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:min-h-96 flex items-center md:pl-[60px]">
              <div className="w-full lg:flex-1 text-left max-w-[450px] lg:pt-0">
                <h2 className="text-[28px] font-bold">Success Stories</h2>
                <hr className="w-12 border-2 border-black my-5" />
                <p className="text-gray-700 mb-8 text-sm">
                  In this compelling case study, Chris Basgall and the team at Catamount share their
                  journey of partnering with MSC to drive efficiency, reduce costs, and enhance
                  productivity.
                </p>
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full transition"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Promo Sections */}
        <section className="mx-auto max-w-screen-2xl flex flex-col px-5 lg:px-10 2xl:px-0">
          <article className="p-3 w-full flex items-center justify-center bg-white font-bold my-4 text-center">
            <span>
              Have a Question? We&apos;re here to help Call:
              <a href="#" className="text-primary-blue_dark">
                1-800-645-7270
              </a>{' '}
              or Email
              <a href="mailto:support@mscdirect.com" className="text-primary-blue_dark">
                support@mscdirect.com
              </a>
            </span>
          </article>

          <div className="flex flex-col md:flex-row gap-4">
            <article className="w-full md:w-6/12 bg-white rounded flex flex-col sm:flex-row">
              <div className="order-2 sm:order-1 p-5 sm:w-6/12 flex flex-col justify-center">
                <b className="font-bold text-base">Save with our sales flyers</b>
                <p className="text-sm mb-4">
                  This body copy area can support up to 108 cc max including spaces and the text can
                  wrap to container.
                </p>
                <button
                  className="px-2 w-fit md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
                  type="button"
                >
                  Shop Clearance
                </button>
              </div>
              <div className="order-1 sm:order-2 sm:w-6/12 overflow-hidden flex items-center justify-center rounded-r">
                <img
                  src={img('save-our-sales.jpg')}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </article>

            <article className="w-full md:w-6/12 bg-white rounded flex flex-col sm:flex-row">
              <div className="p-5 sm:w-6/12 flex flex-col items-start order-2 sm:order-1">
                <b className="font-bold text-base">Exclusive Brands Clearance</b>
                <p className="text-sm mb-4">
                  This body copy area can support up to 108 cc max including spaces and the text can
                  wrap to container.
                </p>
                <button
                  className="mt-auto px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
                  type="button"
                >
                  Shop Clearance
                </button>
              </div>
              <div className="sm:w-6/12 overflow-hidden flex items-center justify-center rounded-l order-1 sm:order-2">
                <img
                  src={img('exclusive-brand.jpg')}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
            {[
              { img: 'two-ine.jpg' },
              { img: 'rigid.jpg' },
              { img: 'gloves.jpg' },
              { img: 'dactory.jpg' },
            ].map((item, i) => (
              <article key={i} className="bg-white rounded">
                <div className="h-[140px] overflow-hidden rounded-t">
                  <img src={img(item.img)} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col items-start">
                  <p className="font-bold text-base mb-4">
                    This is a Line Can Take up to 48CC Max or 2 line
                  </p>
                  <button
                    className="px-2 md:px-5 rounded-full font-bold cursor-pointer min-w-24 md:min-w-32 bg-transparent border text-primary-blue_dark border-primary-blue_dark text-sm py-1 hover:bg-primary-blue_xlight"
                    type="button"
                  >
                    Shop Clearance
                  </button>
                </div>
              </article>
            ))}
          </div>

          <article className="bg-white rounded p-6 mb-6">
            <h3 className="text-xl mb-4 font-bold">MSC Industrial Supply Co.</h3>
            <p className="text-sm mb-4 text-monochromes-grey">
              MSC Industrial Supply, Inc. is a leading North American distributor of metalworking
              and
              <a href="#" className="text-black underline">
                maintenance
              </a>
              , repair and operations
              <a href="#" className="text-black underline">
                (MRO) products
              </a>{' '}
              and services. With over 75 years of experience, MSC is dedicated to helping customers
              drive greater productivity, profitability and growth. MSC features over 1.5 million
              products ready-to-ship. Our inventory management and other supply chain solutions
              ensure that your workforce and facility are supplied with equipment that is reliable,
              durable and accurate for every operation.
            </p>

            <p className="text-sm text-monochromes-grey">
              We are your steadfast partner in providing innovative solutions that deliver. That
              includes our knowledgeable customer service associates who strive to ensure that every
              customer is provided with the best possible shopping experience - first time, every
              time.
            </p>
          </article>
        </section>

        <div id="icon-bigbook" className="hidden lg:inline-block absolute top-20 left-0">
          <img
            src="https://cdn.mscdirect.com/global/v2/img/side-icons/bigbook-button.svg"
            alt="view the big book"
          />
        </div>

        <div id="icon-contact-us" className="hidden lg:inline-block absolute top-20 right-0">
          <img src={img('feedback.png')} alt="Give us feedback" />
        </div>
      </section>
    </ComponentLayout>
  );
};

export default MscLabHomepagePage;
