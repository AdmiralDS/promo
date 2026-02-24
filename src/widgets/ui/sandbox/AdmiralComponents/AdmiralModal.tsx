import * as React from 'react';

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

const Separator = styled.div`
	height: 20px;
`;

const width = css<{ $dimension: Dimension; $mobile?: boolean }>`
	width: ${({ $dimension, $mobile }) => {
		// 16px on left and right side
		if ($mobile) return 'calc(100% - 32px)';
		switch ($dimension) {
			case 's':
				return '384px';
			case 'm':
				return '488px';
			case 'xl':
				return '800px';
			case 'l':
			default:
				return '592px';
		}
	}};
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
	max-height: ${({ $mobile }) => ($mobile ? '84vh' : '90vh')};
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
	${({ $mobile }) => ($mobile ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
	color: var(
		--admiral-color-Neutral_Neutral90,
		${({ theme }) => getAdmiralTheme(theme).color['Neutral/Neutral 90']}
	);
	outline: none;
`;

export interface AdmiralModalProps {
	dimension?: Appearance;
	fieldCount?: number;
}

export const AdmiralModal = ({ dimension = 'm', fieldCount = 3 }: AdmiralModalProps) => {
	return (
		<ModalComponent $dimension={dimension as Dimension}>
			<ModalTitle id="modal-title">Получение доступа</ModalTitle>
			<ModalContent>
				Заполните данные, чтобы мы могли открыть для вас доступ
				<Separator />
				{fieldCount >= 1 && (
					<>
						<InputField label="Ваше имя" />
						<Separator />
					</>
				)}
				{fieldCount >= 2 && (
					<>
						<InputField label="Ваша фамилия" />
						<Separator />
					</>
				)}
				{fieldCount >= 3 && <InputField label="Отчество" />}
				<Separator />
				<CheckboxField>Разрешить использование личных данных</CheckboxField>
			</ModalContent>
			<ModalButtonPanel>
				<Button appearance="primary" dimension="m">
					Отправить
				</Button>
				<Button appearance="secondary" dimension="m">
					Отменить
				</Button>
			</ModalButtonPanel>
		</ModalComponent>
	);
};
