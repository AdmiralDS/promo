import * as React from 'react';

import { Field, MenuActionsPanel, Option, Select, TextButton } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';
import type { Appearance } from '../types';

const OPTIONS_CITIES = ['Архангельск', 'Барнаул', 'Воронеж', 'Москва', 'Нальчик'];

export interface AdmiralDropdownProps {
	dimension: Appearance;
}

export const AdmiralDropdown = ({ dimension }: AdmiralDropdownProps) => {
	const restrictions: number[] = [];
	const [selectValues, setSelectValues] = React.useState<string[]>([]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_searchValue, setSearchValue] = React.useState<string>('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [optionsWithoutDisabled, _setOptionsWithoutDisabled] = React.useState<string[]>([
		...OPTIONS_CITIES.filter((_, ind) => !restrictions.includes(ind))
	]);

	const renderOptions = () => {
		return OPTIONS_CITIES.map((option, ind) => (
			<Option key={option} value={option} disabled={restrictions.includes(ind)}>
				{option}
			</Option>
		));
	};

	const handleSelectedChange = (value: string | Array<string>) => {
		if (Array.isArray(value)) setSelectValues(value);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

	const handleChooseAll = () => {
		setSelectValues(optionsWithoutDisabled);
	};

	const controlDimension = dimension === undefined || dimension === 'xl' ? 'l' : dimension;

	return (
		<Field label="Выберите города" id="propsId">
			<Select
				dimension={dimension}
				id="propsId"
				placeholder="Города"
				value={selectValues}
				onSelectedChange={handleSelectedChange}
				onInputChange={handleInputChange}
				dropContainerClassName="dropContainerClass"
				mode="searchSelect"
				multiple={true}
				moveSelectedOnTop={true}
				showCheckbox={true}
				displayClearIcon={true}
				renderBottomPanel={({ dimension = controlDimension }) => {
					return (
						<MenuActionsPanel dimension={dimension}>
							<TextButton
								onClick={handleChooseAll}
								dimension='m'
								appearance={'primary'}
								disabled={selectValues.length === optionsWithoutDisabled.length}
								text="Выбрать все"
							/>
						</MenuActionsPanel>
					);
				}}
			>
				{renderOptions()}
			</Select>
		</Field>
	);
};
