import { ThemeProvider } from 'styled-components';
import { DropdownProvider, LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';
import '@admiral-ds/fonts/VTBGroupUI.css';
import { AdmiralAccordion } from './AdmiralAccordion';
import { AdmiralDropdown } from './AdmiralDropdown';
import { AdmiralModal } from './AdmiralModal';
import { AdmiralTable } from './AdmiralTable';
import type {
	AccordionArrowPosition,
	AccordionLineCount,
	Appearance,
	DropdownMode
} from '../types';

export interface Props {
	component: string;
	theme: 'light' | 'dark';
	appearance: Appearance;
	color: string;
	fieldCount?: number;
	tableGroupActions?: boolean;
	tableRowDrag?: boolean;
	tableZebra?: boolean;
	dropdownMode?: DropdownMode;
	accordionArrowPosition?: AccordionArrowPosition;
	accordionLineCount?: AccordionLineCount;
	isTablet: boolean;
	isMobile: boolean;
}

const setMainLightThemeColors = (mainColor: string) => {
	const colorTheme = LIGHT_THEME;
	switch (mainColor) {
		case 'cyan':
			colorTheme.color['Primary/Primary 10'] = '#E5F6FF';
			colorTheme.color['Primary/Primary 20'] = '#C4EAFF';
			colorTheme.color['Primary/Primary 30'] = '#82CFFF';
			colorTheme.color['Primary/Primary 40'] = '#33B1FF';
			colorTheme.color['Primary/Primary 50'] = '#1192E8';
			colorTheme.color['Primary/Primary 60 Main'] = '#0072C3';
			colorTheme.color['Primary/Primary 70'] = '#00539A';
			colorTheme.color['Primary/Primary 80'] = '#003A6D';
			break;
		case 'purple':
			colorTheme.color['Primary/Primary 10'] = '#F6F2FF';
			colorTheme.color['Primary/Primary 20'] = '#EBE0FF';
			colorTheme.color['Primary/Primary 30'] = '#D4BBFF';
			colorTheme.color['Primary/Primary 40'] = '#BE95FF';
			colorTheme.color['Primary/Primary 50'] = '#A56EFF';
			colorTheme.color['Primary/Primary 60 Main'] = '#8A3FFC';
			colorTheme.color['Primary/Primary 70'] = '#6929C4';
			colorTheme.color['Primary/Primary 80'] = '#491D8B';
			break;
		case 'teal':
			colorTheme.color['Primary/Primary 10'] = '#D9FBFB';
			colorTheme.color['Primary/Primary 20'] = '#B0F0F0';
			colorTheme.color['Primary/Primary 30'] = '#3DDBD9';
			colorTheme.color['Primary/Primary 40'] = '#08BDBA';
			colorTheme.color['Primary/Primary 50'] = '#009D9A';
			colorTheme.color['Primary/Primary 60 Main'] = '#007D79';
			colorTheme.color['Primary/Primary 70'] = '#005D5D';
			colorTheme.color['Primary/Primary 80'] = '#004144';
			break;
		case 'magenta':
			colorTheme.color['Primary/Primary 10'] = '#FFF0F7';
			colorTheme.color['Primary/Primary 20'] = '#FFDBEB';
			colorTheme.color['Primary/Primary 30'] = '#FFAFD2';
			colorTheme.color['Primary/Primary 40'] = '#FF7EB6';
			colorTheme.color['Primary/Primary 50'] = '#EE5396';
			colorTheme.color['Primary/Primary 60 Main'] = '#D02670';
			colorTheme.color['Primary/Primary 70'] = '#9F1853';
			colorTheme.color['Primary/Primary 80'] = '#740937';
			break;
		case 'blue':
		default:
			colorTheme.color['Primary/Primary 10'] = '#EDF5FF';
			colorTheme.color['Primary/Primary 20'] = '#DDE9FF';
			colorTheme.color['Primary/Primary 30'] = '#A7C7FF';
			colorTheme.color['Primary/Primary 40'] = '#6FA3FF';
			colorTheme.color['Primary/Primary 50'] = '#3A85FF';
			colorTheme.color['Primary/Primary 60 Main'] = '#0062FF';
			colorTheme.color['Primary/Primary 70'] = '#0046E2';
			colorTheme.color['Primary/Primary 80'] = '#0132B0';
			break;
	}
	return colorTheme;
};

const setMainDarkThemeColors = (mainColor: string) => {
	const colorTheme = DARK_THEME;
	switch (mainColor) {
		case 'cyan':
			colorTheme.color['Primary/Primary 10'] = '#202021';
			colorTheme.color['Primary/Primary 20'] = '#002D56';
			colorTheme.color['Primary/Primary 30'] = '#003A6D';
			colorTheme.color['Primary/Primary 40'] = '#00539A';
			colorTheme.color['Primary/Primary 50'] = '#0072C3';
			colorTheme.color['Primary/Primary 60 Main'] = '#0E8CE1';
			colorTheme.color['Primary/Primary 70'] = '#28A6F6';
			colorTheme.color['Primary/Primary 80'] = '#70C7FD';
			break;
		case 'purple':
			colorTheme.color['Primary/Primary 10'] = '#1F2024';
			colorTheme.color['Primary/Primary 20'] = '#391968';
			colorTheme.color['Primary/Primary 30'] = '#491D8B';
			colorTheme.color['Primary/Primary 40'] = '#6929C4';
			colorTheme.color['Primary/Primary 50'] = '#8A3FFC';
			colorTheme.color['Primary/Primary 60 Main'] = '#A065FE';
			colorTheme.color['Primary/Primary 70'] = '#B587FF';
			colorTheme.color['Primary/Primary 80'] = '#CEB1FF';
			break;
		case 'teal':
			colorTheme.color['Primary/Primary 10'] = '#202021';
			colorTheme.color['Primary/Primary 20'] = '#023136';
			colorTheme.color['Primary/Primary 30'] = '#004144';
			colorTheme.color['Primary/Primary 40'] = '#005D5D';
			colorTheme.color['Primary/Primary 50'] = '#007D79';
			colorTheme.color['Primary/Primary 60 Main'] = '#009692';
			colorTheme.color['Primary/Primary 70'] = '#06B2AF';
			colorTheme.color['Primary/Primary 80'] = '#2FD2CF';
			break;
		case 'magenta':
			colorTheme.color['Primary/Primary 10'] = '#202021';
			colorTheme.color['Primary/Primary 20'] = '#510224';
			colorTheme.color['Primary/Primary 30'] = '#740937';
			colorTheme.color['Primary/Primary 40'] = '#9F1853';
			colorTheme.color['Primary/Primary 50'] = '#D02670';
			colorTheme.color['Primary/Primary 60 Main'] = '#D02670';
			colorTheme.color['Primary/Primary 70'] = '#F970AB';
			colorTheme.color['Primary/Primary 80'] = '#FEA2CA';
			break;
		case 'blue':
		default:
			colorTheme.color['Primary/Primary 10'] = '#1F2024';
			colorTheme.color['Primary/Primary 20'] = '#162B67';
			colorTheme.color['Primary/Primary 30'] = '#022D9A';
			colorTheme.color['Primary/Primary 40'] = '#0142D3';
			colorTheme.color['Primary/Primary 50'] = '#0062FF';
			colorTheme.color['Primary/Primary 60 Main'] = '#3984FF';
			colorTheme.color['Primary/Primary 70'] = '#5290FF';
			colorTheme.color['Primary/Primary 80'] = '#689FFF';
			break;
	}
	return colorTheme;
};

const setMainThemeColors = (theme: 'light' | 'dark', mainColor: string) => {
	return theme === 'light' ? setMainLightThemeColors(mainColor) : setMainDarkThemeColors(mainColor);
};

export const WrappedReactComponent = ({
	component,
	theme,
	appearance,
	color,
	fieldCount,
	tableGroupActions,
	tableRowDrag,
	tableZebra,
	dropdownMode,
	accordionArrowPosition,
	accordionLineCount,
	isTablet,
	isMobile
}: Props) => {
	const colorTheme = setMainThemeColors(theme, color);
	const getComponent = () => {
		switch (component) {
			case 'Table':
				return (
					<AdmiralTable
						dimension={appearance}
						tableGroupActions={tableGroupActions}
						tableRowDrag={tableRowDrag}
						tableZebra={tableZebra}
						isTablet={isTablet}
					/>
				);
			case 'Accordion':
				return (
					<AdmiralAccordion
						accordionArrowPosition={accordionArrowPosition}
						accordionLineCount={accordionLineCount}
					/>
				);
			case 'Dropdown':
				return <AdmiralDropdown dimension={appearance} dropdownMode={dropdownMode} />;
			case 'Modal':
			default:
				return <AdmiralModal isMobile={isMobile} dimension={appearance} fieldCount={fieldCount} />;
		}
	};

	return (
		<ThemeProvider theme={colorTheme}>
			<DropdownProvider>{getComponent()}</DropdownProvider>
		</ThemeProvider>
	);
};
