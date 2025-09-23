import * as React from 'react';

import { ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';
import { styled } from 'storybook/internal/theming';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const list = [
	{ title: 'Вариант 1', content: '1' },
	{ title: 'Вариант 2', content: '2' }
];

export const AdmiralContentSwitcher = () => {
	const [active1, setActive1] = React.useState(0);
	const [active2, setActive2] = React.useState(0);
	return (
		<Wrapper>
			<ContentSwitcher dimension={'l'} appearance="primary">
				{list.map((item, index) => {
					return (
						<ContentSwitcherItem
							key={index}
							active={index === active1}
							onClick={() => setActive1(index)}
						>
							{item.title}
						</ContentSwitcherItem>
					);
				})}
			</ContentSwitcher>
			<ContentSwitcher dimension={'l'}>
				{list.map((item, index) => {
					return (
						<ContentSwitcherItem
							key={index}
							active={index === active2}
							onClick={() => setActive2(index)}
						>
							{item.title}
						</ContentSwitcherItem>
					);
				})}
			</ContentSwitcher>
		</Wrapper>
	);
};
