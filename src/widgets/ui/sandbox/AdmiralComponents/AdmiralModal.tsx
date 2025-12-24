import * as React from 'react';

import {
	Button,
	CheckboxField,
	InputField,
	Modal,
	ModalButtonPanel,
	ModalContent,
	ModalTitle
} from '@admiral-ds/react-ui';
import { styled } from 'storybook/internal/theming';
import type { Appearance } from '../types';

const Separator = styled.div`
	height: 20px;
`;

export interface AdmiralModalProps {
	dimension?: Appearance;
	fieldCount?: number;
	container?: HTMLDivElement;
}

export const AdmiralModal = ({ fieldCount = 3, container }: AdmiralModalProps) => {
	const modalContainer = container ?? document.body;

	return (
		<Modal
			// onClose={() => {
			// 	setOpened(false);
			// }}
			aria-labelledby="modal-title"
			//closeButtonPropsConfig={() => closeButtonProps}
			container={modalContainer}
		>
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
				<Button
					appearance="primary"
					dimension="m"
					//onClick={() => onYesClick({ selected, inputValue })}
				>
					Отправить
				</Button>
				<Button appearance="secondary" dimension="m" /*onClick={onNoClick}*/>
					Отменить
				</Button>
			</ModalButtonPanel>
		</Modal>
	);
};
