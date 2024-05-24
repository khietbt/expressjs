export abstract class Converter<TSource, TTarget> {
  public abstract transform(source: TSource): TTarget;
}
