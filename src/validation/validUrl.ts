import { maxLength, safeParse, string, toTrimmed, url } from 'valibot';
const urlSchema = string([toTrimmed(), maxLength(250), url()]);

export function parseUrl(input: unknown) {
	const result = safeParse(urlSchema, input, {
		abortPipeEarly: true
	});
	if (result.success) {
		return result.output;
	} else {
		//we only care about first one we abort early + short form
		return result.issues[0];
	}
}
