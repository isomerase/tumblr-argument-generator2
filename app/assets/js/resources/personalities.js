tumblr.resources.personalities = tumblrPrePostfixer([
	'',
	'-aligned',
	'-associating',
	'-identifying',
	'-type',
	'-supporting',
], [
	'individuals',
	'people',
	'personalities',
].concat(_.map(tumblr.resources.marginalized.nouns, pluralize)))
