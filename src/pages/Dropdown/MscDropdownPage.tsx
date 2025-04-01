import { useState } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import Codeblock from '../../layout/Codeblock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const MscDropdownPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOptionSelected, setIsOptionSelected] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);
	const [selectedDoubleValue, setSelectedDoubleValue] = useState({
		p1: 'Est. Wed, Apr 03 from PA',
		p2: 'Standard UPS Ground'
	});
	const [selectedNumericValue, setSelectedNumericValue] = useState();
	const options = ['Buyer 1', 'Buyer 2', 'Buyer 3'];
	const numericOptions = ['25', '50', '75', '100'];
	const doubleOptions = [
		{
			p1: 'Est. Thu, Apr 04 from PA',
			p2: 'UPS Ground Freight Saver'
		},
		{
			p1: 'Est. Wed, Apr 03 from PA',
			p2: '1 Day UPS Air (Red)'
		},
		{
			p1: 'Est. Thu, Apr 03 from PA',
			p2: '1 Day UPS (Early AM)'
		}
	];
	const placeholder = 'Placeholder';

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleNumericOptionClick = (value: any) => {
		setSelectedNumericValue(value);
		setIsOpen(false);
	};

	const handleNumericInput = (e: any) => {
		e.preventDefault();
		setIsOpen(false);
		setSelectedNumericValue(e.target.value);
	};

	const handleOptionClick = (option: any) => {
		setSelectedValue(option);
		setIsOpen(!isOpen);
		setIsOptionSelected(true);
	};
	const handleDoubleOptionClick = (option: any) => {
		setSelectedDoubleValue(option);
		setIsOpen(!isOpen);
		setIsOptionSelected(true);
	};

	return (
		<ComponentLayout>
			<div>
				<h3 className="mb-2">Default</h3>
				<div className={`dropdown-container ${isOpen ? 'dropdown-active' : ''} !w-[400px]`} onClick={toggleDropdown}>
					<button className="dropdown-button">
						<p className="dropdown-placeholder">
							{selectedValue ?? placeholder} <span className="text-red-600">*</span>
						</p>
						<FontAwesomeIcon icon={faCaretDown} />
					</button>
					<div className={`dropdown-options-container ${isOpen ? '' : 'hidden'}`}>
						{options.map((option, index) => (
							<div key={index} className="dropdown-option" onClick={() => handleOptionClick(option)}>
								{option}
							</div>
						))}
					</div>
				</div>
				<div className="my-5">
					<Codeblock>
						{`
    <div id="dropdown" class="dropdown-container">
      <button class="dropdown-button">
        <p class="dropdown-placeholder">
          Select a Buyer <span class="text-red-600">*</span>
        </p>
        <img src="../assets/caret-down.svg" />
      </button>
      <div id="options" class="dropdown-options-container hidden">
        <div class="dropdown-option">Buyer 1</div>
        <div class="dropdown-option">Buyer 2</div>
        <div class="dropdown-option">Buyer 3</div>
      </div>
    </div>
      <!-- JS -->
    <script>
    let numDropdown = document.getElementById("numDropdown");
    let numOptions = document.getElementById("numOptions");
    
    numDropdown.addEventListener("click", function () {
      numDropdown.classList.toggle("dropdown-active");
      numOptions.classList.toggle("hidden");
    });
    </script>
          `}
					</Codeblock>
				</div>
			</div>
			<div>
				<h3 className="mb-2">With Label</h3>
				<div className="dropdown-label">
					<p>Label</p>
					<div className={`dropdown-container ${isOpen ? 'dropdown-active' : ''} !w-[400px]`} onClick={toggleDropdown}>
						<button className="dropdown-button">
							<p className="dropdown-placeholder">
								{selectedValue ?? placeholder} <span className="text-red-600">*</span>
							</p>
							<FontAwesomeIcon icon={faCaretDown} />
						</button>
						<div className={`dropdown-options-container ${isOpen ? '' : 'hidden'}`}>
							{options.map((option, index) => (
								<div key={index} className="dropdown-option" onClick={() => handleOptionClick(option)}>
									{option}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="mt-5">
					<Codeblock>
						{`
    <div class="dropdown-label">
      <p>Label</p>
      <div id="dropdownTwo" class="dropdown-container">
        <button class="dropdown-button">
          <p class="dropdown-placeholder">
            Select a Buyer <span class="text-red-600">*</span>
          </p>
          <img src="../assets/caret-down.svg" />
        </button>
        <div id="dropdownTwoOptions" class="dropdown-options-container hidden">
          <div class="dropdown-option">Buyer 1</div>
          <div class="dropdown-option">Buyer 2</div>
          <div class="dropdown-option">Buyer 3</div>
        </div>
      </div>
    </div>
    <!-- JS -->
    <script>
    let dropdownTwo = document.getElementById("dropdownTwo");
    let dropdownTwoOptions = document.getElementById("dropdownTwoOptions");
    
    dropdownTwo.addEventListener("click", function () {
      dropdownTwo.classList.toggle("dropdown-active");
      dropdownTwoOptions.classList.toggle("hidden");
    });
    </script>
          `}
					</Codeblock>
				</div>
			</div>
			<div>
				<h3 className="mb-2">With Label on top</h3>
				<div className={`dropdown-container ${isOpen ? 'dropdown-active' : ''} !w-[400px]`} onClick={toggleDropdown}>
					<p className={`dropdown-label-top ${isOptionSelected ? '' : 'hidden'}`}>{placeholder}</p>
					<button className="dropdown-button">
						<p className={`dropdown-placeholder `}>{selectedValue ?? placeholder}</p>
						<FontAwesomeIcon icon={faCaretDown} />
					</button>
					<div className={`dropdown-options-container ${isOpen ? '' : 'hidden'}`}>
						{options.map((option, index) => (
							<div key={index} className="dropdown-option" onClick={() => handleOptionClick(option)}>
								{option}
							</div>
						))}
					</div>
				</div>
				<div className="mt-5">
					<Codeblock>
						{`
    <div id="dropdownThree" class="dropdown-container">
      <p id="labelTop" class="dropdown-label-top hidden">
        Select a Buyer
      </p>
      <button class="dropdown-button">
        <p id="dropPlaceholder" class="dropdown-placeholder">
          Select a Buyer
        </p>
        <img src="../assets/caret-down.svg" />
      </button>
      <div id="dropdownThreeOptions" class="dropdown-options-container hidden">
        <div id="dropOption" class="dropdown-option">Buyer 1</div>
      </div>
    </div>
    <!-- JS -->
    <script>
    let dropdownThree = document.getElementById("dropdownThree");
    let dropdownThreeOptions = document.getElementById("dropdownThreeOptions");
    let dropOption = document.getElementById("dropOption");
    let labelTop = document.getElementById("labelTop");
    let dropPlaceholder = document.getElementById("dropPlaceholder");
  
    dropdownThree.addEventListener("click", function () {
      dropdownThree.classList.toggle("dropdown-active");
      dropdownThreeOptions.classList.toggle("hidden");
    });
    dropOption.addEventListener("click", function () {
      labelTop.classList.toggle("hidden");
      dropPlaceholder.classList.toggle("text-transparent");
    });
    </script>
          `}
					</Codeblock>
				</div>
			</div>
			<div>
				<h3 className="mb-2">Double Line</h3>
				<div
					className={`msc-double-dropdown-container ${isOpen ? 'double-dropdown-active' : ''} !w-[400px]`}
					onClick={toggleDropdown}
				>
					<button className="dropdown-button">
						<div className="text-left">
							{selectedDoubleValue ? (
								<>
									<p className="text-sm">
										{selectedDoubleValue.p1.slice(0, 5)}
										<b>{selectedDoubleValue.p1.slice(5, 16)}</b>
										{selectedDoubleValue.p1.slice(16, 24)}
									</p>
									<p className="text-xs">{selectedDoubleValue.p2}</p>
								</>
							) : (
								<>
									<p className="text-sm">
										Est. <b>Wed, Apr 03</b> from PA
									</p>
									<p className="text-xs">Standard UPS Ground</p>
								</>
							)}
						</div>
						<FontAwesomeIcon icon={faCaretDown} />
					</button>
					<div className={`double-dropdown-options-container ${isOpen ? '' : 'hidden'}`}>
						{doubleOptions.map((option, index) => (
							<div
								key={index}
								className="double-dropdown-option text-left"
								onClick={() => handleDoubleOptionClick(option)}
							>
								<p className="text-sm">
									{option.p1.slice(0, 5)}
									<b>{option.p1.slice(5, 16)}</b>
									{option.p1.slice(16, 24)}
								</p>
								<p className="text-xs">{option.p2}</p>
							</div>
						))}
					</div>
				</div>
				<div className="mt-5">
					<Codeblock>
						{`
    <div id="double-dropdown" class="msc-double-dropdown-container">
      <button class="dropdown-button">
        <div class="text-left">
          <p class="text-sm">Est. <b>Wed, Apr 03</b> from PA</p>
          <p class="text-xs">Standard UPS Ground</p>
        </div>
        <img src="../assets/caret-down.svg" />
      </button>
      <div
        id="double-options"
        class="double-dropdown-options-container hidden"
      >
        <div class="double-dropdown-option text-left">
          <p class="text-sm">Est. <b>Thu, Apr 04</b> from PA</p>
          <p class="text-xs">UPS Ground Freight Saver</p>
        </div>
      </div>
    </div>
    <!-- JS -->
    <script>
      let doubleDropdown = document.getElementById("double-dropdown");
      let doubleOptions = document.getElementById("double-options");
  
      doubleDropdown.addEventListener("click", function () {
        doubleDropdown.classList.toggle("double-dropdown-active");
        doubleOptions.classList.toggle("hidden");
      });
    </script>
          `}
					</Codeblock>
				</div>
			</div>
			<div>
				<h3 className="mb-2">Numeric</h3>
				<div className={`numeric-dropdown-container ${isOpen ? 'dropdown-active' : ''}`} onClick={toggleDropdown}>
					<div className="numeric-dropdown">
						<input
							type="number"
							placeholder="25"
							className="numeric-dropdown-input"
							onChange={handleNumericInput}
							value={selectedNumericValue || ''}
						/>
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
					{isOpen && (
						<div className="numeric-dropdown-options-container !relative !right-[75px] top-1">
							{numericOptions.map((option) => (
								<div key={option} className="numeric-dropdown-options" onClick={() => handleNumericOptionClick(option)}>
									{option}
								</div>
							))}
						</div>
					)}
				</div>
				<div className="mt-5">
					<Codeblock>
						{`
    <div id="numDropdown" class="numeric-dropdown-container">
      <div class="numeric-dropdown">
        <input type="text" placeholder="25" class="numeric-dropdown-input" />
        <img src="../assets/caret-down.svg" />
      </div>
      <div id="numOptions" class="numeric-dropdown-options-container hidden">
        <div class="numeric-dropdown-options">25</div>
        <div class="numeric-dropdown-options">50</div>
        <div class="numeric-dropdown-options">75</div>
        <div class="numeric-dropdown-options">100</div>
      </div>
    </div>
    <!-- JS -->
    <script>
    let numDropdown = document.getElementById("numDropdown");
    let numOptions = document.getElementById("numOptions");
    
    numDropdown.addEventListener("click", function () {
      numDropdown.classList.toggle("dropdown-active");
      numOptions.classList.toggle("hidden");
    });
    </script>
          `}
					</Codeblock>
				</div>
			</div>
			<div>
				<h3 className="mb-2">Error</h3>
				<div>
					<div className="dropdown-container dropdown-error !w-[400px]">
						<button className="dropdown-button">
							<p className="dropdown-placeholder dropdown-error">{placeholder} *</p>
							<FontAwesomeIcon icon={faCaretDown} />
						</button>
					</div>
					<p className="dropdown-error-message">Error Message</p>
				</div>
				<div className="mt-5">
					<Codeblock>
						{`
    <div>
      <div id="dropdownDisabled" class="dropdown-container dropdown-error">
        <button class="dropdown-button">
          <p class="dropdown-placeholder dropdown-error">Select a Buyer *</p>
          <img src="../assets/caret-down-error.svg" />
        </button>
      </div>
      <p class="dropdown-error-message">Error Message</p>
    </div>
          `}
					</Codeblock>
				</div>
			</div>
			<div>
				<h3 className="mb-2">Disabled</h3>
				<div className="dropdown-label dropdown-disabled">
					<p>Label</p>
					<div className="dropdown-container dropdown-disabled !w-[400px]">
						<button className="dropdown-button dropdown-disabled" disabled>
							<p className="dropdown-placeholder dropdown-disabled">
								{placeholder} <span className="text-red-600">*</span>
							</p>
							<FontAwesomeIcon icon={faCaretDown} />
						</button>
					</div>
				</div>
				<div className="mt-5">
					<Codeblock>
						{`
    <div class="dropdown-label">
      <p>Label</p>
      <div id="dropdownDisabled" class="dropdown-container">
        <button class="dropdown-button">
          <p class="dropdown-placeholder">
            Select a Buyer <span class="text-red-600">*</span>
          </p>
          <img src="../assets/caret-down.svg" />
        </button>
      </div>
    </div>
          `}
					</Codeblock>
				</div>
			</div>
		</ComponentLayout>
	);
};

export default MscDropdownPage;
