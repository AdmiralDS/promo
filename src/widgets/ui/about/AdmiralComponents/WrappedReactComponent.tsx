import { ThemeProvider } from 'styled-components';
import { DropdownProvider, LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';
import '@admiral-ds/fonts/VTBGroupUI.css';
import { AdmiralCalendar } from './AdmiralCalendar';
import { AdmiralButtons } from './AdmiralButtons';
import { AdmiralPagination } from './AdmiralPagination';
import { AdmiralProgressPage } from './AdmiralProgressPage';
import { AdmiralSliderRange } from './AdmiralSliderRange';
import { AdmiralStepper } from './AdmiralStepper';
import { AdmiralContentSwitcher } from './AdmiralContentSwitcher';
import { AdmiralCheckboxGroup } from './AdmiralCheckboxGroup';

export interface Props {
	component: string;
	theme: 'light' | 'dark';
}

const setMainLightThemeColors = () => {
	const colorTheme = LIGHT_THEME;
	return colorTheme;
};

const setMainDarkThemeColors = () => {
	const colorTheme = DARK_THEME;
	return colorTheme;
};

const setMainThemeColors = (theme: 'light' | 'dark') => {
	return theme === 'light' ? setMainLightThemeColors() : setMainDarkThemeColors();
};

export const WrappedReactComponent = ({ component, theme }: Props) => {
	const colorTheme = setMainThemeColors(theme);
	const getComponent = () => {
		switch (component) {
			case 'Pagination':
				return <AdmiralPagination />;
			case 'ProgressPage':
				return <AdmiralProgressPage />;
			case 'Buttons':
				return <AdmiralButtons />;
			case 'SliderRange':
				return <AdmiralSliderRange />;
			case 'Stepper':
				return <AdmiralStepper />;
			case 'ContentSwitcher':
				return <AdmiralContentSwitcher />;
			case 'CheckboxGroup':
				return <AdmiralCheckboxGroup />;
			case 'Calendar':
			default:
				return <AdmiralCalendar />;
		}
	};

	return (
		<ThemeProvider theme={colorTheme}>
			<DropdownProvider>{getComponent()}</DropdownProvider>
		</ThemeProvider>
	);
};
