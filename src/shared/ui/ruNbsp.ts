const NBSP = '\u00A0';

export function ruNbsp(input: string): string {
  if (!input) return input;

  if (/[<&>]/.test(input)) return input;

  const re = /(^|[\s(«"])(и|а|но|да|в|во|к|с|со|у|о|об|от|до|по|за|из|на|над|под|при|без|для|про|не)[ \t]+/giu;

  return input.replace(re, (_match, prefix: string, word: string) => `${prefix}${word}${NBSP}`);
}
