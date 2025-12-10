import * as React from 'react';

import { Button } from '@admiral-ds/react-ui';
import { styled } from 'storybook/internal/theming';
import type { Appearance } from '../types';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export interface AdmiralTableProps {
	dimension: Appearance;
}

export const AdmiralTable = ({ dimension }: AdmiralTableProps) => {
	return (
		<Wrapper>
			<Button dimension={dimension} style={{ width: '230px' }}>
				Дать пять
			</Button>
			<Button dimension={dimension} appearance="secondary" style={{ width: '230px' }}>
				Дать пять
			</Button>
		</Wrapper>
	);
};
