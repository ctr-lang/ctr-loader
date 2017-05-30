__Description__: Should be able to have multiple entry points with multiple returns, as in, `ctr.getRes()` from multiple entry points and they should be combined together.

__Notes__

+ Remeber the same `ctr` instance is passed along to all the files that use the ctr-loader
+ You could set up things diffrently, but, I think this is the most logical way and other methods can lead to all sorts of potential errors if you don't know what your doing


