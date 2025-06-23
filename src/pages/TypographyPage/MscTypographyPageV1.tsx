import { useState } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import MscComponentSnippet from '../../components/MscComponentSnippet/MscComponentSnippet';
import { typographyCode } from './constants';

const MscTypographyPageV1 = () => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="font-mono">
			<div className="msc-input-wrapper mb-4">
				<input
					id="default"
					type="text"
					placeholder="Default"
					className="msc-input peer max-w-sm"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<label htmlFor="default" className="msc-input-label">
					Test Text
				</label>
			</div>

			<span className="text-sm font-semibold">
				You are on screen Size:
				<span className="inline lg:hidden"> Mobile</span>
				<span className="hidden lg:inline"> Desktop</span>
			</span>

			<MscComponentSnippet code={typographyCode} className="mt-3">
				<section className="flex flex-col lg:flex-row justify-between">
					<div>
						<p className="text-[#9747FF]">Mono </p>
						<p className="text-[#9747FF] mb-6"> Headers - LG 1025+</p>

						<h1>{inputValue || 'H1 Typography'}</h1>
						<p className="text-[#9747FF] mb-4">SIZE: 2.00REM / LINE-HEIGHT: 2.50REM</p>

						<h2>{inputValue || 'H2 Typography'}</h2>
						<p className="text-[#9747FF] mb-4">SIZE: 1.75REM / LINE-HEIGHT: 2.25REM</p>

						<h3>{inputValue || 'H3 Typography'}</h3>
						<p className="text-[#9747FF] mb-4">SIZE: 1.50REM / LINE-HEIGHT: 2.00REM</p>

						<h4>{inputValue || 'H4 Typography'}</h4>
						<p className="text-[#9747FF] mb-4">SIZE: 2.00REM / LINE-HEIGHT: 2.50REM</p>

						<h5>{inputValue || 'H5 Typography'}</h5>
						<p className="text-[#9747FF] mb-4">SIZE: 1.00REM / LINE-HEIGHT: 1.50REM</p>

						<h6>{inputValue || 'H6 Typography'}</h6>
						<p className="text-[#9747FF] mb-4">SIZE: 0.875REM / LINE-HEIGHT: 1.25REM</p>
					</div>

					<div>
						<p className="text-[#9747FF]">Arial Bold</p>
						<p className="text-[#9747FF] mb-6">Headers - SM 0-1024</p>

						<h1 className="text-[1.75rem]">{inputValue || 'H1 Typography'}</h1>
						<p className="text-[#9747FF] mb-4">SIZE: 1.75REM / LINE-HEIGHT: 2.25REM</p>

						<h2 className="text-[1.5rem]">{inputValue || 'H2 Typography'}</h2>
						<p className="text-[#9747FF] mb-4">SIZE: 1.50REM / LINE-HEIGHT: 2.00REM</p>

						<h3 className="text-[1.25rem]">{inputValue || 'H3 Typography'}</h3>
						<p className="text-[#9747FF] mb-4">SIZE: 1.25REM / LINE-HEIGHT: 1.75REM</p>

						<h4 className="text-[1rem]">{inputValue || 'H4 Typography'}</h4>
						<p className="text-[#9747FF] mb-4">SIZE: 1.00REM / LINE-HEIGHT: 1.50REM</p>

						<h5 className="text-[0.875rem]">{inputValue || 'H5 Typography'}</h5>
						<p className="text-[#9747FF] mb-4">SIZE: 0.875REM / LINE-HEIGHT: 1.25REM</p>

						<h6 className="text-[0.75rem]">{inputValue || 'H6 Typography'}</h6>
						<p className="text-[#9747FF] mb-4">SIZE: 0.75REM / LINE-HEIGHT: 1.00REM</p>
					</div>

					<div>
						<p className="text-[#9747FF]">Body</p>
						<p className="text-[#9747FF] mb-6">SIZE: 0.875REM / LINE-HEIGHT: 1.25REM</p>

						<p className="mb-6">Typography</p>

						<p className="text-[#9747FF]">Overline</p>
						<p className="text-[#9747FF] mb-6">SIZE: 0.75REM / LINE-HEIGHT: 1.00REM</p>

						<p className="font-bold uppercase">Typography</p>

						<p className="text-[#9747FF]">Caption</p>
						<p className="text-[#9747FF] mb-6">SIZE: 0.75REM / LINE-HEIGHT: 1.00REM</p>

						<p>Typography</p>
					</div>

					<div>
						<p className="text-[#9747FF]">Helper text</p>
						<p className="text-[#9747FF] mb-6">SIZE: 0.75REM / LINE-HEIGHT: 1.00REM</p>

						<p className="mb-6 font-bold">Typography</p>

						<p className="text-[#9747FF]">Custom</p>
						<p className="text-[#9747FF] mb-6">SIZE: 0.875REM / LINE-HEIGHT: 1.25REM</p>

						<p className="mb-6">Typography</p>
					</div>
				</section>
			</MscComponentSnippet>
		</div>
	);
};

export default MscTypographyPageV1;
