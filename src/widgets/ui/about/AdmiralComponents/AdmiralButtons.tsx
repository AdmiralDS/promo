import * as React from 'react';

import { Button } from '@admiral-ds/react-ui';
import { styled } from 'storybook/internal/theming';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export const AdmiralButtons = () => {
	return (
		<Wrapper>
			<Button dimension="xl" style={{ width: '230px' }}>
				Дать пять
			</Button>
			<Button dimension="xl" appearance="secondary" style={{ width: '230px' }}>
				Дать пять
			</Button>
		</Wrapper>
	);
};
