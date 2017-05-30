__Description__: Should be able to have multiple entry points with multiple returns, as in, `ctr.getRes()` from multiple entry points and they should be combined together.

__Notes__

+ Remeber the same `ctr` instance is passed along to all the files that use the ctr-loader
+ Currently, I think this is an anti-pattern and you should only have one entry point for `ctr` per `.js` file


