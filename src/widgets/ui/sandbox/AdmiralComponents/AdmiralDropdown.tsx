import * as React from 'react';
import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import { Field, MenuActionsPanel, Option, Select, TextButton } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';
import type { Appearance, DropdownMode } from '../types';
import { MOBILE_QUERY } from '$shared/ui/useMediaQuery';

const OPTIONS_CITIES = ['Архангельск', 'Барнаул', 'Воронеж', 'Москва', 'Нальчик'];

type AdmiralTheme = DefaultTheme & { color: Record<string, string> };

const StyledDropdown = styled(Select)`
	padding: 12px;
	background: ${({ theme }) => (theme as AdmiralTheme).color['Neutral/Neutral 00']};
	overflow: hidden;
	width: 408px;

	@media ${MOBILE_QUERY} {
		width: 316px;
	}
`;

export interface AdmiralDropdownProps {
	dimension: Appearance;
	dropdownMode?: DropdownMode;
}

export const AdmiralDropdown = ({ dimension, dropdownMode }: AdmiralDropdownProps) => {
	const restrictions: number[] = [];
	const [value, setValue] = React.useState<string | string[]>('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_searchValue, setSearchValue] = React.useState<string>('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [optionsWithoutDisabled, _setOptionsWithoutDisabled] = React.useState<string[]>([
		...OPTIONS_CITIES.filter((_, ind) => !restrictions.includes(ind))
	]);

	const isMultiselect = dropdownMode === 'multiselect';

	const renderOptions = () => {
		return OPTIONS_CITIES.map((option, ind) => (
			<Option key={option} value={option} disabled={restrictions.includes(ind)}>
				{option}
			</Option>
		));
	};

	const handleSelectedChange = (nextValue: string | Array<string>) => {
		setValue(nextValue);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

	const handleChooseAll = () => {
		if (isMultiselect) {
			setValue(optionsWithoutDisabled);
		}
	};

	const controlDimension = dimension === undefined || dimension === 'xl' ? 'l' : dimension;

	const selectMode = isMultiselect ? 'searchSelect' : 'select';

	const selectedLength = Array.isArray(value) ? value.length : value ? 1 : 0;

	return (
		<Field label="Выберите города" id="propsId">
			<StyledDropdown
				dimension={dimension}
				id="propsId"
				placeholder="Города"
				value={value}
				onSelectedChange={handleSelectedChange}
				onInputChange={handleInputChange}
				dropContainerClassName="dropContainerClass"
				mode={selectMode}
				multiple={isMultiselect}
				moveSelectedOnTop={isMultiselect}
				showCheckbox={isMultiselect}
				displayClearIcon={true}
				renderBottomPanel={
					isMultiselect
						? ({ dimension = controlDimension }) => {
								return (
									<MenuActionsPanel dimension={dimension}>
										<TextButton
											onClick={handleChooseAll}
											dimension="m"
											appearance={'primary'}
											disabled={selectedLength === optionsWithoutDisabled.length}
											text="Выбрать все"
										/>
									</MenuActionsPanel>
								);
							}
						: undefined
				}
			>
				{renderOptions()}
			</StyledDropdown>
		</Field>
	);
};
