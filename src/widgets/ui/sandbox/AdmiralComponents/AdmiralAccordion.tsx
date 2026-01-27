import * as React from 'react';

import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import type { AccordionArrowPosition, AccordionLineCount } from '../types';

export interface AdmiralAccordionProps {
	accordionArrowPosition?: AccordionArrowPosition;
	accordionLineCount?: AccordionLineCount;
}

export const AdmiralAccordion = ({ accordionArrowPosition, accordionLineCount }: AdmiralAccordionProps) => {
	void accordionLineCount;
	return (
		<Accordion iconPosition={accordionArrowPosition}>
			<AccordionItem title="Консистентность">
				Дизайн-система обеспечивает единый визуальный язык и поведение компонентов
			</AccordionItem>
			<AccordionItem title="Доступность">
				Компоненты разрабатываются с учетом принципов инклюзивного дизайна
			</AccordionItem>
			<AccordionItem title="Адаптивность">
				Компоненты работают на любых устройствах и сохраняют читабельность контента
			</AccordionItem>
			<AccordionItem title="Гайдлайны" defaultExpanded>
				Гайдлайны обеспечивают общую коммуникацию для разработки и бизнеса
			</AccordionItem>
		</Accordion>
	);
};
