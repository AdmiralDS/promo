import {
	Button,
	CheckboxField,
	CloseIconPlacementButton,
	InputField,
	largeGroupBorderRadius,
	ModalButtonPanel,
	ModalContent,
	ModalTitle,
	typography,
	type Dimension,
	type Shape
} from '@admiral-ds/react-ui';
import styled, { css, type DefaultTheme } from 'styled-components';
import type { Appearance } from '../types';

type AdmiralTheme = DefaultTheme & {
  color: Record<string, string>;
  shadow: Record<string, string>;
  shape: Shape;
};

const getAdmiralTheme = (theme: DefaultTheme): AdmiralTheme => theme as AdmiralTheme;

const width = css<{ $mobile: boolean }>`
	// 16px on left and right side
	width: ${({ $mobile }) => ($mobile ? '320px' : '592px')};
`;

const parseShadow = (token: string) => {
  let result = token;
  result = result.replace('box-shadow: ', '');
  result = result.replace(';', '');
  return result;
};

const ModalComponent = styled.div<{ $dimension: Dimension; $mobile: boolean }>`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 20px 0 24px;
	${width};
	background-color: var(
		--admiral-color-Special_ElevatedBG,
		${({ theme }) => getAdmiralTheme(theme).color['Special/Elevated BG']}
	);
	box-shadow: var(
		--admiral-box-shadow-Shadow16,
		${({ theme }) => parseShadow(getAdmiralTheme(theme).shadow['Shadow 16'])}
	);
	border-radius: var(
		--admiral-border-radius-Large,
		${({ theme }) => largeGroupBorderRadius(getAdmiralTheme(theme).shape)}
	);
	color: var(
		--admiral-color-Neutral_Neutral90,
		${({ theme }) => getAdmiralTheme(theme).color['Neutral/Neutral 90']}
	);
	outline: none;

	${typography['Body/Body 1 Long']}
	max-height: ${({ $mobile }) => ($mobile ? '84vh' : '90vh')};
`;

const StyledInputField = styled(InputField)<{ $mobile?: boolean }>`
	${({ $mobile }) => !$mobile && 'width: 364px'};
`;

const InputBox = styled.div<{ $mobile: boolean }>`
	margin-top: 28px;
	margin-bottom: 28px;

	${({ $mobile }) =>
		$mobile &&
		`margin-top: 16px;
	margin-bottom: 16px;`}

	> :not(:first-child) {
		margin-top: 20px;
	}
`;

const StyledModalTitle = styled(ModalTitle)<{ $mobile: boolean }>`
	${({ $mobile }) =>
		$mobile &&
		`padding-bottom: 0px;
		padding-left: 16px;
		${typography['Header/H6']}`}
`;

const StyledModalContent = styled(ModalContent)<{ $mobile: boolean }>`
	${({ $mobile }) =>
		$mobile &&
		`> div:first-child {
			padding-inline: 16px !important;
		}`}
`;

const StyledModalButtonPanel = styled(ModalButtonPanel)<{ $mobile: boolean }>`
	${({ $mobile }) =>
		$mobile &&
		`
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 8px 16px 0;

		> button {
			margin: 0;
		}
	`}
`;

const CloseButton = styled(CloseIconPlacementButton)<{ $mobile: boolean }>`
	position: absolute;
	top: ${({ $mobile }) => ($mobile ? 18 : 14)}px;
	right: ${({ $mobile }) => ($mobile ? 10 : 18)}px;

	@media (hover: none) {
		&:hover {
			> div:first-child {
				background-color: transparent !important;
			}
		}
	}
`;

export interface AdmiralModalProps {
	dimension?: Appearance;
	fieldCount?: number;
	isMobile: boolean;
}

export const AdmiralModal = ({ dimension = 'm', fieldCount = 2, isMobile }: AdmiralModalProps) => (
	<ModalComponent $mobile={isMobile} $dimension={dimension as Dimension}>
		<StyledModalTitle $mobile={isMobile} id="modal-title">
			Получение доступа
		</StyledModalTitle>
		<StyledModalContent $mobile={isMobile}>
			Заполните данные, чтобы мы могли открыть для вас доступ
			<InputBox $mobile={isMobile}>
				{fieldCount >= 1 && (
					<>
						<StyledInputField
							$mobile={isMobile}
							dimension={isMobile ? 's' : dimension === 'l' ? 'm' : dimension}
							label="Ваше имя"
						/>
					</>
				)}
				{fieldCount >= 2 && (
					<>
						<StyledInputField
							$mobile={isMobile}
							dimension={isMobile ? 's' : dimension === 'l' ? 'm' : dimension}
							label="Ваша фамилия"
						/>
					</>
				)}
				{!isMobile && fieldCount >= 3 && (
					<>
						<StyledInputField dimension={dimension === 'l' ? 'm' : dimension} label="Отчество" />
					</>
				)}
			</InputBox>
			{/*По умолчанию display: inline-flex добавляет 4px */}
			<CheckboxField style={{ display: 'flex', width: 'fit-content' }}>
				Разрешить использование личных данных
			</CheckboxField>
		</StyledModalContent>
		<StyledModalButtonPanel $mobile={isMobile}>
			<Button appearance="primary" dimension={dimension}>
				Отправить
			</Button>
			<Button appearance="secondary" dimension={dimension}>
				Отменить
			</Button>
		</StyledModalButtonPanel>
		<CloseButton $mobile={isMobile} onClick={(e) => e.currentTarget.blur()} />
	</ModalComponent>
);
