import * as React from 'react';

import { ProgressPage } from '@admiral-ds/react-ui';
import { styled } from 'storybook/internal/theming';

const Wrapper = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const AdmiralProgressPage = () => {
	return (
		<Wrapper>
			<ProgressPage
				label={
					<>
						<div>Загрузка данных...</div>
						<div>50%</div>
					</>
				}
				percent={50}
				role="alert"
				aria-live="assertive"
			/>
			<ProgressPage
				appearance="error"
				label={
					<>
						<div>Ошибка загрузки</div>
						<div>50%</div>
					</>
				}
				percent={50}
				role="alert"
				aria-live="assertive"
			/>
		</Wrapper>
	);
};
