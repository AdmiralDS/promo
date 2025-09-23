import * as React from 'react';

import { PaginationTwo } from '@admiral-ds/react-ui';
import { styled } from 'storybook/internal/theming';

const PaginationWrapper = styled.div`
	overflow-x: auto;
	width: 100%;
	padding: 0 8px;
	box-sizing: border-box;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const AdmiralPagination = () => {
	const [page1, setPage1] = React.useState(1);

	return (
		<PaginationWrapper>
			<PaginationTwo count={7} page={page1} onChange={(_, page) => setPage1(page)} mobile />
		</PaginationWrapper>
	);
};
