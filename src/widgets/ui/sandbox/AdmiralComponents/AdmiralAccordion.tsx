import * as React from 'react';

import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import type { Appearance } from '../types';

export interface AdmiralAccordionProps {
  dimension: Appearance;
}

export const AdmiralAccordion = ({dimension}: AdmiralAccordionProps) => {
  const accordionDimension = dimension === 'xl' ? 'l' : 'm';
	return (
		<Accordion iconPosition="left" dimension={accordionDimension}>
			<AccordionItem title="Адмирал">
				Гайдлайны обеспечивают общую коммуникацию для разработки и бизнеса
			</AccordionItem>
			<AccordionItem title="Адмирал">
				Гайдлайны обеспечивают общую коммуникацию для разработки и бизнеса
			</AccordionItem>
			<AccordionItem title="Адмирал">
				Гайдлайны обеспечивают общую коммуникацию для разработки и бизнеса
			</AccordionItem>
			<AccordionItem title="Адмирал" defaultExpanded>
				Гайдлайны обеспечивают общую коммуникацию для разработки и бизнеса
			</AccordionItem>
		</Accordion>
	);
};
