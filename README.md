# ctr-loader

[![npm](https://img.shields.io/npm/l/ctr-loader.svg)](https://github.com/ctr-lang/ctr-loader/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/ctr-loader.svg)](https://www.npmjs.com/package/ctr-loader)
[![wercker status](https://app.wercker.com/status/1b86ee1c3b21b487764b9e14794a4b36/s/master "wercker status")](https://app.wercker.com/project/byKey/1b86ee1c3b21b487764b9e14794a4b36)
[![David](https://img.shields.io/david/ctr-lang/ctr-loader.svg)](https://github.com/ctr-lang/ctr-loader/blob/master/package.json)

## Description

An unopinionated-ish loader specifically designed to work hand-in-hand with `ctr` and its Javascript API. The loader itself is pretty damn simple, and the heavy lifting is done through the `ctr` Javascript API. Nevertheless, without working knowledge of both `ctr` and it's complementary Javascript API this loader will be of little use.


## Documentation

The documentation is on [docs.ctr-lang.com](https://docs.ctr-lang.com) because I can control the format and presentation. The following links correspond to the various parts of the documentation.

+ [ctr-loader](https://docs.ctr-lang.com/javascript/ctr-loader)
  * [Info](https://docs.ctr-lang.com/javascript/ctr-loader/#info)
  * [webpack.config.js](https://docs.ctr-lang.com/javascript/ctr-loader/#webpackconfigjs)
  * [Mode of Operation](https://docs.ctr-lang.com/javascript/ctr-loader/#mode-of-operation)
  * [requireWatch](https://docs.ctr-lang.com/javascript/ctr-loader/#requirewatch)
  * [Loader Options](https://docs.ctr-lang.com/javascript/ctr-loader/#loader-options)

## The Gist

```js
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.ctr(\.js|\.yml|\.yaml)$/,
      use: ['style-loader', 'css-loader', 'ctr-loader']
    }]
  }
  // ...
};
```

## Test's

I love tests, and I try to treat every test like a mini-demo or an example in and of itself. Accordingly, the tests not only validate the raw mechanics of Webpack but also to give a better understanding of the modes of action `ctr` can facilitate. In fact, I would go as far as to say the tests focus more on the mode of action compared to the Webpack mechanics, although, you can't have one without the other. I highly encourage you to cruise on over to `/__tests__` because I can only convey limited context through wordz.


## Thoughts on Naming Conventions

I'm a big fan of the `[filename].ctr.js` and `[filename].ctr.yml` file extension naming convention for a few reasons, but primarily because it eliminates potential ambiguities. However, this naming convention by no means is mandatory, and you can use any `test` Regex you desire for the loader.

In the tests, for the main `ctr` entry point, I employ the naming convention of `_index.ctr.js`. My thinking behind this convention is it ensures the entry file is always at the top of the folder directory. Nonetheless, I should note, this convention could confuse other developers since the underscore typically signals a private meaning of sorts.

Individual `ctr` styles, depending on size and grouping should be in split into separate files when it makes sense. Then if possible the file names should correspond to the styles selector, i.e. `box.ctr.js`, `nav.ctr.js`. This naming convention builds upon the `.ctr.js` filename extension convention to quickly allow you to navigate to specific style files though a fuzzy file search.


## Thoughts on Structure

My current thoughts regarding a pure Javascript `ctr` structure is quite malleable, but in my opinion, you should focus your project around single entry points. That is, for a component style, depending on size, I would break the `ctr` file down into corresponding style elements and have a single entry point in which you coalesce those styles via `requireWatch`. At the same time, writing `ctr` styles in Javascript is a pain in the butt, and you should consider a structure that favors the YAML flavor of `ctr`.

Generally speaking, I recommend you utilize CSS preprocessor architectures like [ITCSS](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528). There's no reason to reinvent the wheel even if you're trendy cat CSS'ing in JS. In relative terms, `requireWatch` is the same thing as a CSS preprocessor's `@import`. Also, keep in mind, `requireWatch` can accept an Array of file paths, so you don't have to wear out your little weary fingers by having to type `requireWatch` a billion times like you have to do with `@import`.

In terms of `ctr` classes, you should and can leverage them. As I mention in the documentation, don't rely on webpack's loading order of `require`. One would think you could, or at least I did at one point, however, during production builds specifically about ~8% of the time things get fucked in more or less words. As far as I can ascertain the fault lies in `ctr` but as to why I'm not all to sure, and I can only assume it's a combination of factors like the weather. In retrospect, regardless of this bug/error, I believe this implicit structure is by it's nature an anti-pattern. Rather I suggest you use a declarative approach when it comes to classes in which you use `requireWatch` at the head of a style. This not only solves the build bug/error, but more importantly it indicates to other developers that you're using classes and the location of said classes.


## Webpack 1.x.x Tests?

Sorry, don't got the time to spin up all those rhymes.


---

Best, te



