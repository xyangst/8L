import { maxLength, object, optional, string, toTrimmed, url } from 'valibot';

export const urlSchema = object({
	link: string([toTrimmed(), maxLength(250, 'too long url sorry.'), url('not a valid url.')]),
	long: optional(string()),
});
