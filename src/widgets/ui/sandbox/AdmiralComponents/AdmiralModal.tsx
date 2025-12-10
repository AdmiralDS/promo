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

export const AdmiralModal = ({ fieldCount = 3,container }: AdmiralModalProps) => {
	const inputsToRender = Math.min(Math.max(fieldCount, 1), 3);

	return (
		<Modal
			// onClose={() => {
			// 	setOpened(false);
			// }}
			aria-labelledby="modal-title"
			//closeButtonPropsConfig={() => closeButtonProps}
      container={container}
		>
			<ModalTitle id="modal-title">Получение доступа</ModalTitle>
			<ModalContent>
				Заполните данные, чтобы мы могли открыть для вас доступ
				<Separator />
				{inputsToRender >= 1 && (
					<>
						<InputField label="Ваше имя" />
						<Separator />
					</>
				)}
				{inputsToRender >= 2 && (
					<>
						<InputField label="Ваша фамилия" />
						<Separator />
					</>
				)}
				{inputsToRender >= 3 && <InputField label="Отчество" />}
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
