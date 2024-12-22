enum ImportType {
  Standard = 'standard',
  Custom = 'custom'
}

interface Import {
  path: string
  type: ImportType
}

export { type Import, ImportType }
