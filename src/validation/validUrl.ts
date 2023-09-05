import { maxLength, object, safeParse, string, toTrimmed, transform, url } from 'valibot';
const urlSchema = object({
	link: string([toTrimmed(), maxLength(250, 'too long url sorry.'), url('not a valid url.')]),
	long: transform(string(), (s) => {
		return s == 'true';
	}),
});
/**
 *
 * @param input input by user, objec
 * @returns either true if its a valid url or a issue
 */
export function parseUrl(input: unknown) {
	const result = safeParse(urlSchema, input, {});
	if (result.success) {
		return result.output;
	} else {
		//we only care about first one we abort early + short form
		return result.issues[0].message;
	}
}
