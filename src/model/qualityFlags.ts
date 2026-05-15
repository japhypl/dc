export function mergeQualityFlags(...flagGroups: Array<string[] | undefined>): string[] {
  return Array.from(new Set(flagGroups.flatMap((group) => group ?? [])));
}

export function hasUnclearFlag(flags: string[]): boolean {
  return flags.includes('?');
}
