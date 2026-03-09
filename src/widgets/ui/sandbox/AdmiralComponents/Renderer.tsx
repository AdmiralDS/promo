// Renderer.ts
import { createRoot } from 'react-dom/client';
import { WrappedReactComponent, type Props as Options } from './WrappedReactComponent';

export const renderer = (container: HTMLDivElement, options: Options) => {
	const root = createRoot(container);
	
	// Функция для рендера с опциями
	const render = (newOptions: Options) => {
		root.render(<WrappedReactComponent {...newOptions} />);
	};
	
	// Начальный рендер
	render(options);
	
	// Возвращаем объект с методом updateProps
	return {
		updateProps: (newOptions: Options) => {
			render(newOptions);
		},
		unmount: () => {
			root.unmount();
		}
	};
};