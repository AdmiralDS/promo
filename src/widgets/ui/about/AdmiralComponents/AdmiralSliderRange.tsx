import * as React from 'react';

import { SliderRangeField } from '@admiral-ds/react-ui';

export const AdmiralSliderRange = () => {
	return (
		<SliderRangeField
			label="Сумма"
			style={{ width: '449px' }}
			dimension="xl"
			defaultValue={['1000.00', '10000.00']}
			prefix={['От', 'До']}
			suffix="₽"
			precision={2}
			minValue={1000}
			maxValue={10000}
		/>
	);
};
