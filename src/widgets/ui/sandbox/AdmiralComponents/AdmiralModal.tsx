import {
	Button,
	CheckboxField,
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

const width = css<{ $mobile?: boolean }>`
	// 16px on left and right side
	width: calc(100% - 32px);

	/* width: ${({ $mobile }) => ($mobile ? 'calc(100% - 32px)' : '592px')}; */
	@media (min-width: 700px) {
		width: 592px;
	}
`;

const parseShadow = (token: string) => {
	let result = token;
	result = result.replace('box-shadow: ', '');
	result = result.replace(';', '');
	return result;
};

const ModalComponent = styled.div<{ $dimension: Dimension; $mobile?: boolean }>`
	position: absolute;
	box-sizing: border-box;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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

	${typography['Body/Body 2 Long']}
	/* ${({ $mobile }) =>
		$mobile ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long']} */

		max-height: '84vh';
	/* max-height: ${({ $mobile }) => ($mobile ? '84vh' : '90vh')}; */
	@media (min-width: 700px) {
		${typography['Body/Body 1 Long']}
		max-height: '90vh';
	}
`;

const StyledInputField = styled(InputField)<{ $mobile?: boolean }>`
	/* ${({ $mobile }) => !$mobile && 'width: 364px'}; */

	@media (min-width: 700px) {
		width: 364px;
	}
`;

const InputBox = styled.div`
	margin-top: 28px;
	margin-bottom: 28px;

	> :not(:first-child) {
		margin-top: 20px;
	}
`;

export interface AdmiralModalProps {
	dimension?: Appearance;
	fieldCount?: number;
	isMobile: boolean;
}

export const AdmiralModal = ({ dimension = 'm', fieldCount = 2 }: AdmiralModalProps) => {
	return (
		<ModalComponent $dimension={dimension as Dimension}>
			<ModalTitle id="modal-title">Получение доступа</ModalTitle>
			<ModalContent>
				Заполните данные, чтобы мы могли открыть для вас доступ
				<InputBox>
					{fieldCount >= 1 && (
						<>
							<StyledInputField dimension={dimension === 'xl' ? 'm' : dimension} label="Ваше имя" />
						</>
					)}
					{fieldCount >= 2 && (
						<>
							<StyledInputField
								dimension={dimension === 'xl' ? 'm' : dimension}
								label="Ваша фамилия"
							/>
						</>
					)}
					{fieldCount >= 3 && (
						<>
							<StyledInputField dimension={dimension === 'xl' ? 'm' : dimension} label="Отчество" />
						</>
					)}
				</InputBox>
				<CheckboxField>Разрешить использование личных данных</CheckboxField>
			</ModalContent>
			<ModalButtonPanel>
				<Button appearance="primary" dimension={dimension}>
					Отправить
				</Button>
				<Button appearance="secondary" dimension={dimension}>
					Отменить
				</Button>
			</ModalButtonPanel>
		</ModalComponent>
	);
};
