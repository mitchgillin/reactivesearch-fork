/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getClassName } from '@mitchgillin/reactivecore/lib/utils/helper';
import types from '@mitchgillin/reactivecore/lib/utils/types';
import { noSuggestions } from '../../../styles/Input';

const SuggestionWrapper = ({ theme, themePreset, children, innerClassName, innerClass }) => (
	<div
		css={noSuggestions(themePreset, theme)}
		className={getClassName(innerClass, innerClassName || '')}
	>
		<li>{children}</li>
	</div>
);
SuggestionWrapper.propTypes = {
	theme: types.style,
	innerClassName: types.string,
	themePreset: types.themePreset,
	children: types.children,
	innerClass: types.style,
};

export default SuggestionWrapper;
