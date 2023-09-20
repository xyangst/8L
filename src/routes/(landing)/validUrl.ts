import { boolean, coerce, maxLength, object, safeParse, string, toTrimmed, url } from 'valibot';

const urlSchema = object({
	link: string([toTrimmed(), maxLength(250, 'too long url sorry.'), url('not a valid url.')]),
	long: coerce(boolean(), Boolean),
});
/**
 *
 * @param input input by user, object
 * @returns either string with error message or url or cleaned object
 */
export function parseUrl(input: unknown) {
	const result = safeParse(urlSchema, input, { abortPipeEarly: true });
	if (result.success) {
		return result.output;
	} else {
		//we only care about first one we abort early
		return result.issues[0].message;
	}
}
