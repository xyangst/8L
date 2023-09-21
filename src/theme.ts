import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme: CustomThemeConfig = {
	name: 'orange',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '6px',
		'--theme-rounded-container': '6px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ff7a00
		'--color-primary-50': '255 235 217', // #ffebd9
		'--color-primary-100': '255 228 204', // #ffe4cc
		'--color-primary-200': '255 222 191', // #ffdebf
		'--color-primary-300': '255 202 153', // #ffca99
		'--color-primary-400': '255 162 77', // #ffa24d
		'--color-primary-500': '255 122 0', // #ff7a00
		'--color-primary-600': '230 110 0', // #e66e00
		'--color-primary-700': '191 92 0', // #bf5c00
		'--color-primary-800': '153 73 0', // #994900
		'--color-primary-900': '125 60 0', // #7d3c00
		// secondary | #0349ff
		'--color-secondary-50': '217 228 255', // #d9e4ff
		'--color-secondary-100': '205 219 255', // #cddbff
		'--color-secondary-200': '192 210 255', // #c0d2ff
		'--color-secondary-300': '154 182 255', // #9ab6ff
		'--color-secondary-400': '79 128 255', // #4f80ff
		'--color-secondary-500': '3 73 255', // #0349ff
		'--color-secondary-600': '3 66 230', // #0342e6
		'--color-secondary-700': '2 55 191', // #0237bf
		'--color-secondary-800': '2 44 153', // #022c99
		'--color-secondary-900': '1 36 125', // #01247d
		// tertiary | #9c00a1
		'--color-tertiary-50': '240 217 241', // #f0d9f1
		'--color-tertiary-100': '235 204 236', // #ebccec
		'--color-tertiary-200': '230 191 232', // #e6bfe8
		'--color-tertiary-300': '215 153 217', // #d799d9
		'--color-tertiary-400': '186 77 189', // #ba4dbd
		'--color-tertiary-500': '156 0 161', // #9c00a1
		'--color-tertiary-600': '140 0 145', // #8c0091
		'--color-tertiary-700': '117 0 121', // #750079
		'--color-tertiary-800': '94 0 97', // #5e0061
		'--color-tertiary-900': '76 0 79', // #4c004f
		// success | #009706
		'--color-success-50': '217 239 218', // #d9efda
		'--color-success-100': '204 234 205', // #cceacd
		'--color-success-200': '191 229 193', // #bfe5c1
		'--color-success-300': '153 213 155', // #99d59b
		'--color-success-400': '77 182 81', // #4db651
		'--color-success-500': '0 151 6', // #009706
		'--color-success-600': '0 136 5', // #008805
		'--color-success-700': '0 113 5', // #007105
		'--color-success-800': '0 91 4', // #005b04
		'--color-success-900': '0 74 3', // #004a03
		// warning | #f5c211
		'--color-warning-50': '254 246 219', // #fef6db
		'--color-warning-100': '253 243 207', // #fdf3cf
		'--color-warning-200': '253 240 196', // #fdf0c4
		'--color-warning-300': '251 231 160', // #fbe7a0
		'--color-warning-400': '248 212 88', // #f8d458
		'--color-warning-500': '245 194 17', // #f5c211
		'--color-warning-600': '221 175 15', // #ddaf0f
		'--color-warning-700': '184 146 13', // #b8920d
		'--color-warning-800': '147 116 10', // #93740a
		'--color-warning-900': '120 95 8', // #785f08
		// error | #e01b24
		'--color-error-50': '250 221 222', // #faddde
		'--color-error-100': '249 209 211', // #f9d1d3
		'--color-error-200': '247 198 200', // #f7c6c8
		'--color-error-300': '243 164 167', // #f3a4a7
		'--color-error-400': '233 95 102', // #e95f66
		'--color-error-500': '224 27 36', // #e01b24
		'--color-error-600': '202 24 32', // #ca1820
		'--color-error-700': '168 20 27', // #a8141b
		'--color-error-800': '134 16 22', // #861016
		'--color-error-900': '110 13 18', // #6e0d12
		// surface | #18191a
		'--color-surface-50': '220 221 221', // #dcdddd
		'--color-surface-100': '209 209 209', // #d1d1d1
		'--color-surface-200': '197 198 198', // #c5c6c6
		'--color-surface-300': '163 163 163', // #a3a3a3
		'--color-surface-400': '93 94 95', // #5d5e5f
		'--color-surface-500': '24 25 26', // #18191a
		'--color-surface-600': '22 23 23', // #161717
		'--color-surface-700': '18 19 20', // #121314
		'--color-surface-800': '14 15 16', // #0e0f10
		'--color-surface-900': '12 12 13', // #0c0c0d
	},
};
