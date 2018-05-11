//  chain :: Monad m => (a -> m b) -> m a -> m b
var chain = curry(function(f, m) {
    return m.map(f).join(); // 或者 compose(join, map(f))(m)
});