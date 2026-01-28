import * as React from 'react';

import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import type { AccordionArrowPosition, AccordionLineCount } from '../types';

const items = [
	{
		title: 'Консистентность',
		content: 'Дизайн-система обеспечивает единый визуальный язык и поведение компонентов'
	},
	{
		title: 'Доступность',
		content: 'Компоненты разрабатываются с учетом принципов инклюзивного дизайна'
	},
	{
		title: 'Адаптивность',
		content: 'Компоненты работают на любых устройствах и сохраняют читабельность контента'
	},
	{
		title: 'Гайдлайны',
		content: 'Гайдлайны обеспечивают общую коммуникацию для разработки и бизнеса'
	}
];

export interface AdmiralAccordionProps {
	accordionArrowPosition: AccordionArrowPosition;
	accordionLineCount: AccordionLineCount;
}

export const AdmiralAccordion = ({
	accordionArrowPosition,
	accordionLineCount
}: AdmiralAccordionProps) => {
	return (
		<Accordion iconPosition={accordionArrowPosition}>
			{items.map(({ title, content }, i) => {
				return i < accordionLineCount ? (
					<AccordionItem defaultExpanded={i === 0 ? true : undefined} title={title}>
						{content}
					</AccordionItem>
				) : null;
			})}
		</Accordion>
	);
};
