import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


UIkit.icon.add({
	newline: `
		<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5" />
			<line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52" />
			<line fill="none" stroke="#000" x1="15.61" y1="10" x2="15.59" y2="4" />
		</svg>
	`,
	euro: `
	<svg width="20" height="20" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m 310.706,431.09381 c -1.314,-6.63 -7.835,-10.872 -14.424,-9.369 -10.692,2.439 -27.51528,7.24335 -45.426,5.413 -56.22216,-5.74552 -125.32304,-63.87905 -144.85504,-114.53805 h 115.67418 c 5.6137,-1e-5 10.2734,-3.9417 11.708,-9.369 l 4.38782,-16.59976 c 1.686,-7.502 -4.019,-14.631 -11.708,-14.631 H 91.825957 c -1.21,-14.328 0.427504,-28.287 1.978504,-42.245 H 240.39746 c 5.63885,2.6e-4 8.67573,-3.92557 9.8815,-9.434 l 6.512,-19.79721 c 1.638,-7.484 -4.061,-14.56191 -11.723,-14.566 l -138.278,-0.0738 c 20.633,-44.991 86.65449,-98.906966 141.01304,-104.802227 14.40155,-1.561869 23.77662,-0.113698 37.851,4.145 6.216,1.268 12.347,-2.498 14.002,-8.623 L 311.647,52.124 C 313.469,45.383 309.182,38.508 302.321,37.207 290.217,34.912 270.71,32 249.635,32 152.451,32 74.03,102.20979 45.075,185.95779 H 12 c -6.627,0 -12,5.373 -12,12 V 217.755 c 0,6.627 5.373,12 12,12 H 33.569 C 32.56,243.362 32.388,259.042 33.388,272 H 12 c -6.627,0 -12,5.373 -12,12 v 16.59976 c 0,6.627 5.373,12 12,12 H 42.114 C 67.139,402.93176 145.264,480 249.635,480 c 26.301,0 48.562,-4.544 61.101,-7.788 6.167,-1.595 10.027,-7.708 8.788,-13.957 z"
			fill="currentColor" />
	</svg>
	`,
	percentage: `
		<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<circle fill="none" stroke="currentColor" cx="4" cy="3.5" r="2.5"></circle>
			<circle fill="none" stroke="currentColor" cx="16" cy="16.5" r="2.5"></circle>
			<line fill="none" stroke="currentColor" stroke-width="1.1" x1="16" y1="3.5" x2="4" y2="16.5"></line>
		</svg>
	`,
	'chevron-double-up': `
		<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-double-up">
			<polyline fill="none" stroke="#000" stroke-width="1.03" points="4 10 10 4 16 10"></polyline>
			<polyline fill="none" stroke="#000" stroke-width="1.03" points="4 16 10 10 16 16"></polyline>
		</svg>
	`,
	'chevron-double-down': `
	<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-double-down">
		<polyline fill="none" stroke="#000" stroke-width="1.03" points="16 4 10 10 4 4"></polyline>
		<polyline fill="none" stroke="#000" stroke-width="1.03" points="16 10 10 16 4 10"></polyline>
	</svg>
	`,
});
UIkit.use(Icons);