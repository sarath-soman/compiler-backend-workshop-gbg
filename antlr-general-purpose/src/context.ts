import { Symbol } from './symbol';
export class Context {
  private symbols: { [key: string]: Symbol } = {};

  constructor(
    { symbols }: { symbols: { [key: string]: Symbol } } = { symbols: {} },
  ) {
    this.symbols = symbols;
  }

  public setSymbol(name: string, value: Symbol): void {
    this.symbols[name] = value;
  }

  public getSymbol(name: string): Symbol {
    return this.symbols[name];
  }
}
