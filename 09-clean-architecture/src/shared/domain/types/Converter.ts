export abstract class Converter<TSource, TTarget> {
  public abstract to(source: TSource): TTarget;

  public abstract from(target: TTarget): TSource;
}
