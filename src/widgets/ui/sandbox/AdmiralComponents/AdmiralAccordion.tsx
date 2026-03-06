import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import type { AccordionArrowPosition, AccordionLineCount } from '../types';

const items = [
  {
    title: 'Консистентность',
    content: 'Дизайн-система обеспечивает единый визуальный язык и\u00A0поведение компонентов',
  },
  {
    title: 'Доступность',
    content: 'Компоненты разрабатываются с\u00A0учетом принципов инклюзивного дизайна',
  },
  {
    title: 'Адаптивность',
    content: 'Компоненты работают на\u00A0любых устройствах и\u00A0сохраняют читабельность контента',
  },
  {
    title: 'Гайдлайны',
    content: 'Гайдлайны обеспечивают общую коммуникацию для\u00A0разработки и\u00A0бизнеса',
  },
];

type AdmiralTheme = DefaultTheme & { color: Record<string, string> };

const StyledAccordion = styled(Accordion)`
  box-sizing: border-box;
  padding: 12px;
  background: ${({ theme }) => (theme as AdmiralTheme).color['Neutral/Neutral 00']};
  width: 316px;
  border-radius: 16px;
  overflow: hidden;
`;

export interface AdmiralAccordionProps {
  accordionArrowPosition?: AccordionArrowPosition;
  accordionLineCount?: AccordionLineCount;
}

export const AdmiralAccordion = ({ accordionArrowPosition, accordionLineCount }: AdmiralAccordionProps) => {
  return (
    <StyledAccordion dimension="m" hideTopDivider hideBottomDivider iconPosition={accordionArrowPosition}>
      {items.slice(0, accordionLineCount).map(({ title, content }, i) => (
        <AccordionItem key={`accordionItem${i}`} defaultExpanded={i === 0} title={title}>
          {content}
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
};
