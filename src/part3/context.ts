import { SymbolInfo } from "./symbol";

export class LexicalContext {
  private symbolTable: Record<string, SymbolInfo> = {};
  private parentContext: LexicalContext | null = null;

  constructor({
    parentContext = null,
    symbolTable = {},
  }: {
    parentContext?: LexicalContext | null;
    symbolTable?: Record<string, SymbolInfo>;
  }) {
    this.parentContext = parentContext;
    this.symbolTable = {
      ...symbolTable,
    };
  }

  public setSymbol(name: string, value: SymbolInfo) {
    this.symbolTable[name] = value;
  }

  public getSymbol(name: string): SymbolInfo {
    if (this.symbolTable[name] === undefined) {
      if (this.parentContext) {
        return this.parentContext.getSymbol(name);
      }
      throw new Error(`Symbol ${name} is not defined`);
    }
    return this.symbolTable[name];
  }
}
