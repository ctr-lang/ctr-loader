__Description__: Tests the `write` method, in which, we can skip this whole webpack -> css-loader business. The gist of `write` is that its a wrapper around `fs` that writes out the resulting `ctr` styles to a CSS file that is specified

__Notes__

+ There are probably reasons why you shouldn't do this since it smells a bit, but it does work, and works well
    - plus the `write` method gives you all kinds of "extra" write-out options which are not implemented through the default loader
    - check the `/__tests__/ctr-js/base.webpack.config.js` becuase with this method you don't use the `ExtractTextPlugin`
+ REMEMBER!!!!! -> you still need to use the ctr-loader since you don't want to pull ctr into your actual project, and if you try to shit will get all fucked and error will just keep coming
