import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';

export function documentToPageContent(document) {

	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node) => `<img alt="${node?.data?.target?.fields?.description}" src=${node?.data?.target?.fields?.file?.url + '?w=350'} />`
		}
	}

	return parse(documentToHtmlString(document, options));
};