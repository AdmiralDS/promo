import * as React from 'react';

import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';

const steps = [
	{ key: 0, content1: `Шаг 1.`, content2: 'Создание заявки', completed: true },
	{ key: 1, content1: 'Шаг 2.', content2: 'Рассмотрение заявки', completed: true },
	{ key: 2, content1: 'Шаг 3.', content2: 'Согласование документов', error: true },
	{ key: 3, content1: 'Шаг 4.', content2: 'Подписание документов' }
];

export const AdmiralStepper = () => {
	return (
		<Stepper activeStep={2} orientation="vertical">
			{steps.map(({ content1, content2, key, ...step }) => {
				return (
					<Step {...step} key={key} style={{ width: '224px', height: '83px' }}>
						<StepContent>{content1 + ' ' + content2}</StepContent>
					</Step>
				);
			})}
		</Stepper>
	);
};
