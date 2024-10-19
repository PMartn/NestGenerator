export const COMPLETE_USE_CASE_INDEX_TEMPLATE =
`export * from './create-$[name].use-case';
export * from './delete-$[name].use-case';
export * from './get-$[name].use-case';
export * from './get-$[name]s.use-case';
export * from './update-$[name].use-case';`